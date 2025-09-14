import Table from "./modules/table";
import Inputs from "./modules/Inputs";
import { useState, useEffect } from "react";

function App() {
  const [filter, setFilter] = useState("");
  const [company, setCompany] = useState("");
  const [offerLink, setOfferLink] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");

  // local storage
  // load local storage
  const [rows, setRows] = useState(() => {
    const saved = localStorage.getItem("interviewRows");
    return saved ? JSON.parse(saved) : [];
  });

  // save local storage
  useEffect(() => {
    localStorage.setItem("interviewRows", JSON.stringify(rows));
  }, [rows]);

  //filter functionality
  function handleFilterChange(e) {
    setFilter(e.target.value.toLowerCase());
  }

  const filteredRows = rows.filter((row) => {
    return (
      row.number.toString().includes(filter) ||
      row.company.toLowerCase().includes(filter) ||
      row.description.toLowerCase().includes(filter)
    );
  });

  // create new row
  function addRow() {
    if (!company || !offerLink || !website || !description) {
      window.alert("Please complete the entire form before coninuing.");
      return;
    }
    const newRow = {
      number: rows.length + 1,
      company,
      offerLink,
      website,
      description,
      r1: "",
      r2: "",
      r3: "",
      r4: "",
      feedback: "",
    };

    setRows([...rows, newRow]);

    setCompany("");
    setOfferLink("");
    setWebsite("");
    setDescription("");
  }

  function feedbackRowUpdate(index, value) {
    const updatedRow = [...rows];
    updatedRow[index].feedback = value;
    setRows(updatedRow);
  }

  // update row with feedback
  function updateRow(index, updatedRow) {
    const newRows = [...rows];
    newRows[index] = updatedRow;
    setRows(newRows);
  }

  // app invocation
  return (
    <>
      <Inputs
        company={company}
        setCompany={(e) => setCompany(e.target.value)}
        offerLink={offerLink}
        setOfferLink={(e) => setOfferLink(e.target.value)}
        website={website}
        setWebsite={(e) => setWebsite(e.target.value)}
        description={description}
        setDescription={(e) => setDescription(e.target.value)}
        onAdd={addRow}
        filter={filter}
        onFilterChange={handleFilterChange}
      />
      <Table
        rows={filteredRows}
        onFeedbackAdd={feedbackRowUpdate}
        onRowUpdate={updateRow}
      />

      {/* clearing local storage */}
      {/* <button
        onClick={() => {
          localStorage.clear();
          setRows([]);
        }}
        className="absolute bg-red-500 text-white px-4 py-1 rounded-lg bottom-14 left-[50vw] translate-x-[-50%] -z-10 animate-pulse duration-75 cursor-pointer shadow-md shadow-red-950 hover:animate-none hover:shadow-sm"
      >
        Clear all data
      </button> */}
    </>
  );
}

export default App;
