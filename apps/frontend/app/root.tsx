import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import React from "react";
import "./tailwind.css";
import { useEffect } from "react";

function useDarkMode() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
}

export function Layout({ children }: { children: React.ReactNode }) {
  useDarkMode();
  return (
    <html lang="en" className="bg-background">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
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
