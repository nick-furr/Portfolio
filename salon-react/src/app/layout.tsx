import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayesha Salon - Professional Hair Care & Styling",
  description:
    "Experience the art of hair styling with Ayesha Salon. Expert stylists, premium products, and personalized care for all your hair needs. Book your appointment online today!",
  keywords: [
    "hair salon",
    "hair coloring",
    "haircuts",
    "keratin treatment",
    "hair styling",
    "professional salon",
    "beauty salon",
  ],
  authors: [{ name: "Ayesha Salon" }],
  openGraph: {
    title: "Ayesha Salon - Professional Hair Care & Styling",
    description:
      "Expert hair styling services including cuts, color, treatments, and special occasion styling. Book online today!",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
