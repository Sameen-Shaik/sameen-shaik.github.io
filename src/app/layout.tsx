import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sameen Shaik | Data Science & Software Engineering",
  description: "Portfolio of Sameen Shaik, a computer science student specializing in Data Science and Web Development. Dual B.Tech from India and Sweden.",
  keywords: ["Sameen Shaik", "Data Science", "Software Engineering", "Portfolio", "Sweden", "India", "B.Tech"],
  openGraph: {
    title: "Sameen Shaik | Data Science & Software Engineering",
    description: "CS Student at the intersection of Data Science and Web Development.",
    url: "https://sameenshaik.com",
    siteName: "Sameen Shaik Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameen Shaik | Data Science & Software Engineering",
    description: "CS Student at the intersection of Data Science and Web Development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
