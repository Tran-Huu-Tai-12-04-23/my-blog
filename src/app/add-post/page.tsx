'use client';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY_EDITOR || '';

function AddPost() {
    const editorRef = useRef<any>(null);
    return (
        <Editor
            apiKey={apiKey}
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
                height: 500,
                plugins:
                    'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                toolbar:
                    'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
            }}
        />
    );
}

export default AddPost;
