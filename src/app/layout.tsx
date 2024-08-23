import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "钟繇blog",
  description: "记录美好生活",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
