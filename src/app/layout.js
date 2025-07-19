import FooterOne from "@/components/sections/footers/footerOne";
import HeaderThree from "@/components/sections/headers/headerThree";
import ScrollCircle from "@/components/ui/scrollCircle";
import CountryProvider from "@/contextApi/countryProvider";
import { ThemeProvider } from "@/contextApi/themeProvider";
import dynamic from "next/dynamic";
import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
const CustomCursor = dynamic(() => import("@/components/ui/customCursor"), {
  ssr: false,
});
const Setting = dynamic(() => import("@/components/ui/setting"), {
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--plus-jakarta-sans",
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--dm-sans",
});

export const metadata = {
  title: "NextPro",
  description:
    "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plus_jakarta_sans.variable} ${dm_sans.variable}`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CountryProvider>
            <HeaderThree />
            {children}
            <FooterOne />
            <Setting />
            <ScrollCircle />
            <CustomCursor />
          </CountryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
