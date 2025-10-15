import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Poppins } from "next/font/google";
import SiteHeader from "../components/site-header"; 
import { Suspense } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Magma 2K25",
  description: "Create and Manage your Ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <SiteHeader />
          <main className="">{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
