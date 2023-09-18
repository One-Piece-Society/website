import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-row items-center justify-center bg-primary-red text-white">
      <Image
        src="/opsoc-logo.gif"
        alt="logo"
        width={400}
        height={400}
        className="h-24 w-fit"
      />
    </div>
  );
};
export default LoadingPage;
