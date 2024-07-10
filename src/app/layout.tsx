import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mochafox.com"),
  title: "MochaFox",
  description: "Real Certified Coffee Fox",
  openGraph: {
    images: ["/warm.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-foxOrange h-full w-full flex flex-col">
          {children}
        </main>
      </body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      ) : null}
    </html>
  );
}
