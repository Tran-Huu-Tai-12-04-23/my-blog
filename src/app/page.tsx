'use client';
import { Flex, Input, Tabs, TabsProps, Tag } from 'antd';
import BlogItem from './component/ui/BlogItem';
import { Suspense } from 'react';
import { useHorizontalScroll } from '../hook/useHorizontalScroll';

const { Search } = Input;
export default function Home() {
    const onChange = (key: string) => {
        console.log(key);
    };
    const topics = ['Tech', 'Course', 'Source', 'New Framework', 'NodeJS', 'Java'];

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Following',
            children: (
                <Suspense fallback={<div>Loading blog....</div>}>
                    <Flex vertical gap={10}>
                        <div>Content 1</div>
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                    </Flex>
                </Suspense>
            ),
        },
        {
            key: '2',
            label: 'Recommend post',
            children: (
                <Suspense fallback={<div>Loading blog....</div>}>
                    <Flex vertical gap={10}>
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                    </Flex>
                </Suspense>
            ),
        },
    ];

    const scrollContainerRef = useHorizontalScroll<HTMLDivElement>();

    return (
        <div className="w-full">
            <div className="max-w-[30rem]">
                <Search placeholder="Search by title, topic..." />
            </div>
            <div ref={scrollContainerRef} className="flex gap-2 mt-4 w-full items-center">
                {topics.map((tp, index) => {
                    return (
                        <Tag className="cursor-pointer hover:brightness-110" key={index} color="processing">
                            {tp}
                        </Tag>
                    );
                })}
            </div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
        </div>
    );
}
