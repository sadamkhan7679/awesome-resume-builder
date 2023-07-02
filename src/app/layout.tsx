"use client";
import StylesProvider from "@src/components/common/StylesProvider";
import { Inter, Open_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Awesome Resume Builder",
  description:
    " Awesome Resume Builder is a free and open source resume builder that allows you to create a resume in a few minutes. It is built with React and Material UI.",
  keywords:
    "resume, builder, resume builder, awesome, awesome resume builder, react, material ui, react resume builder, react resume, react resume builder, react resume template, react resume template builder, react resume builder template, react resume",
  // add other important meta tags here
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Awesome Resume Builder" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Awesome Resume Builder"
        />
        <meta name="application-name" content="Awesome Resume Builder" />

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} id="__next">
        <StylesProvider>{children}</StylesProvider>
      </body>
    </html>
  );
}
