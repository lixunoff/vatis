import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Подключаем Inter с нужными весами
const inter = Inter({
  subsets: ["latin", "cyrillic"], // добавляем поддержку кириллицы для украинского
  weight: ["400", "500", "600", "700"], // разные веса включая medium (500)
  display: "swap",
});

export const metadata: Metadata = {
  title: "VATIS - Системи вентиляції, кондиціювання, опалення та водопостачання",
  description: "Професійний монтаж і обслуговування теплових насосів, систем вентиляції, кондиціювання та опалення в Україні.",
  openGraph: {
    title: "VATIS - Системи вентиляції, кондиціювання, опалення та водопостачання",
    description: "Професійний монтаж і обслуговування теплових насосів, систем вентиляції, кондиціювання та опалення в Україні.",
    url: "https://vatis.com.ua",
    siteName: "VATIS",
    images: [
      {
        url: "/share.jpg",
        width: 480,
        height: 300,
        alt: "VATIS - Системи вентиляції, кондиціювання, опалення та водопостачання",
      }
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VATIS - Системи вентиляції, кондиціювання, опалення та водопостачання",
    description: "Професійний монтаж і обслуговування теплових насосів, систем вентиляції, кондиціювання та опалення в Україні.",
    images: ["/share.jpg"],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌀</text></svg>"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}