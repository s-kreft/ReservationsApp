"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import UserProvider from "./lib/usersContext";
import NavBar from "./components/NavBar";
import rooms from "@/app/data/roomsData.json";
import "./i18n";
import RoomsProvider from "./lib/roomsContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NavBar></NavBar>
          <RoomsProvider initialValue={[]}>
            {/* <RoomsProvider initialValue={rooms}> */}
            <UserProvider initialValue={[]}>{children}</UserProvider>
          </RoomsProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
