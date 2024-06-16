import React, { useRef, useEffect } from 'react';
import { Block as BlockType } from '../blockTypes';
import { useDrag, useDrop } from 'react-dnd';

interface BlockProps {
    block: BlockType;
    onContentChange: (id: string, content: string) => void;
    onMove: (draggedId: string, targetId: string) => void;
    onEnterPress: (afterId: string, cursorIndex: number) => void;
    onBackspacePress: (id: string) => void;
    isFocused: boolean;
    isOnlyBlock: boolean;
}

const Block: React.FC<BlockProps> = ({
                                         block,
                                         onContentChange,
                                         onMove,
                                         onEnterPress,
                                         onBackspacePress,
                                         isFocused,
                                         isOnlyBlock
                                     }) => {
    const ref = useRef<HTMLDivElement>(null);

    const [{ isDragging }, drag] = useDrag({
        type: 'BLOCK',
        item: { id: block.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: 'BLOCK',
        drop: (item: { id: string }) => onMove(item.id, block.id),
    });

    drag(drop(ref));

    useEffect(() => {
        if (ref.current) {
            ref.current.style.backgroundColor = isDragging ? 'lightgrey' : 'white';
        }
    }, [isDragging]);

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onContentChange(block.id, e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const cursorIndex = (e.target as HTMLTextAreaElement).selectionStart;
            onEnterPress(block.id, cursorIndex);
        } else if (e.key === 'Backspace' && !block.content) {
            e.preventDefault();
            onBackspacePress(block.id);
        }
    };

    return (
        <div ref={ref} className={`block ${isFocused ? 'focused' : ''}`}>
            <textarea
                value={block.content}
                onChange={handleContentChange}
                onKeyDown={handleKeyDown}
                autoFocus={isFocused}
            />
        </div>
    );
};

export default Block;
