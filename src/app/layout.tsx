import { Inter } from 'next/font/google';
import './globals.css';

import StyledComponentsRegistry from '@/components/layout/StyledComponentsRegistry';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
