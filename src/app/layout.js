import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="mainNav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/pokemon">Pokemon</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}