import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Visual Designer Portfolio",
  description: "Portfolio template showcasing visual design work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable} antialiased font-['Epilogue']`}
      >
        {children}
      </body>
    </html>
  );
}
