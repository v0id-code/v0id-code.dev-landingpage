import type { Metadata } from "next";
import {Space_Grotesk} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"]
 
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spacegrotesk.className}`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
