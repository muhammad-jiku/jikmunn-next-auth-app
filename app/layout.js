import Navbar from '@/components/Shared/Navbar/Navbar';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}