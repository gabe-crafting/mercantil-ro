import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mercantil.RO - Platforma pentru afaceri românești",
  description: "Platforma pentru promovarea afacerilor românești",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
