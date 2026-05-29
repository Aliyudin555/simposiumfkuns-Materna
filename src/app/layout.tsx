import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/navigation";
import MobileNavigation from "@/app/components/mobile-navigation";
import Footer from "./components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
});

// Perubahan di sini: Menambahkan properti 'icons'
export const metadata: Metadata = {
  title: "Materna | 221th Hippocratic Oath Symposium",
  description: "Unraveling Critical Management in Cases of Pediatric Emergency. Symposium, Workshop and Scientific Poster Competition",
  keywords: "Materna symposium, Materna simposium, simposium fk uns, fk uns",
  icons: {
    icon: "/logo/logo.png", // Mengarah ke file public/logo.png
    shortcut: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      {/* Catatan: Tag <head> manual di bawah dihapus karena 
         sudah dihandle secara otomatis oleh objek 'metadata' di atas.
         Ini adalah cara standar Next.js yang benar.
      */}
      <body
        className={`${montserrat.variable} antialiased scrollbar h-screen`}>
        <Navigation />
        <MobileNavigation />
        <div className="min-h-screen theme-gradient-v2">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}