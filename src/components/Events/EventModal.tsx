import { Dialog, Transition } from "@headlessui/react";
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ClockIcon,
  GlobeAltIcon,
  ShareIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Fragment, useState } from "react";
import ImageGallery from "../Image/ImageGallery";
import { baseUrl } from "../layouts/SEO";
import { type Event } from "~/util/types";

interface Props {
  data: Event | undefined;
  closeModal: () => void;
  isOpen: boolean;
}

const EventModal: React.FC<Props> = ({ data, isOpen, closeModal }) => {
  const [copied, setCopied] = useState(false);

  if (!data) return <></>;

  const handleShare = () => {
    try {
      setCopied(true);
      void navigator.clipboard
        .writeText(baseUrl + "?event=" + data.id)
        .then(() => {
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        });
    } catch (error) {
      console.error("Clipboard writeText error:", error);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>
        <div className="fixed inset-0 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-96"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 translate-y-96"
            >
              <Dialog.Panel className="h-full max-h-[80%] w-full max-w-4xl transform bg-white text-left shadow-2xl transition-all md:max-h-[80%]">
                <div className="relative">
                  <div className="flex w-full justify-end">
                    <button
                      type="button"
                      title="Close Modal"
                      onClick={closeModal}
                      className="absolute p-2"
                    >
                      <XCircleIcon className="h-8 w-8 fill-white/20 text-white drop-shadow-xl md:h-12 md:w-12" />
                    </button>
                  </div>
                  <Image
                    src={data.image ?? ""}
                    width={720}
                    height={540}
                    alt="banner"
                    className="max-h-96 w-full object-cover object-center"
                  />
                </div>
                <Dialog.Title
                  as="h1"
                  className="px-4 pt-4 font-body text-xl font-bold md:px-8 md:pt-8 md:text-3xl"
                >
                  {data.title}
                </Dialog.Title>
                <div className="mt-2 space-y-4 px-4 md:px-8">
                  <Dialog.Description className="font-body text-xs md:text-sm">
                    {data.description}
                  </Dialog.Description>
                  <p className="flex items-center gap-2 font-body text-sm md:text-base">
                    <ClockIcon className="inline-block h-5 w-5 text-black" />
                    {new Date(data?.startTime).toLocaleString("en-AU", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }) +
                      " - " +
                      new Date(data.endTime).toLocaleString("en-AU", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                  </p>
                  <p className="flex items-center gap-2 font-body text-sm md:text-base">
                    <CalendarDaysIcon className="inline-block h-5 w-5 text-black" />
                    {new Date(data.startTime).toLocaleString("en-AU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="flex items-center gap-2 font-body ">
                    {data.online ? (
                      <>
                        <GlobeAltIcon className="inline-block h-5 w-5 text-black" />
                        <a
                          className="text-blue-500 underline decoration-blue-500 underline-offset-2"
                          href="https://discord.gg/hZymJuE6aV"
                          target="_blank"
                        >
                          Discord
                        </a>
                      </>
                    ) : (
                      <>
                        <BuildingOffice2Icon className="inline-block h-5 w-5 text-black" />
                        {data.locationLink}
                      </>
                    )}
                  </p>

                  {data.imageGallery.length > 0 && (
                    <>
                      <h1 className="pt-4 font-body text-base font-semibold md:text-xl">
                        Image Gallery
                      </h1>
                      <ImageGallery data={data.imageGallery} />
                    </>
                  )}
                </div>
                <div className="mt-4 flex flex-row justify-between px-4 pb-4 md:px-8 md:pb-8">
                  <button
                    type="button"
                    className="flex items-center font-body text-black hover:text-primary-red"
                    onClick={handleShare}
                  >
                    {copied ? (
                      <>
                        Copied Link !
                        <CheckCircleIcon className="ml-2 inline-block h-6 w-6" />
                      </>
                    ) : (
                      <>
                        Share Event
                        <ShareIcon className="ml-2 inline-block h-6 w-6" />
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex items-end justify-center rounded-md border border-transparent bg-primary-red px-4 py-2 font-body text-sm font-bold text-white hover:bg-primary-red/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:text-base"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default EventModal;
