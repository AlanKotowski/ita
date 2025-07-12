import RoundButtons from "./RoundButtons";
import { useState, useEffect } from "react";

// single row with all informations from inputs
export default function Row({
  number,
  company,
  offerLink,
  website,
  description,
  r1,
  r2,
  r3,
  r4,
  feedback,
  index,
  onFeedbackAdd,
  onRowUpdate,
}) {
  const [visible, setVisible] = useState(false);
  const [addingFeedback, setAddingFeedback] = useState("");

  // sync local storage with feedback
  useEffect(() => {
    setAddingFeedback(feedback || "");
  }, [feedback]);

  // toggle display of bonus row
  function switchVisible() {
    setVisible(!visible);
  }

  // buttons functionality
  function stage(value, roundKey) {
    return (
      <div>
        <RoundButtons
          value={value}
          onChange={(newDate) => handleRoundChange(roundKey, newDate)}
        />
      </div>
    );
  }

  // update row values
  function handleRoundChange(key, newValue) {
    const updatedRow = {
      number,
      company,
      offerLink,
      website,
      description,
      r1,
      r2,
      r3,
      r4,
      feedback: addingFeedback,
      [key]: newValue,
    };
    onRowUpdate(index, updatedRow);
  }

  // component invocation
  return (
    // row numeration, company name, toggle button
    <li className="even:bg-white odd:bg-cyan-200 grid grid-cols-7 my-1 py-4 divide text-center text-xs lg:text-base">
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
      {/* invterview stages */}
      {stage(r1, "r1")}
      {stage(r2, "r2")}
      {stage(r3, "r3")}
      {stage(r4, "r4")}
      <textarea
        className="outline-2 mx-2 resize-y min-h-6 max-h-24 overflow-y-auto"
        type="text"
        placeholder="Enter feedback"
        value={addingFeedback}
        onChange={(e) => setAddingFeedback(e.target.value)}
        onBlur={() => {
          if (addingFeedback.trim()) {
            onFeedbackAdd(index, addingFeedback);
          }
        }}
      />
      {/* hidden row with info */}
      {visible && (
        <div className="grid grid-cols-7 col-span-7 col-start-1 gap-2 mt-4 -mb-4 textxs lg:text-base border-y-1 border-b-2 divide-x-1 ">
          <div className="col-span-1 lg:col-span-1">
            <a
              className="text-blue-500 underline hover:no-underline hover:text-blue-700"
              href={offerLink}
            >
              {offerLink}
            </a>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <a
              className="text-blue-500 underline hover:no-underline hover:text-blue-700"
              href={website}
            >
              {website}
            </a>
          </div>
          <div className="col-span-3 lg:col-span-3 break-words max-h-24 overflow-y-auto overflow-x-hidden">
            {description}
          </div>
          <div className="col-span-2 lg:col-span-2 break-words max-h-24 overflow-y-auto overflow-x-hidden">
            {addingFeedback}
          </div>
        </div>
      )}
    </li>
  );
}
