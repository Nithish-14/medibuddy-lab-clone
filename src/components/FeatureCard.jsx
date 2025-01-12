import React from 'react'
import { BiSolidTimer } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { LiaHospital } from "react-icons/lia";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

const FeatureCard = ({detail}) => {
   const {isSponsored, packageDisplayName, reportsTatText, testCount, testsSummary, isRadiologyIncluded, fastingHoursText, visitType, price, isPresentInCart} = detail;
  
  return (
    <li className="package-list-element">
        {isSponsored && <div className="sponsered-container">Sponsored</div>}
        <h1 className="package-main-heading">{packageDisplayName}</h1>
        <div className="reports-container">
            <BiSolidTimer color="#156ddc" size={20} className="package-icon" />
        <p className="package-report-para">{reportsTatText}</p>
        </div>
        <div className="package-child-container">
           <div className="includes-container">
            <p className="test-heading-para">{testCount} Test</p>
            <ul className="tests-container">
                {testsSummary.map((each, index) => (
                    <div key={index} style={{display: 'flex', alignItems: 'center'}}>
                        <span className="dot-icon">•</span>
                        <li key={index} className="test-list-element">{each}</li>
                    </div>
                ))}
            </ul>
            </div>
            {isRadiologyIncluded && (
                <div className="includes-container">
                    <p className="test-heading-para">Includes</p>
                    <p className="test-list-element">Radiology</p>
                </div>
            )}
        </div>
        
        <div className="package-child-container child2">
            <div style={{width: '50%'}}>
                <p className="sub-para-2">
                    Fasting
                </p>
                <p className="sub-para-3">
                    {fastingHoursText}
                </p>
            </div>
            <div>
                <p className="sub-para-2">
                    Available at
                </p>
                
                    <div className="available-container">
                        {visitType.map((each, index) => (
                            <div className="visit-type-container" key={index}>
                                {each === "HomeVisit" ? 
                                    <>
                                    <IoMdHome color='#ff7265' size={20} className="home-icon" />
                                    <p className="sub-para-3">Home</p>
                                    </>                                       
                                    
                                 : 
                                    <>
                                    <LiaHospital color="#156ddc" size={20} className="home-icon" />
                                    <p className="sub-para-3">Lab</p>
                                    </>  
                                }
                            </div>
                        ))}
                    </div>
                
            </div>
        </div>
        <div className="package-child-container child3">
            <div className="reports-container">
                <FaIndianRupeeSign />
                <p style={{fontSize: '18px', marginLeft: '5px', fontWeight: '600'}}>{price}</p>
            </div>
            <div className="add-to-cart-container">
                <button type="button" className="add-button"><FaMinus color="#156ddc" /></button>
                {isPresentInCart ? 1 : 0}
                <button type="button" className="add-button"><FaPlus color="#156ddc" /></button>
            </div>
        </div>
    </li>
  )
}

export default FeatureCard