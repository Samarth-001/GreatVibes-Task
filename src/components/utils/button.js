import React from 'react'

const button = ({styles,apply, name}) => {
  return (
    <>
        <button className={apply === true ? `border border-[${styles.primarycolor}] text-[${styles.primarycolor}] text-${styles.textmedium} font-${styles.fontheavy} px-3 py-1 rounded bg-white` : `border border-[${styles.primarycolor}] text-white text-${styles.textmedium} font-${styles.fontheavy} px-3 py-1 rounded bg-[${styles.primarycolor}]`}>{name}</button>
    </>
  )
}

export default button