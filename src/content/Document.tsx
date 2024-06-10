import React, {useState, useEffect} from 'react';
import './Document.scss';
import { Block as BlockType } from '../types';
import Block from '../component/Block';
import { v4 as uuidv4 } from 'uuid';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Document: React.FC = () => {
    const [blocks, setBlocks] = useState<BlockType[]>([{ id: uuidv4(), content: '', parentId: null, children: [] }]);
    const [focusedBlockId, setFocusedBlockId] = useState<string | null>(blocks[0].id);
    const [title, setTitle] = useState<string>('');

    const addBlock = (afterId: string, cursorIndex: number) => {
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
    };

    const removeBlock = (id: string) => {
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
    };

    const moveBlock = (draggedId: string, targetId: string) => {
        const draggedBlockIndex = blocks.findIndex((block) => block.id === draggedId);
        const targetBlockIndex = blocks.findIndex((block) => block.id === targetId);

        if (draggedBlockIndex < 0 || targetBlockIndex < 0) return;

        const newBlocks = [...blocks];
        const [draggedBlock] = newBlocks.splice(draggedBlockIndex, 1);
        newBlocks.splice(targetBlockIndex, 0, draggedBlock);

        setBlocks(newBlocks);
    };

    const updateBlockContent = (id: string, content: string) => {
        setBlocks(blocks.map((block) => (block.id === id ? { ...block, content } : block)));
    };

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
