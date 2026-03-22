import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "História para ENEM - Estude História de Forma Interativa",
  description: "Plataforma completa de estudo de História para o ENEM com aulas interativas, quizzes, flashcards, linhas do tempo e simulados. Prepare-se para o ENEM de forma eficiente.",
  keywords: ["ENEM", "História", "Estudo", "Quizzes", "Flashcards", "Simulado", "Educação", "Vestibular"],
  authors: [{ name: "História para ENEM" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "História para ENEM - Estude História de Forma Interativa",
    description: "Plataforma completa de estudo de História para o ENEM com aulas interativas, quizzes, flashcards, linhas do tempo e simulados.",
    url: "https://historia-enem.com.br",
    siteName: "História para ENEM",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "História para ENEM - Estude História de Forma Interativa",
    description: "Plataforma completa de estudo de História para o ENEM com aulas interativas, quizzes, flashcards, linhas do tempo e simulados.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
