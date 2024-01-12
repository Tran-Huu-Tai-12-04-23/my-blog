'use client';
import React from 'react';
import { Breadcrumb, ConfigProvider, FloatButton, Layout, Tooltip } from 'antd';
import SideBar from './sidebar';
import { ArrowUpOutlined } from '@ant-design/icons';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';
import PathName from '@/app/constant/PathName';

const { Content, Footer } = Layout;

const MainAppWrapper = (props: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [showScrollTopButton, setShowScrollTopButton] = React.useState<boolean>(false);
    const pathname = usePathname();
    const [activeSidebar, setActiveSidebar] = React.useState<string>('1');
    const [nameActivePage, setNameActivePage] = React.useState<string>('New feed');

    React.useEffect(() => {
        switch (pathname) {
            case '/' + PathName.ADD_POST: {
                setActiveSidebar(PathName.ADD_POST);
                setNameActivePage('Create new post');
                break;
            }
            case '/' + PathName.NOTIFICATION: {
                setActiveSidebar(PathName.NOTIFICATION);
                setNameActivePage('Notification');
                break;
            }
            case '/' + PathName.BOOK_MARK: {
                setActiveSidebar(PathName.BOOK_MARK);
                setNameActivePage('Bookmark');
                break;
            }
            case '/' + PathName.SIGN_UP: {
                setActiveSidebar(PathName.SIGN_UP);
                setNameActivePage('-1');
                break;
            }
            case '/' + PathName.SIGN_IN: {
                setActiveSidebar(PathName.SIGN_IN);
                setNameActivePage('-1');
                break;
            }
            case '/': {
                setNameActivePage('New feed');
                break;
            }
        }
    }, [pathname]);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 200) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    React.useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#333d4d',
                    colorBgContainer: 'transparent',
                    colorFill: '#333d4d',
                },
            }}
        >
            <ProgressBar height="4px" color="#7879f1" options={{ showSpinner: true }} shallowRouting />

            <Layout style={{ minHeight: '100vh', userSelect: 'none' }}>
                <SideBar activeSidebar={activeSidebar} />
                <Layout>
                    <Content
                        style={{
                            overflowY: 'scroll',
                            margin: '0 30px',
                        }}
                    >
                        <Breadcrumb
                            style={{ margin: '16px 0' }}
                            items={[{ path: '', title: 'Home' }, { title: nameActivePage }]}
                        ></Breadcrumb>

                        {!isLoading ? props.children : ''}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Huutai Design ©{new Date().getFullYear()} Created by Huutai
                    </Footer>
                </Layout>
            </Layout>
            {showScrollTopButton && (
                <Tooltip title="Top">
                    <FloatButton
                        onClick={scrollToTop}
                        shape="square"
                        type="primary"
                        style={{ right: 24, bottom: 24 }}
                        icon={<ArrowUpOutlined />}
                    />
                </Tooltip>
            )}
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
