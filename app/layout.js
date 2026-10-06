import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "Rent gaming gadgets in Bangalore | Zero Deposit Rentals | SharePal",
  description: "Rent gaming gadgets in Bangalore from SharePal - India's most trusted lifestyle gear rental platform. Zero Deposit | Free Delivery | Excellent Quality | Pay on Delivery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable} ${ubuntu.variable}`}>
      <body className={`${inter.className} min-h-full flex flex-col bg-[#f8f9fa] text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
