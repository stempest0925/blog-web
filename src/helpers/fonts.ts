import { Noto_Serif_SC, Noto_Sans_SC, Poppins } from "next/font/google";
import localFont from "next/font/local";

/**
 * 字体对照表
 * Thin(100)、ExtraLight(200)、Light(300)、Regular(400)、Medium(500)、SemiBold(600)、Bold(700)、ExtraBold(800)、Black(900)
 */

// noto_serif_sc，小字体显示不完全
export const noto_serif_sc = Noto_Serif_SC({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// noto_sans_sc，中规中矩，没什么特色
export const noto_sans_sc = Noto_Sans_SC({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// poppins, 相较于noto_sans行高更规范
export const poppins = Poppins({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// oppo_sans，oppo字体，相较于poppins更圆润
export const oppo_sans = localFont({
  src: [
    {
      path: "../assets/fonts/OPlusSans3-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/OPlusSans3-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/OPlusSans3-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-opposans",
});
