import FooterOne from "@/components/sections/footers/footerOne";
import HeaderThree from "@/components/sections/headers/headerThree";
import CountryProvider from "@/contextApi/countryProvider";
import { ThemeProvider } from "@/contextApi/themeProvider";
import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
  title: "MRZ Tech",
  description:
    "",
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
          </CountryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
