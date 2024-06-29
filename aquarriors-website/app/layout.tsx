import type { Metadata } from "next";
import { Montserrat, Lobster } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aquarriors",
  description:
    "A community-driven cleanup project to address water pollution in Ho Chi Minh City, Vietnam.",
};

// Heading font
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// Logo font
const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: "400",
});

// Body font
const sanfracisco = localFont({
  variable: "--font-sf-pro",
  src: "../public/SF-Pro.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lobster.variable} ${sanfracisco.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
