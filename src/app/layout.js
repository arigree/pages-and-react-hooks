import "./globals.css";
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="mainNav">
          <ul>
            <li>
              <Link href="/" >Home</Link>
            </li>
            <li>
              <Link href="/pokemon">Pokemon</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}