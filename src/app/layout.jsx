import { Inter } from 'next/font/google';
import Header from '@/ui/header/header';
import Footer from '@/ui/footer/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Prueba Tecnica - Andres Marino',
  description: 'Prueba Tecnica en NextJs 14 para Security and System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
