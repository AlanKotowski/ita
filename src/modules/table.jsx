import Row from "./Row";

// create table with new rows
export default function Table({ rows, onFeedbackAdd, onRowUpdate }) {
  return (
    <>
      <h1 className="py-4 mt-8 mb-5 text-3xl font-extrabold text-center bg-green-200">
        Interview Tracking App
      </h1>
      <ul>
        {/* column titles */}
        <Row
          number={"#"}
          company={"Company"}
          r1={"Stage 1"}
          r2={"Stage 2"}
          r3={"Stage 3"}
          r4={"Stage 4"}
          feedback={"Feedback"}
          offerLink={"offer's link"}
          website={"company website"}
          description={"about this company"}
        />
        {/* display new row */}
        {rows.map((e, i) => (
          <Row
            key={i}
            index={i}
            number={e.number}
            company={e.company}
            offerLink={e.offerLink}
            website={e.website}
            description={e.description}
            r1={e.r1}
            r2={e.r2}
            r3={e.r3}
            r4={e.r4}
            feedback={e.feedback}
            onFeedbackAdd={onFeedbackAdd}
            onRowUpdate={onRowUpdate}
          />
        ))}
      </ul>
    </>
  );
}
