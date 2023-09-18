const EventMangaPages = () => {
  // console.log("hello");

  // Access database and pull top x data 

  // Dynamically allocate spaces and populate information for events

  // Generate results

  return (
    <div className="flex h-fit w-full flex-col-reverse gap-4 drop-shadow-lg md:h-full md:flex-row md:p-4">
      {/* Left/Bottom Manga Page */}
      <div className="flex h-screen w-full flex-col gap-4 md:h-full ">
        <div className="h-1/2 w-full border-4 border-black bg-primary-red">
          a
        </div>
        <div className="flex h-full flex-row gap-4 ">
          <div className="flex w-full flex-col gap-4 ">
            <div className="h-full w-full border-4 border-black bg-primary-red">
              b
            </div>
            <div className="h-full w-full border-4 border-black bg-primary-red">
              c
            </div>
            {/* <div className="h-full w-full border-4 border-black bg-primary-red">
              d
            </div> */}
          </div>
          <div className="flex w-full border-4 border-black bg-primary-red">
            e
          </div>
        </div>
      </div>
      {/* Right/Top Manga Page */}
      <div className="flex h-[50vh] w-full flex-col gap-4 md:h-full ">
        <div className="flex h-full w-full flex-row gap-4 ">
          <div className="h-full w-1/3 border-4 border-black bg-primary-red">
            f
          </div>
          <div className="h-full w-2/3 border-4 border-black bg-primary-red">
            g
          </div>
        </div>
        <div className="flex h-full w-full border-4 border-black bg-primary-red">
          e
        </div>
      </div>
    </div>
  );
};
export default EventMangaPages;
