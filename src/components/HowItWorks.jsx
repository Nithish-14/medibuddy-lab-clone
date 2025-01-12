import React from 'react'

const HowItWorks = () => {
  return (
    <div className="featured-health-container lifestyle-parent-container" style={{background: '#ffffff'}}>
         <h1 className="featured-section-heading lifestyle-heading works-heading">How It Works?</h1>
         <div className="how-works-container">
            <div className="works-container">
                <img src="https://www.medibuddy.in/assets/icons/labs/test.svg" alt="image" className="icons-image spl-img" />
                <p className="icons-para">Search for required Lab tests/Healthcheckup and select Diagnostic centre of your choice.
                Add prescription, patient details and address to complete the booking.</p>
            </div>
            <div className="works-container">
                <img src="https://www.medibuddy.in/assets/icons/labs/rider.svg" alt="image" className="icons-image" />
                <p className="icons-para">Visit the lab centre as per your booking. For home sample collection, certified professional will collect the samples at your home.</p>
            </div>
            <div className="works-container">
                <img src="https://www.medibuddy.in/assets/icons/mail.svg" alt="image" className="icons-image" />
                <p className="icons-para">We will email you the reports. You can also access your reports within your account on the MediBuddy App.</p>
            </div>
         </div>
     </div>
  )
}

export default HowItWorks