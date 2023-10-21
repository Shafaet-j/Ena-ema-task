import { Inter, Roboto_Flex } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

const inter = Roboto_Flex({ subsets: ["latin"] });

export const metadata = {
  title: "Louis vuitton",
  description: "Created by Shafaet Hossen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
