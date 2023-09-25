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
      <button
        className="text-body h-fit w-fit space-y-2 bg-white p-4 text-left text-black"
        onClick={onChange}
      >
        <h1 className="text-body text-lg font-bold md:text-xl">{data.title}</h1>
        <div className="flex flex-row items-center gap-2 font-body text-xs font-bold text-primary-red md:text-base">
          view details
          <ArrowRightIcon className="inline-flex h-4 w-4 text-primary-red" />
        </div>
      </button>
    </div>
  );
};
export default InfoBlock;
