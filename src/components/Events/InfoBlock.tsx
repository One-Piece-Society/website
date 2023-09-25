import { ArrowRightIcon } from "@heroicons/react/24/solid";
interface Props {
  data: {
    title: string;
  };
  onChange: () => void;
}
const InfoBlock: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div className="flex h-full w-full flex-row items-end justify-end bg-black/40 p-4 opacity-0 transition-opacity duration-500 hover:opacity-100 active:opacity-100">
      <div className="text-body h-fit w-fit space-y-2 bg-white px-2 py-4 text-black">
        <h1 className="text-body text-lg font-bold md:text-xl">{data.title}</h1>
        <button
          className="flex flex-row items-center space-x-2"
          onClick={() => onChange}
        >
          <p className="font-body text-xs font-bold text-primary-red md:text-base">
            view details
          </p>
          <ArrowRightIcon className="h-4 w-4 text-primary-red" />
        </button>
      </div>
    </div>
  );
};
export default InfoBlock;
