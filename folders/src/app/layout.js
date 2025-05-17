import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head"; // Import if you use custom <Head> (optional)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MCAET | Mahamaya College of Agricultural Engineering & Technology",
  description:
    "Official website of MCAET - Department info, faculty, contact, and more.",
  robots: "index, follow",
  keywords: ["MCAET", "Agricultural Engineering", "Uttar Pradesh", "College"],
  verification: {
    google: "2C6KH1qwwiGzEjO6QV3BMIT24FMI-J94NmUg2PhdpGw",
  },
  alternates: {
    canonical: "https://mcaet.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
