import { Inter, Montserrat_Alternates } from "next/font/google";

// import localFont from "next/font/local";

// export const geistMono = localFont({
//     src: "../app/fonts/GeistVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

// export const geistSans = localFont({
//     src:"../app/fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
//  });

export const inter = Inter({    
    subsets: ["latin"],    
    variable: "--font-inter",
});

export const titleFont = Montserrat_Alternates({
    subsets: ["latin"],
    weight: ['400', '700'],
});


