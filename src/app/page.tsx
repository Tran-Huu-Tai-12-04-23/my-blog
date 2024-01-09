'use client';
import { Flex, Tabs, TabsProps } from 'antd';
import BlogItem from './component/ui/BlogItem';
import { Suspense } from 'react';

export default function Home() {
    const onChange = (key: string) => {
        console.log(key);
    };

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
    return (
        <div className="w-full">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
        </div>
    );
}
