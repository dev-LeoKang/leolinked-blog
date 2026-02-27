import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kang HyungGoo | Backend Engineer",
  description: "Backend engineer portfolio and technical blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}