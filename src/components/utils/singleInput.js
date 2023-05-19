import React from 'react'

const singleInput = ({styles,title, placeholder,req}) => {
    return (
        <>
            <h2 className={`text-${styles.textsmall} font-${styles.fontnormal} w-full mb-1`}>{title}{req === true? <span className={`text-[${styles.error}]`}>*</span> : ''}</h2>
            <input
                className={`border-2 border-[${styles.cardborder}] text-${styles.textsmall} w-full mb-6 px-3 py-2 rounded-md`}
                type="text"
                placeholder={placeholder}
            />
        </>
    )
}

export default singleInput