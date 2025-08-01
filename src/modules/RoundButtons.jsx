import { useState, useEffect, useRef } from "react";

// interview rounds' inputs and buttons
export default function RoundButtons({ value, onChange }) {
  // set basic vale and changed vale
  const [status, setStatus] = useState(() => {
    if (value === "fail") return "fail";
    if (value) return "done";
    return "initial";
  });

  const [inputValue, setInputValue] = useState(value || "");
  const inputRef = useRef(null);

  // sync inputValue with props
  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  // set focus on input
  useEffect(() => {
    if (status === "success" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [status]);

  // submit values from input
  const handleSubmit = () => {
    if (!inputValue) return;
    onChange(inputValue);
    setStatus("done");
  };

  const handleBlur = () => {
    if (inputValue && inputValue !== value) {
      handleSubmit();
    } else if (!inputValue) {
      setStatus("initial");
    }
  };

  // show input values as a text (for successed) or message (for failed)
  if (status === "done") {
    return <div className="font-semibold">{value}</div>;
  }

  if (status === "fail") {
    return <div className="italic text-red-500">try again :C</div>;
  }

  if (status === "success") {
    return (
      <input
        type="date"
        ref={inputRef}
        className="relative z-40 px-2 py-1 bg-white border rounded-md"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
      />
    );
  }

  // component invocation
  return (
    <div>
      <button
        className="ml-2 transition border-2 border-white rounded-full shadow-md cursor-pointer hover:shadow-xs hover:scale-95 shadow-gray-600"
        onClick={() => setStatus("success")}
      >
        ✔️
      </button>
      <button
        className="ml-2 transition border-2 border-white rounded-full shadow-md cursor-pointer hover:shadow-xs hover:scale-95 shadow-gray-600"
        onClick={() => {
          setStatus("fail");
          onChange("fail");
        }}
      >
        ❌
      </button>
    </div>
  );
}
