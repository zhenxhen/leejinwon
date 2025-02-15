import { Geist, Geist_Mono } from "next/font/google";
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-space-grotesk',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  // 개발 환경인지 확인
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} min-h-screen p-8 font-[family-name:var(--font-geist-sans)] relative bg-white`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2 text-center">
        <h1 className={`text-6xl tracking-tight text-[#5f6368] font-[family-name:var(--font-space-grotesk)]`}>Tomorrow</h1>
        <h1 className={`text-6xl tracking-tight text-[#5f6368] font-[family-name:var(--font-space-grotesk)]`}>for all</h1>
      </div>
      
      <div className="absolute bottom-8 left-8 text-sm text-[#5f6368]">
        <p>Design Engineer</p>
        <p>based in Seoul</p>
      </div>

      <div className="absolute bottom-8 right-8 text-sm text-right text-[#5f6368]">
        <p>Currently at</p>
        <p>Samsung Electronics</p>
      </div>
    </div>
  );
}
