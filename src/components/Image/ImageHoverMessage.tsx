type Props = {
  url: string;
  message: string;
  onClick: CallableFunction;
};

const ImageHoverMessage: React.FC<Props> = ({ url, message, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="flex items-center justify-center overflow-hidden font-body">
      <div
        className="relative aspect-video h-fit w-full cursor-pointer bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-110"
        // loading lower resolution because this takes a lot of time to load
        style={{ backgroundImage: `url(${url + "?width=1920&height=1080"})` }}
        onClick={handleClick}
      >
        <div className="bg-gradient-radial absolute flex h-full w-full flex-col items-center justify-center from-black/60 to-black/40 opacity-0 transition-opacity duration-500 hover:opacity-100">
          <p className="bg-white p-4 font-bold text-black">{message}</p>
        </div>
      </div>
    </div>
  );
};
export default ImageHoverMessage;
