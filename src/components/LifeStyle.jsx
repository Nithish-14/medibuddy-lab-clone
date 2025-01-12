import React, {useContext} from 'react'

import { PageConfigContext } from '../services/PageConfig'

const LifeStyle = () => {
  const {pageConfig} = useContext(PageConfigContext);

  return (
    <div className="featured-health-container lifestyle-parent-container" style={{background: '#ffffff'}}>
        <h1 className="featured-section-heading lifestyle-heading">Lifestyle Health Check-up Packages</h1>
        <ul className="icons-container lifestyle-container">
         {pageConfig[3].props.map((each, index) => (
            <li className="icons-list lift-style-list" key={index}>
                <img src={`http://medibuddy.in/${each.imgSrc}`} alt={each.title} className="icons-image" />
                <p className="icons-para life-style-para">{each.title}</p>
            </li>
         ))}
         <p className="icons-list extra-para life-style-extra-para"></p>
         </ul>
    </div>
  )
}

export default LifeStyle