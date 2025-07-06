export default function Inputs() {
  return (
    <div className="absolute bottom-2 lg:relative lg:mt-6 flex flex-col lg:flex-row w-full justify-around items-center bg-red-300">
      <div className="flex flex-col w-[80%] lg:w-[20%]">
        <label htmlFor="company">Name of the company</label>
        <input
          id="company"
          type="text"
          placeholder="company"
          className="my-2 outline-2 rounded-lg px-2"
        />
      </div>
      <div className="flex flex-col w-[80%] lg:w-[20%]">
        <label htmlFor="link">Link to the offer</label>
        <input
          id="link"
          type="text"
          placeholder="offer's link"
          className="my-2 outline-2 rounded-lg px-2"
        />
      </div>
      <div className="flex flex-col w-[80%] lg:w-[20%]">
        <label htmlFor="website">Company's website</label>
        <input
          id="website"
          type="text"
          placeholder="comapny's website"
          className="my-2 outline-2 rounded-lg px-2"
        />
      </div>
      <div className="flex flex-col w-[80%] lg:w-[20%]">
        <label htmlFor="description">Company's description</label>
        <textarea
          id="description"
          name="description"
          placeholder="about this company"
          className="my-2 outline-2 rounded-lg px-2 overflow-y-auto"
        ></textarea>
      </div>
      <button className="cursor-pointer rounded-full border-2 border-white shadow-md hover:shadow-xs hover:scale-95 shadow-gray-600">
        ➕
      </button>
    </div>
  );
}
