import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "강형구 | Backend Engineer",
  description: "백엔드 엔지니어 강형구의 포트폴리오",
  metadataBase: new URL("https://leolinked.in"), // 실제 도메인으로 교체
  openGraph: {
    title: "강형구 | Backend Engineer",
    description: "포트폴리오",
    url: "https://leolinked.in",
    siteName: "leolinked",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kang HyungGoo Portfolio",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "강형구 | Backend Engineer",
    description: "Backend Engineer Portfolio",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-neutral-900">{children}</body>
    </html>
  );
}