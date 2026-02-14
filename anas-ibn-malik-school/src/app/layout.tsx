import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anas Ibn Malik School",
  description: "Anas Ibn Malik School - Quality Education in Egypt",
  verification: {
    google: "CoAMk0WQzTvNKdxbXJYakiYUtXOAiJBuZQhOXtqXtB8",
  },
  icons: {
    icon: "images/school-logo.webp",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-BFYFTL1VT8"
  ></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BFYFTL1VT8');
      `,
    }}
  ></script>
</head>
<body
  className={`${geistSans.variable} ${geistMono.variable} antialiased`}
>
  {children}
  <Analytics />
</body>
    </html>
  );
}
