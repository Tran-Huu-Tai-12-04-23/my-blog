import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './context/theme';
import MainAppWrapper from './component/layout/main_wrapper';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'My Blog',
    description: 'Share about my life, around study, work and study by self',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <ThemeProvider>
                <html lang="en">
                    <body suppressHydrationWarning={true} className={inter.className}>
                        <MainAppWrapper>{children}</MainAppWrapper>
                    </body>
                </html>
            </ThemeProvider>
        </ClerkProvider>
    );
}
