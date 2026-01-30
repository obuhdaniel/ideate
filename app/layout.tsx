import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const sansation = localFont({
  src: "../public/fonts/Sansation-Bold.ttf",
  variable: "--font-sansation",
  weight: "700",
});



export const metadata: Metadata = {
  // Primary metadata
  title: {
    default: "Ideate | Digital Product Agency",
    template: "%s | Ideate",
  },
  description: "Ideate transforms visionary ideas into exceptional digital products. We specialize in thoughtful design, strategic development, and user-centered solutions that drive business growth.",
  keywords: ["digital product agency", "UX/UI design", "web development", "product strategy", "mobile apps", "SaaS development", "user experience", "creative agency"],
  

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ideate.com.ng", 
    siteName: "Ideate",
    title: "Ideate | Digital Product Agency",
    description: "Turning visionary ideas into exceptional digital experiences. We build products with purpose.",
    images: [
      {
        url: "/images/hero/ideate.png", 
        width: 1200,
        height: 630,
        alt: "Ideate Digital Product Agency",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Ideate | Digital Product Agency",
    description: "Turning visionary ideas into exceptional digital experiences.",
    images: ["/images/twitter-image.jpg"],
    creator: "@ideateagency", 
    site: "@ideateagency",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  

  // icons: {
  //   icon: [
  //     { url: "/favicon.ico" },
  //     { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  //     { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  //   ],
  //   apple: [
  //     { url: "/apple-touch-icon.png" },
  //   ],
  //   other: [
  //     {
  //       rel: "mask-icon",
  //       url: "/safari-pinned-tab.svg",
  //       color: "#5bbad5",
  //     },
  //   ],
  // },
  
  manifest: "/site.webmanifest",
  

  
  authors: [
    { name: "Ideate Agency", url: "https://ideate.com.ng" },
  ],
  
  category: "technology",
  
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  

  

  
  
  // Canonical URL
  alternates: {
    canonical: "https://ideate.com.ng", 
    languages: {
      "en-US": "https://ideate.com.ng",
    },
  },
  
  applicationName: "Ideate Digital Agency",
  referrer: "origin-when-cross-origin",
  creator: "Ideate Agency",
  publisher: "Ideate Agency",
  
  // Metadata for bookmarks
  bookmarks: ["https://ideate.com.ng", "https://ideate.com.ng/contact"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${sansation.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
