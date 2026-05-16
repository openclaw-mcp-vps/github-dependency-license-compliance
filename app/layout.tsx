import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LicenseGuard – GitHub Dependency License Compliance",
  description: "Scan your GitHub repos for dependency license violations. Protect your engineering team from legal risks automatically.",
  openGraph: {
    title: "LicenseGuard – GitHub Dependency License Compliance",
    description: "Scan your GitHub repos for dependency license violations. Protect your engineering team from legal risks automatically.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8121d93e-9f2b-4fba-8371-cc11fcc069b5"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}