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

export const metadata = {
  title: "Dharmik Savaliya",
  description: "a Full-Stack Software Developer ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${specialElite.variable} ${courier.variable} font-serif antialiased`} suppressHydrationWarning>
        
        <div className="film-grain"></div>
        
        {children}
        
      </body>
    </html>
  );
}