import { useState } from "react";

export default function RoundButtons() {
  const [status, setStatus] = useState("initial");
  const [date, setDate] = useState("");

  const handleDateSubmit = (e) => {
    if (e.key === "Enter" && date) {
      setStatus("done");
    }
  };

  if (status === "done") {
    return <div className="font-semibold">{date}</div>;
  }

  if (status === "fail") {
    return (
      <div >next time will be better</div>
    );
  }

  if (status === "success") {
    return (
      <input
        type="date"
        className="border px-2 py-1 rounded-md z-40 relative bg-white"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        onKeyDown={handleDateSubmit}
        autoFocus
      />
    );
  }

  return (
    <div>
      <button
        className="cursor-pointer ml-2 rounded-full border-2 border-white shadow-md hover:shadow-xs hover:scale-95 shadow-gray-600 transition"
        onClick={() => setStatus("success")}
      >
        ✔️
      </button>
      <button
        className="cursor-pointer ml-2 rounded-full border-2 border-white shadow-md hover:shadow-xs hover:scale-95 shadow-gray-600 transition"
        onClick={() => setStatus("fail")}
      >
        ❌
      </button>
    </div>
  );
}
