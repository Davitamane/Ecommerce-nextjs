import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./_components/Navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Redstream",
    default: "Redstream Clothing",
  },
  description: "Ecommerce shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
