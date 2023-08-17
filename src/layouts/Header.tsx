import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

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
  ];
  return (
    <Menu>
      {({ open }: { open: boolean }) => (
        <>
          <div
            className={`fixed z-50 flex h-fit w-full flex-col px-4 backdrop-blur md:px-8 ${
              open && "bg-white/10"
            } `}
          >
            <div className="flex flex-row justify-between">
              <Menu.Item as="a" href="/">
                <Image
                  alt="logo"
                  src={
                    "https://media.discordapp.net/attachments/956904556132962334/957114784036319242/One_Piece_Logo_C_fixed.png"
                  }
                  height={500}
                  width={500}
                  className="h-20 w-fit object-contain"
                />
              </Menu.Item>
              <Menu.Button className="block text-2xl focus:outline-none md:hidden">
                <Bars3Icon className="h-8 w-8 text-white" />
              </Menu.Button>
              <div className="hidden h-full flex-row space-x-24 py-4 focus:outline-none md:flex">
                {links.map((link) => (
                  <Menu.Item
                    as="a"
                    key={link.href}
                    href={link.href}
                    className="group p-2 text-3xl font-light"
                  >
                    {link.name}
                    <span className="block h-0.5 w-0 transform bg-white transition-all duration-300 group-hover:w-full" />
                  </Menu.Item>
                ))}
              </div>
            </div>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="flex h-full flex-col space-y-8 py-4 focus:outline-none">
                {links.map((link) => (
                  <Menu.Item
                    as="a"
                    key={link.href}
                    href={link.href}
                    className="p-2 text-2xl font-semibold"
                  >
                    {link.name}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </div>
        </>
      )}
    </Menu>
  );
};
export default Header;
