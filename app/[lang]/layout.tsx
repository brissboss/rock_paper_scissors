import type { Metadata } from 'next'
import { Silkscreen } from 'next/font/google'
import './globals.css'

const silkscreen = Silkscreen({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Pierre Feuille Ciseaux',
    description: 'Une petite app pour jouer au pierre feuille ciseaux',
}

type RootLayoutProps = {
    children: React.ReactNode;
    params: {
        lang: string;
    };
};


// export default function RootLayout({children}: {children: React.ReactNode}) {
export default function RootLayout(props: RootLayoutProps) { 
    return (
        <html lang={props.params.lang} className='bg-bg-color text-white'>
            <body className={silkscreen.className}>{props.children}</body>
        </html>
    )
}