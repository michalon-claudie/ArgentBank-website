import React from 'react'

function Feature({srcIcon, title, description}){
    return(
        <div className='feature-item'>
            <img src={srcIcon} alt={`${title} Icon`} className='feature-icon'/>
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}hello</p>
        </div>
    )
}

export default Feature;