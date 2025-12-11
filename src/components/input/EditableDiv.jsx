import React, { useRef, useState } from 'react';

function EditableDiv() {
    const editableDivRef = useRef(null);
    const [content, useContent] = useState(null)

    const handleClick = () => {
        if (editableDivRef.current) {
            const content = editableDivRef.current.innerHTML;
            console.log(content); // Read the content of the editable div
        }
    };

    return (
        <div>
            <style>
                {`
            .editable:empty:before {
                content: attr(data-placeholder);
                color: #aaa;
            }
            .editable{
                padding: 10px;
                min-eight: 50px;
                margin-bottom: 10px;
                font-size: 18px;
                outline: none;
                word-break: break-word;
            }

        `}
            </style>


            <div
                className="editable"
                ref={editableDivRef}
                contentEditable={true}
                data-placeholder="What is happening?!"
            >
                {content}
            </div>
        </div>

    );
}

export default EditableDiv;
