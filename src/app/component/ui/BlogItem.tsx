'use client';
import Image from 'next/image';
import { Avatar, Flex, Popover, Row, Tag, Typography } from 'antd';
import { MoreOutlined, PlusOutlined, FacebookFilled, LinkOutlined, MailFilled, FlagFilled } from '@ant-design/icons';
import { useState } from 'react';
const actions = [
    {
        name: 'Share your facebook',
        icon: <FacebookFilled />,
        action: () => {},
    },
    {
        name: 'Share to mail',
        icon: <MailFilled />,
        action: () => {},
    },
    {
        name: 'Copy link',
        icon: <LinkOutlined />,
        action: () => {},
    },
    {
        name: 'Report post',
        icon: <FlagFilled />,
        action: () => {},
    },
];
function BlogItem() {
    const [open, setOpen] = useState(false);

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    const getMenuAction = () => {
        return actions.map((ac, index) => {
            return (
                <Flex
                    gap={8}
                    key={index}
                    align="center"
                    className="p-2 cursor-pointer hover:text-primary hover:bg-[rgba(0,0,0,0.1)] rounded-md"
                >
                    {ac.icon}
                    <Typography>{ac.name}</Typography>
                </Flex>
            );
        });
    };
    return (
        <div className="p-4 group hover:text-primary transition-all cursor-pointer rounded-xl w-full border-primary border-b-[1px] border-solid">
            <Flex justify="space-between">
                <Flex
                    vertical
                    gap={4}
                    style={{
                        maxWidth: '60rem',
                    }}
                >
                    <Flex justify="start" gap={10} align="center">
                        <Avatar />
                        <Typography>Amit Das</Typography>
                        <Typography.Text>4 days ago</Typography.Text>
                        <PlusOutlined className="hover:text-primary text-black cursor-pointer scale-125" />

                        <Popover
                            content={getMenuAction()}
                            title=""
                            trigger="click"
                            open={open}
                            onOpenChange={handleOpenChange}
                        >
                            <MoreOutlined className="hover:text-primary text-black cursor-pointer scale-125" />
                        </Popover>
                    </Flex>

                    <Typography.Title level={4}>Your portfolio is stopping you from geting that job</Typography.Title>
                    <Typography
                        style={{
                            color: 'inherit',
                        }}
                    >
                        An intense way to learn about the process and practice your designs skills — My 1st hackathon
                        Hackathons have been on my mind since I heard it was a good way to gain experience as a junior
                        UX designer. As my portfolio...
                    </Typography>
                    <Row
                        style={{
                            marginTop: '1rem',
                        }}
                    >
                        <Tag bordered={false} color="processing">
                            Tech
                        </Tag>
                        <Tag bordered={false} color="success">
                            Mobile
                        </Tag>
                    </Row>
                </Flex>
                <div className="w-[300px] h-fit overflow-hidden rounded-xl">
                    <Image
                        className="rounded-xl group-hover:scale-125 transition-all"
                        width={300}
                        height={300}
                        src={'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
                        alt={''}
                    />
                </div>
            </Flex>
        </div>
    );
}

export default BlogItem;
