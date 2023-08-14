import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
const Header = () => {
  const links = [
    {
      href: "aboutus",
      name: "About Us",
    },
    {
      href: "events",
      name: "Events",
    },
    {
      href: "team",
      name: "Team",
    },
  ];
  return (
    <div className="fixed z-50 flex h-fit w-full flex-row justify-between px-4 backdrop-blur md:px-8 ">
      <Image
        alt="logo"
        src={
          "https://media.discordapp.net/attachments/956904556132962334/957114784036319242/One_Piece_Logo_C_fixed.png"
        }
        height={500}
        width={500}
        className="h-20 w-fit object-contain"
      />
      <div className="hidden h-full flex-row items-center space-x-16 md:flex">
        {links.map((link, index) => (
          <p key={index} className="text-2xl">
            {link.name}
          </p>
        ))}
      </div>
      <button className="block md:hidden">
        <Bars3Icon className="h-8 w-8 text-white" />
      </button>
    </div>
  );
};
export default Header;
