import Image from "next/image";
const Panels = () => {
  return (
    <div className="flex h-full w-full flex-row drop-shadow-lg">
      <div className="panel flex h-full w-full flex-col space-y-8">
        <div className="h-5/6 ">
          <Image
            alt="op"
            src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
            width={1080}
            height={1130}
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" h-1/6">
          <Image
            alt="op"
            src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
            width={1080}
            height={1130}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="panel flex h-full w-full flex-col space-y-8">
        <div className="h-1/6 bg-fixed">
          <Image
            alt="op"
            src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
            width={1080}
            height={1130}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-5/6">
          <Image
            alt="op"
            src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
            width={1080}
            height={1130}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="panel flex h-full w-full  flex-col space-y-8">
        <div className="h-5/6">
          <Image
            alt="op"
            src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
            width={1080}
            height={1130}
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" h-1/6">
          <Image
            alt="op"
            src="https://www.animenarrative.com/wp-content/uploads/2021/06/mg0z2een5cg51-1130x1080.jpg"
            width={1080}
            height={1130}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Panels;
