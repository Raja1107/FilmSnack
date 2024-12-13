import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import type React from 'react';
import './tailwind.css';
import { useEffect } from 'react';

function useDarkMode() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
}

export function Layout({ children }: { children: React.ReactNode }) {
  useDarkMode();
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <header className="sticky top-0 bg-background">
        <div className="flex items-center p-4 border-b-2">
          <nav className="p-4 space-x-6">
            <Link to={'/'} className="text-primary text-xl font-bold mr-4">
              FilmSnack
            </Link>
            <Link to={'/movies'} className="text-muted-foreground hover:text-foreground">
              Movies
            </Link>{' '}
            <Link to={'/tv-shows'} className="text-muted-foreground hover:text-foreground">
              TV Shows
            </Link>{' '}
            <Link to={'/lists'} className="text-muted-foreground hover:text-foreground">
              Lists
            </Link>
          </nav>
        </div>
      </header>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
