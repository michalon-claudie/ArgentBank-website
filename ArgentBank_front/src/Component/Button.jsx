import React from 'react'

export default function Button({className,onClick}){
    return(
        <button>
            className={className}
            onClick={onClick}</button>
    )
}