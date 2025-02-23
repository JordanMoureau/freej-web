import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import InquiryButton from "@/components/InquiryButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Freelance Jordan | Websites & Marketing",
  description:
    "A Freelance Web Designer and Marketing Expert Out of Washington State",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/pqt7vpc.css" />
      </head>
      <body>
        <NavBar />

        {children}
        <InquiryButton />
      </body>
    </html>
  );
}
