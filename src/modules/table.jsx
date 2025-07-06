import Row from "./Row";

export default function Table() {
  return (
    <>
      <h1 className="text-3xl bg-red-300 text-center font-extrabold mt-8 mb-5">
        Interview Tracking App
      </h1>
      <Row
        number={"#"}
        company={"Company"}
        r1={"Round 1"}
        r2={"Round 2"}
        r3={"Round 3"}
        r4={"Round 4"}
        feedback={"Feedback"}
        offerLink={"offer's link"}
        website={"company website"}
        about={"about this company"}
      />
      <Row
        number={"1"}
        company={"random"}
        r1={""}
        r2={""}
        r3={""}
        r4={""}
        feedback={"ucz się nieuku"}
      />
      <Row
        number={"2"}
        company={"random"}
        r1={""}
        r2={""}
        r3={""}
        r4={""}
        feedback={"ucz się nieuku"}
        offerLink={"random link"}
        website={"www.strona.com"}
        about={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet mi at lorem tempus blandit. Vivamus vitae laoreet nunc. Aliquam erat volutpat. Duis elit purus, mattis ut tempor ut, tristique eu mauris. Nulla vitae mattis elit. Ut commodo, magna vitae iaculis tincidunt, tortor lectus tempor mi, quis fringilla turpis nisl ut nisl. Maecenas at leo vel turpis dapibus ultrices. Aliquam dictum ante in dui maximus, eget dapibus sem vehicula. Integer faucibus in neque bibendum iaculis."}
      />
    </>
  );
}
