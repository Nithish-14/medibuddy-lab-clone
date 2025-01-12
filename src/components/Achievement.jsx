import React from 'react'

import { PiShieldCheckDuotone } from "react-icons/pi";

const Achievement = () => {
  return (
    <div className="achievement-container">
      <div className="ahivement-heading-container">
        <h1 className="achievement-heading">Trusted by <span className="users-span">20,00,00+ </span><br/><span className="users-span2">Users Every month</span></h1>
        <PiShieldCheckDuotone size={48} color="#58c461" />
      </div>
      <div className="achievement-child-container">
        <div className="achivement-content-container">
          <img src="https://www.medibuddy.in/assets/icons/labs/test.svg" alt="image" className="icons-image achievement-image" />
          <p className="achivement-para">200+ Approved Diagnostics Centres</p>
        </div>
        <div className="achivement-content-container">
          <img src="https://www.medibuddy.in/assets/icons/labs/trust/tubes.svg" alt="image" className="icons-image achievement-image" />
          <p className="achivement-para">1200+ Lab Tests Offered</p>
        </div>
        <div className="achivement-content-container">
          <img src="https://www.medibuddy.in/assets/icons/labs/trust/locations.svg" alt="image" className="icons-image achievement-image" />
          <p className="achivement-para">1200+ Pincodes Covered</p>
        </div>
      </div>
    </div>
  )
}

export default Achievement