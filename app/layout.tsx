import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import { ReduxProvider } from "@/redux/provider";
import NextThemeProvider from "./themes/NextThemeProvider";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Rest Countries API",
  description:
    "Application that allows you to search all the countries in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} min-h-[100vh]`}>
        <NextThemeProvider>
          <ReduxProvider>
            <Navbar logo="Where in the world?" />
            {children}
          </ReduxProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
