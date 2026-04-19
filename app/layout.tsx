import type { Metadata } from "next";
import { Pirata_One, Roboto } from "next/font/google";
import "./globals.css";

// 1. The Heavy Typewriter Font 
const specialElite = Pirata_One({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-playfair' // Keeping the variable name the same so Tailwind doesn't break
});

// 2. The Clean Typewriter Font 
const courier = Roboto({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-courier'
});

export const metadata: Metadata = {
  title: "Dharmik Savaliya | Software Developer",
  description: "Full-Stack Software Developer specializing in Java, Spring Boot, and Clean Architecture. Exploring the intersection of backend scalability and secure integrations.",
  keywords: ["Java", "Spring Boot", "Software Engineer", "React", "Next.js", "Full Stack", "Paderborn", "Dharmik Savaliya"],
  openGraph: {
    title: "Dharmik Savaliya | Confidential Records",
    description: "Enterprise Software Engineer | Java & Clean Architecture.",
    url: "https://your-domain-name.com", // ⚠️ REMINDER: Update this when you host the site
    siteName: "Dharmik's Dossier",
    images: [
      {
        url: "/project-images/typewriter.png", // Uses your background as the link preview! 
        width: 1200,
        height: 630,
        alt: "Dharmik Savaliya - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${specialElite.variable} ${courier.variable} font-serif antialiased`} suppressHydrationWarning>
        
        {/* Cinematic aesthetic overlay */}
        <div className="film-grain"></div>
        
        {children}
        
      </body>
    </html>
  );
}