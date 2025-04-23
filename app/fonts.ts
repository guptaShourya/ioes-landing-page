// app/fonts.ts
import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const nibpro = localFont({
  src: [
    {
      path: "../public/fonts/Nibpro-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Nibpro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Nibpro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Nibpro-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-nibpro",
});
