import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";

import { BellIcon } from "@heroicons/react/24/solid";

export default function RegistrationTimeline() {
  return (
    <div className="mt-10 p-10">
      <h1 className="text-3xl text-center font-extrabold text-gray-800">
        Important Dates
      </h1>
      <Timeline className="mt-10 lg:w-[45rem] w-[22rem]">
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon className="p-3" variant="ghost">
              <BellIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography
                className="font-bold text-sm md:text-base"
                color="blue-gray"
              >
                Last Date for paper submission
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                January 30, 2024
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon className="p-3" variant="ghost" color="red">
              <BellIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography
                className="font-bold text-sm md:text-base"
                color="blue-gray"
              >
                Notification of Acceptance
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                February 15, 2024
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon className="p-3" variant="ghost" color="yellow">
              <BellIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography
                className="font-bold text-sm md:text-base"
                color="blue-gray"
              >
                Last Date for camera ready paper
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                February 25, 2024
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon className="p-3" variant="ghost" color="green">
              <BellIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography
                className="font-bold text-sm md:text-base"
                color="blue-gray"
              >
                Conference Dates
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                March 11-12, 2024
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
