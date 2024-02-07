import React from 'react'

export default function TextArea({className,label,id,type,onChange,value}){
    return(
        <div className={className}>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                onChange={onChange}
                value={value} />
        </div>
    )
}