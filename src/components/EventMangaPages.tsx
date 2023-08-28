const EventMangaPages = () => {
  return (
    <div className="flex h-fit w-full flex-col-reverse gap-4 md:h-full md:flex-row md:p-4">
      {/* Left/Bottom Manga Page */}
      <div className="flex h-screen w-full flex-col gap-4 md:h-full ">
        <div className="h-1/3 w-full border-4 border-black">a</div>
        <div className="flex h-full flex-row gap-4 ">
          <div className="flex w-full flex-col gap-4 ">
            <div className="h-full w-full border-4 border-black">b</div>
            <div className="h-full w-full border-4 border-black">c</div>
            <div className="h-full w-full border-4 border-black">d</div>
          </div>
          <div className="flex w-full border-4 border-black">e</div>
        </div>
      </div>
      {/* Right/Top Manga Page */}
      <div className="flex h-[50vh] w-full flex-col gap-4 md:h-full ">
        <div className="flex h-full w-full flex-row gap-4 ">
          <div className="h-full w-1/3 border-4 border-black">f</div>
          <div className="h-full w-2/3 border-4 border-black">g</div>
        </div>
        <div className="flex h-full w-full border-4 border-black">e</div>
      </div>
    </div>
  );
};
export default EventMangaPages;
