'use client'
import { Open_Sans } from "next/font/google";
import { GridProvider } from "@/Providers/GridProvider";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"


const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.className}`}>
      <GridProvider>
        <body className="bg-gradient-to-br from-gray-950 to-rose-950 min-h-screen">
          <main className="">
            {children}

          </main>
            <Toaster />
        </body>
      </GridProvider>
    </html>
  );
}