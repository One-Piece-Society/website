import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Dela_Gothic_One, DM_Sans } from "next/font/google";
import { api } from "~/util/api";

export const DelaGothicOne = Dela_Gothic_One({
  subsets: ["latin"],
  variable: "--font-Dela-Gothic-One",
  weight: "400",
});

export const DMSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-DM-Sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${DelaGothicOne.variable} ${DMSans.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
