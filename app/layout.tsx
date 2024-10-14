"use client"

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';
import "./globals.css"

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children} 
        </QueryClientProvider>
      </body>
    </html>
  );
}
