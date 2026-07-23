import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Fuel Club — Never Touch a Gas Pump Again",
  description:
    "The Fuel Club is a members-only concierge fueling club. $99 a month removes the worst two minutes of the American driving day — fuel delivered to your car while it sits where you parked it.",
  keywords: [
    "concierge fueling",
    "fuel club",
    "members fueling",
    "full service fuel",
    "fuel delivery membership",
  ],
  openGraph: {
    title: "The Fuel Club — Never Touch a Gas Pump Again",
    description:
      "A members-only fueling club. $99/mo membership, $127/mo in value delivered. Show the math.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FBFAF7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&family=Yellowtail&family=Space+Mono:wght@400;700&family=Inter:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
