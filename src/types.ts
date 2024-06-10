// src/types.ts
export interface Block {
    id: string;
    content: string;
    parentId: string | null;
    children: string[];
}
