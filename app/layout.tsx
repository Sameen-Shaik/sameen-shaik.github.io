import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaik Mahammed Sameen | Data Scientist & ML Engineer",
  description: "Portfolio of Shaik Mahammed Sameen - Data Scientist and Machine Learning Engineer specializing in ML, AI, and end-to-end system development.",
  keywords: ["Data Scientist", "Machine Learning Engineer", "AI", "Python", "Portfolio"],
  authors: [{ name: "Shaik Mahammed Sameen" }],
  openGraph: {
    title: "Shaik Mahammed Sameen | Data Scientist & ML Engineer",
    description: "Portfolio showcasing ML projects and expertise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
