import { CustomAppBar } from "@/components";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { __DEV__ } from "@apollo/client/utilities/globals";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

if (__DEV__) {
  loadDevMessages();
  loadErrorMessages();
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Catalog",
  description: "My toy book app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomAppBar></CustomAppBar>
        <main className="flex min-h-screen flex-col justify-between p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
