import { Metadata } from "next";

const baseURL = "https://xpensa-ai.vercel.app";

export const defaultSEO: Metadata = {
  title: {
    default: "Spensa Ai",
    template: "%s | DevsLoka UI ",
  },
  description: "Spensa Ai is a your personal spense assistant with AI",
  keywords: [
    "spense ai",
    "spense assistant",
    "spense tracker",
    "spense tracker ai",
  ],
  metadataBase: new URL(baseURL),
  alternates: {
    canonical: baseURL,
  },
  openGraph: {
    type: "website",
    url: baseURL,
    siteName: "xpensa-ai",
    images: [
      {
        url: `${baseURL}/og-default.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@devsloka_in",
    creator: "@28priyanshu2001",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  themeColor: "#da532c",
};
