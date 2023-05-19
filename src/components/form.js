import React, { useState } from "react";
import Button from "./utils/button";
import SingleInput from "./utils/singleInput";
import DoubleInput from "./utils/doubleInput";
import ChoiceInput from "./utils/choiceInput";

function Form({styles}) {
  const [section, setSection] = useState(0);

  function handleSubmit() {
    alert("Form will Submit with this action");
  }

  return (
    <div className="form w-[577px] bg-white p-8 mt-9 rounded-lg">
      
      {/* Form header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl">Create a job</h1>
        <h1 className={`text-${styles.textmedium} font-${styles.fontheavy}`}>
          {section === 0 ? "Step 1" : "Step 2"}
        </h1>
      </div>

      {/* Page 1 of the form */}
      <section className={section === 0 ? "" : "hidden w-full"}>
        <SingleInput styles={styles} title={"Job Title"} placeholder={"UX UI designer"} req={true}/>
        <SingleInput styles={styles} title={"Company Name"} placeholder={"Google"} req={true}/>
        <SingleInput styles={styles} title={"Industry"} placeholder={"Information technology"} req={true}/>
        <DoubleInput styles={styles} firsttitle={"Location"} secondtitle={"Remote type"} firstplaceholder={"Chennai"} secondplaceholder={"ex. In-office"}/>
      </section>

      {/* Page 2 of the form */}
      <section className={section === 1 ? "" : "hidden"}>
        <DoubleInput styles={styles} firsttitle={"Experience"} firstplaceholder={"Minimum"} secondplaceholder={"Maximum"}/>
        <DoubleInput styles={styles} firsttitle={"Salary"} firstplaceholder={"Minimum"} secondplaceholder={"Maximum"}/>
        <SingleInput styles={styles} title={"Total Employee"} placeholder={"ex. 100"}/>
        <ChoiceInput styles={styles} title={"Apply Type"}/>
      </section>

      {/* Submit Button */}
      <div className="flex flex-row-reverse">
        <div
          onClick={() => {
            if (section != 1) {
              setSection((currPage) => currPage + 1);
            } else {
              handleSubmit();
            }
          }}
        >
          {section < 1 ? <Button styles={styles} name={"Next"} /> : <Button styles={styles} name={"Save"} />}
        </div>
      </div>
    </div>
  );
}

export default Form;
