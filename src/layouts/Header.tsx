import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const links = [
    {
      href: "events",
      name: "Events",
    },
    {
      href: "team",
      name: "Team",
    },
    {
      href: "socials",
      name: "Socials",
    },
  ];
  return (
    <>
      <div className="fixed z-50 hidden h-fit w-full flex-row justify-between bg-primary-red px-4 py-2 text-white md:flex md:px-8">
        <Image
          alt="logo"
          src={
            "https://media.discordapp.net/attachments/956904556132962334/957114784036319242/One_Piece_Logo_C_fixed.png"
          }
          height={500}
          width={500}
          className="h-16 w-fit object-contain"
        />
        <div className="hidden h-full flex-row space-x-24 py-2 focus:outline-none md:flex">
          {links.map((link) => (
            <Link
              as="a"
              key={link.href}
              href={link.href}
              className="group p-2 font-body text-3xl"
            >
              {link.name}
              <span className="block h-0.5 w-0 transform bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
        <button className="hidden h-fit border border-white bg-primary-red p-4 drop-shadow-lg md:block">
          <p className="font-body text-xl">Become a Member</p>
        </button>
      </div>
      <Menu>
        {({ open }: { open: boolean }) => (
          <div
            className={`fixed z-50 flex h-fit w-full flex-col bg-primary-red px-4 md:hidden ${
              open && "bg-white text-primary-red"
            } `}
          >
            <div className="flex flex-row justify-between">
              <Menu.Item key={"home"} href="/" as="a">
                <Image
                  alt="logo"
                  src={
                    "https://media.discordapp.net/attachments/956904556132962334/957114784036319242/One_Piece_Logo_C_fixed.png"
                  }
                  height={500}
                  width={500}
                  className="h-16 w-fit object-contain"
                />
              </Menu.Item>
              <Menu.Button className="block text-2xl focus:outline-none md:hidden">
                <Bars3Icon className="h-8 w-8" />
              </Menu.Button>
            </div>
            <Transition
              enter="transition duration-150 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-100 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="flex h-full flex-col space-y-8 py-4 focus:outline-none md:hidden">
                {links.map((link) => (
                  <Menu.Item
                    as="a"
                    key={link.href}
                    href={link.href}
                    className="p-2 font-body text-3xl font-bold"
                  >
                    {link.name}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </div>
        )}
      </Menu>
    </>
  );
};
export default Header;

/*
    2 landing pages

    banner section
    cards

    video production 5-6 case studies
    
    layout

    Shvaasa = logo, website, social media, e-com website, brand assets, brand usage document, running campaigns, model shoots

    call to action
*/
