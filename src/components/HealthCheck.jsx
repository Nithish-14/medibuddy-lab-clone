import React, {useContext} from 'react'

import { PageConfigContext } from '../services/PageConfig'

const HealthCheck = () => {
  const {pageConfig} = useContext(PageConfigContext);
 
   return (
     <div className="featured-health-container lifestyle-parent-container" style={{background: '#ffffff'}}>
         <h1 className="featured-section-heading lifestyle-heading">Book Health Check Packages in Bengaluru</h1>
         <ul className="icons-container lifestyle-container">
          {pageConfig[4].props.map((each, index) => (
             <li className="icons-list lift-style-list bg-list" key={index}>
                 <img src={`https://medibuddy.in${each.imgSrc}`} alt={each.value} className="icons-image bg-image" />
                 <p className="icons-para life-style-para overlay-text">{each.label}</p>
             </li>
          ))}
          </ul>
     </div>
   )
}

export default HealthCheck