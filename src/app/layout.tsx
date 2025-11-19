import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import dbConnect from "../../backend/connect";
import LayoutWrapper from "./LayoutWrapper";

const bricolageGrotesque = Bricolage_Grotesque({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Miss Pepo | Event Host | Actor | Content Creator",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  description:
    "I’m Onaopemipo Olatunde, but 99.999999% call me Pepo, a big energy, good vibes kind of girl who believes in showing up fully, whether I’m hosting an event, creating content, or just making someone smile. I’m all about connection, creativity, and leaving a little sparkle wherever I go.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  dbConnect();
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.className} ${inter.className}`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
