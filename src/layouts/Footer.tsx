import { EnvelopeIcon } from "@heroicons/react/24/solid";
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
          have any complaints regarding our content, email us at
          onepieceunsw@gmail.com about the details.
        </p>
        <h1 className="font-heading text-lg font-light md:text-xl">
          © UNSW One Piece Society 2023
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
              src="https://cdn.discordapp.com/attachments/1092987636035092662/1145974816113967205/636e0a6cc3c481a15a141738_icon_clyde_white_RGB.png"
              width={250}
              height={250}
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
              src="https://media.discordapp.net/attachments/1092987636035092662/1145981654201024522/Facebook-logo-blue-circle-large-transparent-png.png"
              width={250}
              height={250}
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
              src="https://media.discordapp.net/attachments/1092987636035092662/1145982066610143262/Arc20Clubs20Logo202019-solid20white.png"
              width={250}
              height={250}
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
      </div>
    </div>
  );
};
export default Footer;
