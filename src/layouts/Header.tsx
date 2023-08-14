import { Bars3Icon } from "@heroicons/react/24/solid";
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
    <div className="fixed z-50 flex w-full flex-row justify-between px-8 py-4 backdrop-blur">
      <h1 className=" text-2xl italic">OPSOC</h1>
      <div className="hidden flex-row space-x-16 md:flex">
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
