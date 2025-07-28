// import RoundButtons from "./RoundButtons";
// import { useState, useEffect } from "react";

// // single row with all informations from inputs
// export default function Row({
//   number,
//   company,
//   offerLink,
//   website,
//   description,
//   r1,
//   r2,
//   r3,
//   r4,
//   feedback,
//   index,
//   onFeedbackAdd,
//   onRowUpdate,
// }) {
//   const [visible, setVisible] = useState(false);
//   const [addingFeedback, setAddingFeedback] = useState("");

//   // sync local storage with feedback
//   useEffect(() => {
//     setAddingFeedback(feedback || "");
//   }, [feedback]);

//   // toggle display of bonus row
//   function switchVisible() {
//     setVisible(!visible);
//   }

//   // buttons functionality
//   function stage(value, roundKey) {
//     return (
//       <div>
//         <RoundButtons
//           value={value}
//           onChange={(newDate) => handleRoundChange(roundKey, newDate)}
//         />
//       </div>
//     );
//   }

//   // update row values
//   function handleRoundChange(key, newValue) {
//     const updatedRow = {
//       number,
//       company,
//       offerLink,
//       website,
//       description,
//       r1,
//       r2,
//       r3,
//       r4,
//       feedback: addingFeedback,
//       [key]: newValue,
//     };
//     onRowUpdate(index, updatedRow);
//   }

//   // component invocation
//   return (
//     // row numeration, company name, toggle button
//     <li className="grid grid-cols-7 py-4 my-1 text-xs text-center even:bg-white odd:bg-cyan-200 divide lg:text-base ">
//       <div className="w-2/3 -ml-1 lg:-mx-8">{number}</div>
//       <div>
//         <div className="flex flex-row justify-between -ml-8 lg:-ml-30">
//           <div className="w-[80%] overflow-x-hidden overflow-y-auto break-all max-h-8">{company}</div>
//           <button
//             onClick={switchVisible}
//             className="transition scale-75 bg-orange-600 border-2 border-black rounded-full shadow-md cursor-pointer lg:scale-100 hover:shadow-xs hover:scale-110 hover:text-xl  shadow-gray-400 h-[20px] w-[20px] leading-2 text-center"
//           >
//             i
//           </button>
//         </div>
//       </div>
//       {/* invterview stages */}
//       {stage(r1, "r1")}
//       {stage(r2, "r2")}
//       {stage(r3, "r3")}
//       {stage(r4, "r4")}
//       <textarea
//         className="mx-2 overflow-y-auto resize-y outline-2 min-h-6 max-h-24"
//         type="text"
//         placeholder="Enter feedback"
//         value={addingFeedback}
//         onChange={(e) => setAddingFeedback(e.target.value)}
//         onBlur={() => {
//           if (addingFeedback.trim()) {
//             onFeedbackAdd(index, addingFeedback);
//           }
//         }}
//       />
//       {/* hidden row with info */}
//       {visible && (
//         <div className="grid grid-cols-7 col-span-7 col-start-1 gap-2 mt-4 -mb-4 border-b-2 textxs lg:text-base border-y-1 divide-x-1 ">
//           <div className="col-span-1 lg:col-span-1">
//             <a
//               className="overflow-x-hidden overflow-y-auto text-blue-500 underline break-all hover:no-underline hover:text-blue-700"
//               href={offerLink}
//             >
//               {offerLink}
//             </a>
//           </div>
//           <div className="col-span-1 lg:col-span-1">
//             <a
//               className="overflow-x-hidden overflow-y-auto text-blue-500 underline break-all hover:no-underline hover:text-blue-700"
//               href={website}
//             >
//               {website}
//             </a>
//           </div>
//           <div className="col-span-3 overflow-x-hidden overflow-y-auto break-words break-all lg:col-span-3">
//             {description}
//           </div>
//           <div className="col-span-2 overflow-x-hidden overflow-y-auto break-words break-all lg:col-span-2 ">
//             {addingFeedback}
//           </div>
//         </div>
//       )}
//     </li>
//   );
// }


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
    <li className="grid grid-cols-10 py-4 my-1 text-xs text-center even:bg-white odd:bg-cyan-200 divide lg:text-base ">
      <div className="w-2/3 -ml-1 lg:-mx-4">{number}</div>
      <div>
        <div className="flex flex-row justify-between -ml-8 lg:-ml-20">
          <div className="w-[50%] lg:w-[80%] ml-4 col-span-4 overflow-x-hidden overflow-y-auto break-all max-h-8">{company}</div>
          <button
            onClick={switchVisible}
            className="transition scale-75 bg-orange-600 border-2 border-black rounded-full shadow-md cursor-pointer lg:scale-100 hover:shadow-xs hover:scale-110 hover:text-xl  shadow-gray-400 h-[20px] w-[20px] leading-2 text-center"
          >
            i
          </button>
        </div>
      </div>
      {/* invterview stages */}
      <div className="flex justify-around col-span-4">
      {stage(r1, "r1")}
      {stage(r2, "r2")}
      {stage(r3, "r3")}
      {stage(r4, "r4")}
      </div>
      <textarea
        className="col-span-4 mx-2 overflow-y-auto resize-y outline-2 min-h-6 max-h-24"
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
        <div className="w-[100vw] grid grid-cols-7 col-span-7 col-start-1 gap-2 mt-4 -mb-4 border-b-2 textxs lg:text-base border-y-1 divide-x-1 ">
          <div className="col-span-1 lg:col-span-1">
            <a
              className="overflow-x-hidden overflow-y-auto text-blue-500 underline break-all hover:no-underline hover:text-blue-700"
              href={offerLink}
            >
              {offerLink}
            </a>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <a
              className="overflow-x-hidden overflow-y-auto text-blue-500 underline break-all hover:no-underline hover:text-blue-700"
              href={website}
            >
              {website}
            </a>
          </div>
          <div className="col-span-3 overflow-x-hidden overflow-y-auto break-words break-all lg:col-span-3">
            {description}
          </div>
          <div className="col-span-2 overflow-x-hidden overflow-y-auto break-words break-all lg:col-span-2 ">
            {addingFeedback}
          </div>
        </div>
      )}
    </li>
  );
}
