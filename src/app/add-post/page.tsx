'use client';
import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button, Drawer, Flex, Input, Layout, Tooltip, Typography, Upload } from 'antd';
import { ExpandOutlined, UploadOutlined } from '@ant-design/icons';
const apiKey = process.env.NEXT_PUBLIC_API_KEY_EDITOR || '';

function AddPost() {
    const editorRef = useRef<any>(null);
    const [isFullScreenEditor, setIsFullScreenEditor] = useState<boolean>(false);

    return (
        <Flex vertical gap={10}>
            <Typography.Title level={2} className="font-bold">
                Create new post
            </Typography.Title>
            <Flex vertical className="rounded-xl bg-white p-4">
                <Typography.Title level={4} className="font-bold">
                    Title
                </Typography.Title>
                <Input />
            </Flex>
            <Flex vertical className="rounded-xl bg-white p-4">
                <Typography.Title level={4} className="font-bold">
                    Short Description
                </Typography.Title>
                <Input.TextArea />
            </Flex>
            <Flex vertical className="rounded-xl bg-white p-4">
                <Typography.Title level={4} className="font-bold">
                    Thumbnails
                </Typography.Title>
                <Upload action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188" listType="picture">
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Flex>
            <Layout className="w-full h-fit relative ">
                {!isFullScreenEditor && (
                    <Layout className="absolute z-[10000] top-6 right-6">
                        <Tooltip title="Full Screen">
                            <ExpandOutlined
                                onClick={() => setIsFullScreenEditor(true)}
                                className="scale-150 cursor-pointer hover:text-primary"
                            />
                        </Tooltip>
                    </Layout>
                )}

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
            </Layout>
            <Flex className="p-4">
                <Button
                    type="primary"
                    style={{
                        background: 'green',
                    }}
                >
                    Create Now
                </Button>
            </Flex>

            <Drawer
                title=""
                closable={false}
                onClose={() => setIsFullScreenEditor(false)}
                open={isFullScreenEditor}
                placement="top"
                height={'100vh'}
            >
                <Layout
                    className="h-full w-full "
                    style={{
                        background: 'white',
                    }}
                >
                    <Editor
                        apiKey={apiKey}
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        init={{
                            height: 850,
                            plugins:
                                'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                            toolbar:
                                'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                        }}
                    />

                    <Flex className="mt-5" gap={10} justify="end">
                        <Button type="primary" onClick={() => setIsFullScreenEditor(false)}>
                            Close
                        </Button>
                        <Button
                            onClick={() => setIsFullScreenEditor(false)}
                            style={{
                                background: 'green',
                                color: 'white',
                            }}
                        >
                            Done
                        </Button>
                    </Flex>
                </Layout>
            </Drawer>
        </Flex>
    );
}

export default AddPost;
