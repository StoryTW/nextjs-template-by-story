import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Geist, Inter } from 'next/font/google';

import 'modern-normalize/modern-normalize.css';
import '@/assets/styles/index.scss';

interface IRootLayout {
  readonly children: ReactNode;
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  colorScheme: 'dark',
  themeColor: '#070C0F',
};

export const metadata: Metadata = {
  title: 'Next App by Story',
  description: 'Generated next app by Story',
};

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${geistSans.variable} `}>{children}</body>
    </html>
  );
}
