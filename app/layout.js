import { Inter,Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const inter = Montserrat({ subsets: ["latin"], weight:['100','200','300','400','500','600','700','800','900']});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
        </body>
    </html>
  );
}
