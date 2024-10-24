import localFont from "next/font/local";
import "./globals.css";
import Navigations from "@/components/navigations/Navigations";
import Footer from "@/components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "UrbanHaven",
  description:
    "UrbanHaven, all the peaceful and comfortable living spaces you seek.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigations />
        {children}
        <Footer />
      </body>
    </html>
  );
}
