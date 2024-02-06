import React from 'react'

export default function TextArea({label,id,type,onChange,value}){
    return(
        <div>
            <label htmlFor='label'>{label}</label>
            <input
                type={type}
                id={id}
                onChange={onChange}
                value={value} />
        </div>
    )
}