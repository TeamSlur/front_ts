import React, { useState, useEffect, useCallback } from 'react';
import './Document.scss';
import { Block as BlockType } from '../blockTypes';
import Block from '../component/Block';
import { v4 as uuidv4 } from 'uuid';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {createWebSocket, sendMessage} from "../apis/websocket";

const Document: React.FC = () => {
    const [blocks, setBlocks] = useState<BlockType[]>([{ id: uuidv4(), content: '', parentId: null, children: [] }]);
    const [focusedBlockId, setFocusedBlockId] = useState<string | null>(blocks[0].id);
    const [title, setTitle] = useState<string>('');
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws = createWebSocket((data) => {
            const { type, payload } = data;
            switch (type) {
                case 'BLOCK_UPDATED':
                    setBlocks((prevBlocks) => prevBlocks.map(block =>
                        block.id === payload.id ? { ...block, content: payload.content } : block
                    ));
                    break;
                case 'BLOCK_ADDED':
                    setBlocks((prevBlocks) => [...prevBlocks, payload]);
                    break;
                case 'BLOCK_MOVED':
                    const { draggedId, targetId } = payload;
                    const updatedBlocks = [...blocks];
                    const draggedIndex = updatedBlocks.findIndex(block => block.id === draggedId);
                    const targetIndex = updatedBlocks.findIndex(block => block.id === targetId);
                    const [draggedBlock] = updatedBlocks.splice(draggedIndex, 1);
                    updatedBlocks.splice(targetIndex, 0, draggedBlock);
                    setBlocks(updatedBlocks);
                    break;
                case 'BLOCK_REMOVED':
                    setBlocks((prevBlocks) => prevBlocks.filter(block => block.id !== payload.id));
                    break;
                default:
                    break;
            }
        });

        setSocket(ws);

        return () => {
            ws.close();
        };
    }, [blocks]);

    const addBlock = useCallback((afterId: string, cursorIndex: number) => {
        const newBlock: BlockType = { id: uuidv4(), content: '', parentId: null, children: [] };
        const index = blocks.findIndex((block) => block.id === afterId);
        const newBlocks = [...blocks];

        const currentBlock = newBlocks[index];
        const newBlockContent = currentBlock.content.substring(cursorIndex);
        currentBlock.content = currentBlock.content.substring(0, cursorIndex);

        newBlock.content = newBlockContent;
        newBlocks.splice(index + 1, 0, newBlock);

        setBlocks(newBlocks);
        setFocusedBlockId(newBlock.id);

        sendMessage(socket!, { type: 'BLOCK_ADDED', payload: newBlock });
    }, [blocks, socket]);

    const removeBlock = useCallback((id: string) => {
        if (blocks.length === 1) return;

        const index = blocks.findIndex((block) => block.id === id);
        if (index === -1) return;

        const newBlocks = [...blocks];
        const [removedBlock] = newBlocks.splice(index, 1);

        if (index > 0) {
            const prevBlock = newBlocks[index - 1];
            prevBlock.content += removedBlock.content;
            setFocusedBlockId(prevBlock.id);
        } else if (newBlocks.length > 0) {
            setFocusedBlockId(newBlocks[0].id);
        }

        setBlocks(newBlocks);
        sendMessage(socket!, { type: 'BLOCK_REMOVED', payload: { id } });
    }, [blocks, socket]);

    const moveBlock = useCallback((draggedId: string, targetId: string) => {
        const draggedBlockIndex = blocks.findIndex((block) => block.id === draggedId);
        const targetBlockIndex = blocks.findIndex((block) => block.id === targetId);

        if (draggedBlockIndex < 0 || targetBlockIndex < 0) return;

        const newBlocks = [...blocks];
        const [draggedBlock] = newBlocks.splice(draggedBlockIndex, 1);
        newBlocks.splice(targetBlockIndex, 0, draggedBlock);

        setBlocks(newBlocks);
        sendMessage(socket!, { type: 'BLOCK_MOVED', payload: { draggedId, targetId } });
    }, [blocks, socket]);

    const updateBlockContent = useCallback((id: string, content: string) => {
        setBlocks(blocks.map((block) => (block.id === id ? { ...block, content } : block)));
        sendMessage(socket!, { type: 'BLOCK_UPDATED', payload: { id, content } });
    }, [blocks, socket]);

    useEffect(() => {
        if (!focusedBlockId && blocks.length > 0) {
            setFocusedBlockId(blocks[0].id);
        }
    }, [blocks, focusedBlockId]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="document">
                <div className="title-container">
                    <input
                        type="text"
                        className="title-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="제목 없음"
                    />
                </div>
                {blocks.map((block) => (
                    <Block
                        key={block.id}
                        block={block}
                        onContentChange={updateBlockContent}
                        onMove={moveBlock}
                        onEnterPress={addBlock}
                        onBackspacePress={removeBlock}
                        isFocused={focusedBlockId === block.id}
                        isOnlyBlock={blocks.length === 1}
                    />
                ))}
            </div>
        </DndProvider>
    );
};

export default Document;
