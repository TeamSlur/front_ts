import React, {useRef, KeyboardEvent, useEffect} from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Block as BlockType } from '../blockTypes';

interface BlockProps {
    block: BlockType;
    onContentChange: (id: string, content: string) => void;
    onMove: (draggedId: string, targetId: string) => void;
    onEnterPress: (id: string, cursorIndex: number) => void;
    onBackspacePress: (id: string) => void;
    isFocused: boolean;
    isOnlyBlock: boolean;
    isDragging?: boolean;
}

const Block: React.FC<BlockProps> = ({
                                         block,
                                         onContentChange,
                                         onMove,
                                         onEnterPress,
                                         onBackspacePress,
                                         isFocused,
                                         isOnlyBlock,
                                         isDragging,
                                     }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null); // 텍스트 영역 참조
    const dragHandleRef = useRef<HTMLSpanElement>(null); // 드래그 핸들 참조

    useEffect(() => {
        if (isFocused && textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [isFocused]);

    //드래그 가능한 요소 설정
    // localIsDragging은 로컬 드래그 상태를 추적
    const [{ isDragging: localIsDragging }, drag, preview] = useDrag({
        type: 'BLOCK',
        item: { id: block.id, block },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    //드롭 가능한 영역 설정
    const [, drop] = useDrop({
        accept: 'BLOCK',
        hover: (item: { id: string }) => {
            if (item.id !== block.id) {
                onMove(item.id, block.id);
            }
        },
    });

    useEffect(() => {
        if (dragHandleRef.current) {
            drag(dragHandleRef.current);
        }
    }, [drag]);

    //키보드 특정 키 눌렸을 때 동작 처리
    const handleKeyDown = (e: KeyboardEvent) => {
        const cursorPosition = textareaRef.current?.selectionStart || 0;
        const textareaValue = textareaRef.current?.value || '';

        if (e.key === 'Backspace' && cursorPosition === 0 && !isOnlyBlock) {
            e.preventDefault();
            onBackspacePress(block.id);
        } else if (e.key === 'ArrowUp') {
            if (cursorPosition === 0) {
                e.preventDefault();
            }
        } else if (e.key === 'ArrowDown') {
            if (cursorPosition === textareaValue.length) {
                e.preventDefault();
            }
        }
    };

    return (
        <div ref={preview} style={{ width: '100%' }}>
            <div ref={drop} className="block" style={{ opacity: isDragging || localIsDragging ? 0.5 : 1 }}>
                <span ref={dragHandleRef} className="drag-handle">☰</span>
                <textarea
                    id={`block-${block.id}`}
                    ref={textareaRef}
                    value={block.content}
                    onChange={(e) => onContentChange(block.id, e.target.value)}
                    onInput={() => {
                        if (textareaRef.current) {
                            textareaRef.current.style.height = '20px'; // Reset to initial height
                            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
                        }
                    }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey && textareaRef.current) {
                            e.preventDefault();
                            const cursorIndex = textareaRef.current.selectionStart;
                            onEnterPress(block.id, cursorIndex);
                        }
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="메시지를 입력하세요"
                />
            </div>
        </div>
    );
};

export default Block;
