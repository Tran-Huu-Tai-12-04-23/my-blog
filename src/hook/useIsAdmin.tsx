'use client';
import { useOrganizationList } from '@clerk/nextjs';
import { UserMembershipParams } from '@/helper/organizations';
import { useEffect, useState } from 'react';

interface Membership {
    role: string;
}
function UseAdmin() {
    const [isAdmin, setIsAdmin] = useState<any>(true);
    const { isLoaded, userMemberships } = useOrganizationList(UserMembershipParams);
    useEffect(() => {
        if (!isLoaded) return;
        const adminData = userMemberships.data?.find((membership: Membership) => {
            return membership.role === 'org:admin';
        });
        setIsAdmin(adminData);
    }, [isLoaded, userMemberships]);
    return isAdmin;
}

export default UseAdmin;
