/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Dialog, Transition } from "@headlessui/react";
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ClockIcon,
  GlobeAltIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { type Event } from "@prisma/client";
import Image from "next/image";
import { Fragment, useState } from "react";
import ImageGallery from "../Image/ImageGallery";
import { baseUrl } from "../layouts/SEO";

interface Props {
  data: Event;
  closeModal: () => void;
  isOpen: boolean;
}

const EventModal: React.FC<Props> = ({ data, isOpen, closeModal }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    try {
      setCopied(true);
      void navigator.clipboard
        .writeText(baseUrl + "?event=" + data.title)
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
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-screen items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="h-fit max-h-[80dvh] w-full max-w-4xl transform overflow-y-auto bg-white text-left align-middle shadow-2xl transition-all md:max-h-[80%]">
                <div>
                  <Image
                    src={data.image ?? ""}
                    width={1920}
                    height={1080}
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
                  <p className="font-body text-xs md:text-sm">
                    {data?.description}
                  </p>
                  <p className="flex items-center gap-2 font-body text-sm md:text-base">
                    <ClockIcon className="inline-block h-5 w-5 text-black" />
                    {data?.startTime.toLocaleString("en-AU", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }) +
                      " - " +
                      data.endTime.toLocaleString("en-AU", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                  </p>
                  <p className="flex items-center gap-2 font-body text-sm md:text-base">
                    <CalendarDaysIcon className="inline-block h-5 w-5 text-black" />
                    {data.startTime.toLocaleString("en-AU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="flex items-center gap-2 font-body ">
                    {data?.online ? (
                      <>
                        <GlobeAltIcon className="inline-block h-5 w-5 text-black" />
                        Discord
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
                    className="inline-flex items-end justify-center rounded-md border border-transparent bg-primary-red px-4 py-2 font-body text-sm font-bold text-white hover:bg-primary-red/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:text-base"
                    onClick={closeModal}
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
