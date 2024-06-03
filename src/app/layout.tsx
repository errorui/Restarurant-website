import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./Context/UseStore";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "restaurant logo",
  description: "best indian spicy food ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-[100vh] flex flex-col">
        <AuthContextProvider>
          <Navbar></Navbar>

          {children}
          <Footer></Footer>
        </AuthContextProvider>
      </body>
    </html>
  );
}
