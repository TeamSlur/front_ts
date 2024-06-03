import React, { useState } from 'react';
import './Document.scss';

const Document: React.FC = () => {
    const [content, setContent] = useState("여기에 문서 내용을 작성하세요.");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    return (
        <div className="documentPage">
            <h1>문서 페이지</h1>
            <textarea value={content} onChange={handleChange} />
        </div>
    );
};

export default Document;