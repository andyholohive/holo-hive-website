import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import AnnouncementBar from "./components/AnnouncementBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holo Hive - The Market Presence Partner™",
  description: "We've helped $30B+ in campaigns turn milestones into market momentum. The Amplification Program gives Web3 teams trust, attention, and momentum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <AnnouncementBar />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
