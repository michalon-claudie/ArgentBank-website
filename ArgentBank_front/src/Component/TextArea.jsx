import React from 'react'

export default function TextArea({label,id,type,onChange,value}){
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                onChange={onChange}
                value={value} />
        </div>
    )
}