'use client';
import { useEffect, useState } from 'react';

import { Button, Layout, Result, Spin } from 'antd';
import Link from 'next/link';
import useIsAdmin from '@/hook/useIsAdmin';

async function Admin() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            clearTimeout(loadingTimeout);
        };
    }, []);

    const isAdmin = useIsAdmin();

    return (
        <Layout>
            {!isLoading ? (
                <>
                    {isAdmin ? (
                        'admin'
                    ) : (
                        <Result
                            status="403"
                            title="403"
                            subTitle="Sorry, you are not authorized to access this page."
                            extra={
                                <Button type="primary">
                                    <Link href={'/'}>Back Home</Link>
                                </Button>
                            }
                        />
                    )}
                </>
            ) : (
                <Spin />
            )}
        </Layout>
    );
}

export default Admin;
