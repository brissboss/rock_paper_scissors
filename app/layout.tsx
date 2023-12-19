import type { Metadata } from 'next'
import { Silkscreen } from 'next/font/google'
import './globals.css'

const silkscreen = Silkscreen({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Pierre Feuille Ciseaux',
    description: 'Une petite app pour jouer au pierre feuille ciseaux',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className='bg-bg-color text-white'>
            <body className={silkscreen.className}>{children}</body>
        </html>
    )
}