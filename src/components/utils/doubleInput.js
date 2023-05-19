import React from 'react'

const doubleInput = ({styles,firsttitle, secondtitle, firstplaceholder, secondplaceholder}) => {
  return (
    <div className="flex w-full">
          <div className="w-1/2 mr-6">
            <h2 className={`text-${styles.textsmall} font-${styles.fontheavy} mb-1`}>{firsttitle}</h2>
            <input
              className={`border-2 border-[${styles.cardborder}] text-${styles.textsmall} w-full mb-6 px-3 py-2 rounded-md`}
              type="text"
              placeholder={firstplaceholder}
            />
          </div>

          <div className="w-1/2">
            <h2 className={`text-${styles.textsmall} font-${styles.fontheavy} mb-1`}>{secondtitle === undefined ? '\u00A0' : secondtitle}</h2>
            <input
              className={`border-2 border-[${styles.cardborder}] text-${styles.textsmall} w-full mb-6 px-3 py-2 rounded-md`}
              type="text"
              placeholder={secondplaceholder}
            />
          </div>
        </div>
  )
}

export default doubleInput