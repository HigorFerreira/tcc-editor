import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Storage from '@/components/Providers/Storage';
import Template from '@/screens/Template'
import Gloss from '@/components/Providers/Gloss';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Meu TCC',
    description: 'Seu editor livre e fácil. By: Higor Ferreira',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body className={inter.className}>
                <style>{`
                html, body {
                    margin: 0;
                    padding: 0;
                }
                `}</style>
                <Storage>
                    <Gloss>
                        <Template>
                            {children}
                        </Template>
                    </Gloss>
                </Storage>
            </body>
        </html>
    )
}
