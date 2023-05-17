import { FC } from "react";
import { WORK_EXP } from "../../../const";
import { ExperienceType } from "../../../types";
import { FaHackerrank, FaMicrosoft } from "react-icons/fa";
import { SiGroupon } from "react-icons/si";
import { MdWebhook } from "react-icons/md";

const CompanyIcons: {
  [key: string]: JSX.Element;
} = {
  Microsoft: <FaMicrosoft size={48} />,
  Groupon: <SiGroupon size={48} />,
  Hackerrank: <FaHackerrank size={48} />,
  Intutel: <MdWebhook size={48} />,
  "HT Media": (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="77px"
      height="18.313px"
      viewBox="0 0 77 18.313"
      enableBackground="new 0 0 77 18.313"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
        d="M19.414,0h8.646v18.313h-8.646V0z M29.081,0h8.646v18.313h-8.646V0
 z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
        d="M77,5.569h-5.938v12.743h-6.916V5.569h-5.773v12.743H50.35v-6.437
 h-3.657v6.437h-7.559V0h7.559v6.42h3.657V0H77V5.569 M0,8.646V0h18.313v8.331l-0.001,0.315l-0.234-0.001H0z M0,18.313V9.666h18.313
 l-0.001,8.646H0z"
      />
    </svg>
  ),
};

const Experience: FC<{ experience: ExperienceType }> = ({ experience }) => {
  const { company, title, description, date, location, link } = experience;
  return (
    <div
      className="relative block overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 mb-4"
    >
      <div className="flex justify-between gap-4">
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-gray-900 sm:text-xl">
            {company}
          </a>

          <p className="mt-1 text-xs font-medium text-gray-600">{title}</p>
        </div>

        <div className="block shrink-0">
          <span className="h-16 w-16 rounded-lg object-cover shadow-sm">
            <>{CompanyIcons[company]}</>
          </span>
        </div>
      </div>

      <div className="mt-4">
        <p className="max-w-[40ch] text-sm text-gray-500">{description}</p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Duration</dt>
          <dd className="text-xs text-gray-500">{date}</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Location</dt>
          <dd className="text-xs text-gray-500">{location}</dd>
        </div>
      </dl>
    </div>
  );
};

const ExperienceList = () => {
  return (
    <div className="my-8">
      <div className="text-xl font-semibold">Experiences</div>
      <div className="columns-1 md:columns-2 gap-8 mt-4">
        {WORK_EXP.map((e, i) => {
          return <Experience key={i} experience={e}></Experience>;
        })}
      </div>
    </div>
  );
};

export default ExperienceList;
