import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FUEL CLUB — Never Touch a Gas Pump Again",
  description:
    "FUEL CLUB is a luxury, members-only concierge gas station. Pay $99/month, get $99/month in C-store credits, and enjoy complete 2-window concierge fueling without ever leaving your car.",
  keywords: [
    "concierge fueling",
    "members gas station",
    "full service fuel",
    "car wash membership",
    "fuel club",
  ],
  openGraph: {
    title: "FUEL CLUB — Never Touch a Gas Pump Again",
    description:
      "Luxury members-only concierge fueling. $99/mo membership, $99/mo in store credit, free unlimited car wash.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
