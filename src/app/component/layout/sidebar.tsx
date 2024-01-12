import PathName from '@/app/constant/PathName';
import { BellFilled, BookFilled, EditFilled, HomeFilled } from '@ant-design/icons';
import { UserButton, useClerk } from '@clerk/nextjs';
import { Layout, Menu, Flex, type MenuProps, Button, SiderProps, Popover } from 'antd';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { TrashFilled } from '@/assets/icon';
import useIsAdmin from '@/hook/useIsAdmin';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    path: string,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label: <Link href={path}>{label}</Link>,
        path,
    } as MenuItem;
}

type SideProps = {
    activeSidebar: string;
};
function SideBar(props: SideProps) {
    const { user } = useClerk();
    const router = useRouter();

    const isAdmin = useIsAdmin() || undefined;

    const items: MenuItem[] = [
        getItem('Home', '/', '1', <HomeFilled />),
        getItem('Notification', PathName.NOTIFICATION, PathName.NOTIFICATION, <BellFilled />),
        getItem('BookMark', PathName.BOOK_MARK, PathName.BOOK_MARK, <BookFilled />),
        getItem('Add post', PathName.ADD_POST, PathName.ADD_POST, <EditFilled />),
    ].filter(Boolean);

    const itemsHasAdmin: MenuItem[] = [
        getItem('Home', '/', '1', <HomeFilled />),
        getItem('Notification', PathName.NOTIFICATION, PathName.NOTIFICATION, <BellFilled />),
        getItem('BookMark', PathName.BOOK_MARK, PathName.BOOK_MARK, <BookFilled />),
        getItem('Add post', PathName.ADD_POST, PathName.ADD_POST, <EditFilled />),
        getItem('Admin', PathName.ADMIN, PathName.ADMIN, <TrashFilled />),
    ].filter(Boolean);

    return (
        <>
            <div className="h-full min-w-[5rem]"></div>
            <div className="fixed bottom-0 top-0 left-0">
                <Sider collapsed={true} width={300}>
                    <Flex
                        vertical
                        justify="space-between"
                        style={{
                            height: '100vh',
                        }}
                    >
                        <div className="w-full mb-4 mt-4">
                            <Image
                                onClick={() => {
                                    router.push('/');
                                }}
                                alt="logo"
                                className="m-auto"
                                height={30}
                                width={100}
                                src={
                                    'https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/img%2FScreenshot_2024-01-09_102957-removebg-preview.png?alt=media&token=f1edf166-ccd7-497d-832b-51218cbeccf8'
                                }
                            />
                        </div>
                        <Menu
                            theme="dark"
                            defaultSelectedKeys={[props.activeSidebar]}
                            key={props.activeSidebar}
                            mode="inline"
                            items={isAdmin ? itemsHasAdmin : items}
                        />
                        <div className="center-item w-full h-[5rem] text-white">
                            {user ? (
                                <UserButton afterSignOutUrl="/sign-in" />
                            ) : (
                                <Button
                                    style={{
                                        color: 'white',
                                    }}
                                    onClick={() => {
                                        router.replace(PathName.SIGN_IN);
                                    }}
                                >
                                    Login
                                </Button>
                            )}
                        </div>
                    </Flex>
                </Sider>
            </div>
        </>
    );
}

export default SideBar;
