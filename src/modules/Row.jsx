import RoundButtons from "./RoundButtons";
import { useState } from "react";

export default function Row({
  number,
  company,
  offerLink,
  website,
  about,
  r1,
  r2,
  r3,
  r4,
  feedback,
}) {
  const [visible, setVisible] = useState(false);

  function switchVisible() {
    setVisible(!visible);
  }

  function stage(value) {
    return (
      <div>
        {value}
        {!value && <RoundButtons />}
      </div>
    );
  }

  return (
    <li className="even:bg-green-200 odd:bg-red-200 grid grid-cols-7 my-1 py-4 divide text-center text-xs lg:text-base">
      <div className="-ml-4 lg:m-auto">{number}</div>
      <div>
        <div className="flex flex-row justify-between -ml-4 lg:m-auto">
          <div>{company}</div>
          <button
            onClick={switchVisible}
            className="cursor-pointer bg-blue-400 rounded-full border-2 scale-75 lg:scale-100 border-white shadow-md hover:shadow-xs hover:scale-95 shadow-gray-400 invert transition"
          >
            ℹ
          </button>
        </div>
      </div>
      {stage(r1)}
      {stage(r2)}
      {stage(r3)}
      {stage(r4)}
      <div>{feedback}</div>
        {visible && (
          <div className="grid grid-cols-7 col-span-7 col-start-1 gap-2 mt-4 -mb-4 textxs lg:text-base border-t-1 divide-x-1 ">
            <div className="col-span-2 lg:col-span-1"><a className="text-blue-500 underline hover:no-underline hover:text-blue-700" href={offerLink}>{offerLink}</a></div>
            <div className="col-span-2 lg:col-span-1"><a className="text-blue-500 underline hover:no-underline hover:text-blue-700" href={website}>{website}</a></div>
            <div className="col-span-3 lg:col-span-5 max-h-22 overflow-y-auto">{about}</div>
          </div>
        )}
    </li>
  );
}
