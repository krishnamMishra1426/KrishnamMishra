import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Krishnam Mishra | Full Stack & React Native Developer",
  description:
    "Krishnam Mishra is a Full Stack Developer specializing in MERN Stack and React Native. Explore projects, skills, and professional experience in web and mobile application development.",

  keywords: [
    "Krishnam Mishra",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Native Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "JavaScript Developer",
    "MongoDB Developer",
    "SveltKit Developer"
  ],

  authors: [{ name: "Krishnam Mishra" }],
  creator: "Krishnam Mishra",
  metadataBase: new URL("https://krishnam-mishra-portfolio.vercel.app/"),
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Krishnam Mishra | Full Stack Developer",
    description:
      "Portfolio of Krishnam Mishra - Full Stack and React Native Developer specializing in modern web and mobile applications.",
    url: "https://krishnam-mishra-portfolio.vercel.app/",
    siteName: "Krishnam Portfolio",
    type: "website",
    images: [
      {
        url: "/images/home/banner/banner-img.png",
        width: 1200,
        height: 630,
        alt: "Krishnam Mishra | Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Krishnam Mishra | Full Stack Developer",
    description:
      "Explore the portfolio of Krishnam Mishra, a Full Stack and React Native Developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
