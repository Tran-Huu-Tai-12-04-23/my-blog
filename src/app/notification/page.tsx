'use client';
import { BellFilled } from '@ant-design/icons';
import { Avatar, Flex, List, Typography } from 'antd';
import Link from 'next/link';

const data: DataItem[] = [
    {
        title: 'Title 1',
        content: 'content1 1',
        createAt: new Date(),
    },
    {
        title: 'Title 1',
        content: 'content1 1',
        createAt: new Date(),
    },
];

type DataItem = {
    title: string;
    createAt: Date;
    content: string;
};
function Notification() {
    return (
        <List
            locale={{
                emptyText: (
                    <Flex vertical>
                        <Flex gap={20}>
                            <BellFilled className="text-primary scale-[200%]" />
                            <Typography>You don't have a notification!</Typography>
                        </Flex>
                        <Link href="/">Back Home</Link>
                    </Flex>
                ),
            }}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item: DataItem) => (
                <List.Item className="hover:bg-[rgba(0,0,0,0.1)] cursor-pointer p-4 rounded-lg">
                    <List.Item.Meta
                        className="p-4"
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={
                            <Flex vertical>
                                <Typography>{item.content}</Typography>
                                <Typography>{'3 day ago'}</Typography>
                            </Flex>
                        }
                    />
                </List.Item>
            )}
        />
    );
}

export default Notification;
