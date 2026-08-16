import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/common/BackToTop";
import { personalInfo, socialLinks } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const titleFull = `${personalInfo.name} — ${personalInfo.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleFull,
    template: `%s — ${personalInfo.name}`,
  },
  description: personalInfo.summary,
  keywords: ["Frontend Developer", "React.js", "Next.js", "TypeScript", personalInfo.name],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: titleFull,
    description: personalInfo.summary,
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: titleFull,
    description: personalInfo.summary,
  },
};

// Static content only (no user input) — sets the theme before first paint to avoid a flash.
const THEME_INIT_SCRIPT = `(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    email: personalInfo.email,
    url: siteUrl,
    sameAs: socialLinks
      .filter((link) => link.href.startsWith("http"))
      .map((link) => link.href),
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <AntdRegistry>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </AntdRegistry>
      </body>
    </html>
  );
}
