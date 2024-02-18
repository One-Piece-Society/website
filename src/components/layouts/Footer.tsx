import { InformationCircleIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex h-fit w-full flex-col-reverse justify-between gap-2 bg-black p-8 font-body text-white md:flex-row">
      <div className="flex h-full max-w-2xl flex-col gap-2 md:gap-4">
        <p className="font-body text-xs leading-relaxed md:text-base">
          All artwork displayed on this website belongs to the creators of the
          anime/manga series &quot;The One Piece&quot;, and we do not claim
          ownership of any of the artwork featured herein.
        </p>
        <p className="font-body text-xs leading-relaxed md:text-base">
          If you wish to have any artwork or image removed from the website, or
          have any complaints regarding our content, email us at{" "}
          <span className="inline-block underline">onepieceunsw@gmail.com</span>{" "}
          about the details.
        </p>
        <p className="font-body text-xs leading-relaxed md:text-base">
          Designed and Developed by{" "}
          <a href="https://hari-portfolio-ten.vercel.app" className="underline">
            Hari Pramod
          </a>{" "}
          ❤️
        </p>
        <h1 className="font-heading text-lg font-light md:text-xl">
          UNSW One Piece Society
        </h1>
      </div>
      <div className="flex w-fit flex-col gap-2 font-body text-xs md:gap-4 md:text-base">
        <Link
          target="_blank"
          href="https://discord.gg/USxv58e7PQ"
          className="flex items-center gap-4"
        >
          <span className="inline-block">
            <Image
              alt="discord-logo"
              src="/socials/discord_logo.webp"
              width={100}
              height={100}
              className="h-6 w-6 object-contain"
            />
          </span>
          Join our Discord Server
        </Link>
        <Link
          target="_blank"
          href="https://www.facebook.com/onepiecesociety/"
          className="group flex items-center gap-4"
        >
          <span className="inline-block">
            <Image
              alt="facebook-logo"
              src="/socials/facebook_logo.webp"
              width={100}
              height={100}
              className="h-6 w-6 object-contain brightness-0 grayscale invert"
            />
          </span>
          Follow our Facebook Page
        </Link>
        <Link
          target="_blank"
          href="https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000459PRd"
          className="flex items-center gap-4"
        >
          <span className="inline-block">
            <Image
              alt="arc-logo"
              src="/socials/arc_logo.webp"
              width={100}
              height={100}
              className="h-6 w-6 object-contain"
            />
          </span>
          Become a Member on spArc
        </Link>
        <p className="flex items-center gap-4 font-body text-xs md:text-base">
          <span className="inline-block">
            <EnvelopeIcon className="h-6 w-6 text-white" />
          </span>
          <a href="mailto:onepieceunsw@gmail.com">
            Contact us at onepieceunsw@gmail.com
          </a>
        </p>
        <Link
          href="/legal"
          target="_blank"
          className="flex items-center gap-4 font-body text-xs leading-relaxed md:text-base"
        >
          <InformationCircleIcon className="inline-block h-6 w-6 text-white" />
          Legal Disclaimer
        </Link>
      </div>
    </div>
  );
};
export default Footer;
