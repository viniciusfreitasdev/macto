import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Macto",
  description: "Marketing Campaign Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`} >
        {children}
      </body>
    </html>
  );
}
