'use client';
import React from 'react';
import { Button, Card, Flex, Skeleton, Space, Typography } from 'antd';
import { TrashFilled } from '@/assets/icon';
import { DotChartOutlined } from '@ant-design/icons';

const cardStyle: React.CSSProperties = {
    width: '25%',
    scale: '95%',
    background: 'rgba(0,0,0,0.1)',
};

const imgStyle: React.CSSProperties = {
    display: 'block',
    height: '200px',
    borderRadius: '10px',
};

function BlogItem() {
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <Card className="relative group cursor-pointer overflow-hidden" style={cardStyle}>
            <Skeleton loading={loading} active>
                <Space className="absolute backdrop-blur-md bg-[rgba(0,0,0,0.1)] -translate-x-[100%] group-hover:translate-x-0 w-fit  top-0 bottom-0 left-0 transition-all">
                    <Flex justify="end" className="pl-4 pr-4">
                        <TrashFilled key="setting" className="scale-[150%] hover:text-red-600" />
                    </Flex>
                </Space>
                <Flex justify="space-between">
                    <img
                        alt="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={imgStyle}
                    />
                    <Flex vertical align="flex-end" justify="space-between" style={{ padding: 10 }}>
                        <Typography.Title level={3}>
                            Antd is an enterprise-class UI design language and React UI library.
                        </Typography.Title>
                        <Button className="mt-10" type="primary" href="https://ant.design" target="_blank">
                            Read More
                        </Button>
                    </Flex>
                </Flex>
            </Skeleton>
        </Card>
    );
}

export default BlogItem;
