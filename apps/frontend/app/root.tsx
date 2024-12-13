import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import type React from 'react';
import './tailwind.css';
import { useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from './components/ui/navigation-menu';

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
      <body>
        <div className="flex items-center p-4 border-b-2">
          <nav>
            <NavigationMenu className="">
              <NavigationMenuList className="p-4 space-x-6">
                <NavigationMenuItem className="text-primary text-xl font-bold mr-4">
                  <Link to="/">FilmSnack</Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="text-muted-foreground hover:text-foreground">
                  <Link to="/movies">Movies</Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="text-muted-foreground hover:text-foreground">
                  <Link to="/tv-shows">TV Shows</Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="text-muted-foreground hover:text-foreground">
                  <Link to="/lists">Lists</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
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
