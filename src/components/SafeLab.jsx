import React from 'react'

const SafeLab = () => {
  return (
    <div className="featured-health-container lifestyle-parent-container" style={{background: '#ffffff'}}>
         <h1 className="featured-section-heading lifestyle-heading works-heading">100% Safe & Secure Lab Tests</h1>
         <div className="safe-labs-container">
            <div className="lab-container">
                <img src="https://www.medibuddy.in/assets/icons/labs/trust/test.svg" alt="image" className="icons-image" />
                <p className="icons-para">Govt. Approved
                Diagnostic Centres</p>
            </div>
            <div className="lab-container">
                <img src="https://www.medibuddy.in/assets/icons/labs/trust/temperature.svg" alt="image" className="icons-image" />
                <p className="icons-para">Daily Temperature
                Check of all Technicians</p>
            </div>
            <div className="lab-container">
                <img src="https://www.medibuddy.in/assets/icons/labs/trust/sanitize.svg" alt="image" className="icons-image" />
                <p className="icons-para">Mandatory use of Mask
                & Sanitizers</p>
            </div>
            <div className="lab-container">
                <img src="https://www.medibuddy.in/assets/icons/labs/trust/spray.svg" alt="image" className="icons-image" />
                <p className="icons-para">Regular Disinfectation
                of Labs</p>
            </div>
         </div>
    </div>
  )
}

export default SafeLab