import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bengali",
});

export const metadata = {
  title: "EduPulse - School Result Management System",
  description: "Result management system for Classes 6-10",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* We inject both font variables into the body */}
      <body
        className={`${inter.variable} ${hindSiliguri.variable} font-sans bg-gray-50 text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
