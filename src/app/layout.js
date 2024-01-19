import Navbar from "./components/Navbar";
import { Providers } from "./providers";
import { useContext } from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
