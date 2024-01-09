import Center from '@/app/component/layout/center';
import { SignIn } from '@clerk/nextjs';

export default function Page() {
    return (
        <Center>
            <SignIn />
        </Center>
    );
}
