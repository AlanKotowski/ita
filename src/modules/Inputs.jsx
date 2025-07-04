export default function Inputs(){
    return(
        <div className="absolute top-4 flex flex-row w-full justify-around items-center">
        <input type="text" placeholder="company" className="w-1/5 outline-2 rounded-lg px-2"/>
        <input type="text" placeholder="offer's link" className="w-1/5 outline-2 rounded-lg px-2"/>
        <input type="text" placeholder="comapny's website" className="w-1/5 outline-2 rounded-lg px-2"/>
        <textarea name="asd" id="asd" placeholder="about this company" className="w-1/5 outline-2 rounded-lg px-2 overflow-y-auto"></textarea>
        <button className="cursor-pointer rounded-full border-2 border-white shadow-md hover:shadow-xs hover:scale-95 shadow-gray-600">➕</button>
        </div>
    )
}