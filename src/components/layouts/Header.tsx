import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const links = [
    {
      href: "events",
      name: "Events",
    },
    {
      href: "socials",
      name: "Socials",
    },
    {
      href: "team",
      name: "Team",
    },
  ];
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // scrolls user to end of previous section on click
  const handleHeadingClick = (sectionId: string) => {
    const section: HTMLElement | null = document.getElementById(sectionId);

    if (section) {
      const sections = document.querySelectorAll("section");
      let targetSection: HTMLElement | null = null;

      for (let i = 0; i < sections.length; i++) {
        if (sections[i]?.id === sectionId) {
          if (i > 0) {
            targetSection = sections[i - 1]!;
          }
          break;
        }
      }

      if (targetSection) {
        const scrollPosition =
          targetSection.getBoundingClientRect().bottom + window.scrollY + 1;
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
    }
  };

  // highlights current section in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const { top, bottom } = section.getBoundingClientRect();

        if (top <= window.innerHeight && bottom >= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
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
            <button
              onClick={() => handleHeadingClick(link.href)}
              key={link.href}
              className="group p-2 font-body text-3xl"
            >
              {link.name}
              <span
                className={`block h-0.5 w-0 transform bg-white transition-all duration-300 group-hover:w-full ${
                  activeSection === link.href && "w-full"
                }`}
              />
            </button>
          ))}
        </div>
        <Link
          href="https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000459PRd"
          className="hidden h-fit border border-white bg-primary-red p-4 drop-shadow-lg md:block"
        >
          <p className="font-body text-xl">Become a Member</p>
        </Link>
      </div>
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-top-left bg-white"
        style={{ scaleX: scrollYProgress }}
      />
      <Menu>
        {({ open }: { open: boolean }) => (
          <div
            className={`fixed z-50 flex h-fit w-full flex-col bg-primary-red px-4 transition-colors duration-100 md:hidden ${
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
              <Menu.Items className="flex h-full flex-col items-start space-y-8 py-4 focus:outline-none md:hidden">
                {links.map((link) => (
                  <Menu.Item
                    as="button"
                    onClick={() => handleHeadingClick(link.href)}
                    key={link.href}
                    className="p-2 font-body text-3xl font-bold"
                  >
                    {link.name}
                  </Menu.Item>
                ))}
                <Menu.Item
                  as="a"
                  target="_blank"
                  href="https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000459PRd"
                  className="pb-2 font-body text-3xl font-bold"
                >
                  Become a Member
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </div>
        )}
      </Menu>
    </>
  );
};
export default Header;
