import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const LayoutOther: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-primary-red text-white">
      <div>
        <div className="fixed z-50 flex h-12 w-full flex-row items-center justify-between bg-primary-red py-1 text-white backdrop-blur-md">
          <Link href="/" className="absolute left-4">
            <Image
              alt="logo"
              src="/opsoc-logo.webp"
              height={250}
              width={250}
              className="h-10 w-fit object-cover"
            />
          </Link>
        </div>

        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LayoutOther;
