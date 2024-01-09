'use client';
import React, { Suspense } from 'react';
import { Breadcrumb, ConfigProvider, Layout } from 'antd';
import SideBar from './sidebar';

const { Content, Footer } = Layout;

const MainAppWrapper = (props: { children: React.ReactNode }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#333d4d',
                    colorBgContainer: '#333d4d',
                    colorFill: '#333d4d',
                    colorPrimaryBg: '#333d4d',
                },
            }}
        >
            <Layout style={{ minHeight: '100vh', userSelect: 'none' }}>
                <SideBar />

                <Layout>
                    <Content
                        style={{
                            overflowY: 'scroll',
                            margin: '0 30px',
                        }}
                    >
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>New feed</Breadcrumb.Item>
                        </Breadcrumb>
                        <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Huutai Design ©{new Date().getFullYear()} Created by Huutai
                    </Footer>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default MainAppWrapper;

function useState(arg0: boolean): [any, any] {
    throw new Error('Function not implemented.');
}

function useEffect(arg0: () => () => void, arg1: any[]) {
    throw new Error('Function not implemented.');
}
// export default MainAppWrapper;
