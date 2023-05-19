import React from "react";

const choiceInput = ({ styles,title }) => {
  return (
    <>
      <h2 className={`text-${styles.textsmall} font-${styles.fontheavy} w-full mb-2`}>{title}</h2>
      <div className="flex flex-row items-center">
        <input className="border-2 mr-1" type="radio" />
        <label className={`mr-4 text-${styles.textsmall} text-[${styles.placeholder}]`} htmlFor="">
          Quick Apply
        </label>
        <input className="border-2 mr-1" type="radio" />
        <label className={`mr-4 text-${styles.textsmall} text-[${styles.placeholder}]`} htmlFor="">External Apply</label>
      </div>
    </>
  );
};

export default choiceInput;
