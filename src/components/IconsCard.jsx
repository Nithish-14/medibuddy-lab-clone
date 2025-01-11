import React from 'react'

const IconsCard = ({icon}) => {
  
  const {iconText, iconUrl, deeplink} = icon;

  return (
    <li className="icons-list">
        <a href={deeplink} target='_blank' className="icons-anchor">
            <img src={iconUrl} alt={iconText} className="icons-image" />
            <p className="icons-para">{iconText}</p>
        </a>
    </li>
  )
}

export default IconsCard