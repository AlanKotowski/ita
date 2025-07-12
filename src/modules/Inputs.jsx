import { useState } from "react";

// all inputs handle
export default function Inputs({
  company,
  setCompany,
  offerLink,
  setOfferLink,
  website,
  setWebsite,
  description,
  setDescription,
  onAdd,
}) {
  // toggle visibility of inputs
  const [vis, setVis] = useState(false);
  function showInputs() {
    setVis(!vis);
  }
  return (
    // whole input section
    <div
      className={`fixed h-[33vh] md:mb-2 lg:relative lg:top-0 lg:h-[10vh] flex flex-col lg:flex-row w-full justify-around items-center bg-white z-10 transition-all duration-500 ease-in-out ${
        vis ? "-bottom-[33vh]" : "bottom-6"
      }`}
    >
      {/* button for toggle visibility */}
      <button
        className={`scale-200 z-20 relative -top-8 -mb-6 mx-auto lg:hidden animate-bounce transition-transform duration-500 transform origin-center ${
          vis ? "rotate-0" : "rotate-180 -translate-y-[10px]"
        } cursor-pointer hover:scale-210`}
        onClick={showInputs}
      >
        ⬆️
      </button>
      {/* input for company's name */}
      <div className="flex flex-col w-[80%] lg:w-[20%]">
        <label htmlFor="company">Name of the company</label>
        <input
          id="company"
          type="text"
          placeholder="company"
          className="my-2 outline-2 rounded-lg px-2"
          value={company}
          onChange={setCompany}
        />
      </div>
      {/* input for company's website */}
      <div className="flex flex-col w-[80%] lg:w-[20%]">
        <label htmlFor="link">Link to the offer</label>
        <input
          id="link"
          type="text"
          placeholder="offer's link"
          className="my-2 outline-2 rounded-lg px-2"
          value={offerLink}
          onChange={setOfferLink}
        />
      </div>
      {/* input for offer */}
      <div className="flex flex-col w-[80%] lg:w-[20%]">
        <label htmlFor="website">Company's website</label>
        <input
          id="website"
          type="text"
          placeholder="comapny's website"
          className="my-2 outline-2 rounded-lg px-2"
          value={website}
          onChange={setWebsite}
        />
      </div>
      {/* input for company's description */}
      <div className="flex flex-col w-[80%] lg:w-[20%] h-[10vh]">
        <label htmlFor="description">Company's description</label>
        <textarea
          id="description"
          name="description"
          placeholder="about this company"
          className="my-2 outline-2 rounded-lg px-2 overflow-y-auto min-h-[8vh]"
          value={description}
          onChange={setDescription}
        ></textarea>
      </div>
      {/* button for adding inputs to the row */}
      <button
        onClick={onAdd}
        className="cursor-pointer rounded-full border-2 border-white bg-white shadow-md hover:shadow-xs hover:scale-95 shadow-gray-600"
      >
        ➕
      </button>
    </div>
  );
}
