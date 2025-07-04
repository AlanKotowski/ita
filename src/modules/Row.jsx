import RoundButtons from "./RoundButtons";
import { useState } from "react";

export default function Row({number, company, offerLink, website, about, r1, r2, r3, r4, feedback,}){
const [visible, setVisible] = useState(false);

function switchVisible(){
    setVisible(!visible)
}

  function stage(value){
    return(
        <div>
      {value}
      {!value && <RoundButtons />}
    </div>
    )
  }

  return (
    <li className="even:bg-green-200 odd:bg-red-200 grid grid-cols-7 py-4 divide text-center">
      <div>{number}</div>
      <div >
        <div className="flex flex-row justify-between">
        <div>{company}</div>
        <button onClick={switchVisible} className="cursor-pointer bg-blue-400 rounded-full border-2 border-white shadow-md hover:shadow-xs hover:scale-95 shadow-gray-400 invert">ℹ</button>
        </div>
        {visible &&
        <div className="flex flex-col text-left">
          <div className="text-xs">{offerLink}</div>
          <div className="text-xs">{website}</div>
          <div className="text-xs">{about}</div>
        </div>
}
      </div>
      {stage(r1)}
      {stage(r2)}
      {stage(r3)}
      {stage(r4)}
      <div>{feedback}</div>
    </li>
  );
}
