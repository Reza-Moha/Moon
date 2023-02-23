import "./globals.css";
import localFont from "@next/font/local";
import Header from "@/components/UI/Header";
const iranSansFont = localFont({
  src: "../../public/fonts/iranSans/woff2/IRANSansWeb.woff2",
});
export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl" className={iranSansFont.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
