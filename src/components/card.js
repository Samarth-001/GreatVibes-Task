import React from "react";
import Button from "./utils/button";
import database from "./database/db";

const card = ({styles,maxexp, minexp, minsalary, maxsalary, name, apply, buttoname}) => {
  return (
    <>
      <div className="basis-1/2">
        <div className="flex flex-row bg-white mx-9 my-8 px-6 py-4 rounded-md">
          <div className="mr-2">
            <img src="/Netflix-logo.png" alt="image" />
          </div>
          <div className="text-left">
            <h1 className={`text-${styles.textbig} font-${styles.fontnormal}`}>{name}</h1>
            <p className={`text-${styles.textmedium} font-${styles.fontnormal}`}>
              Great Vibes - information tech
            </p>
            <p className={`text-[${styles.placeholder}] mb-5`}>
              Chennai, Tamilnadu, India (In-office)
            </p>
            <p className="mb-2">Part-Time ( 9:00 am - 8:00 pm IST )</p>
            <p className="mb-2">Experience ( {minexp} - {maxexp} years )</p>
            <p className="mb-2">INR (₹) {minsalary} - {maxsalary} / Month</p>
            <p className="mb-6">51 - 200 employee</p>
            <Button styles={styles} apply={apply} name={buttoname}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
