import React from 'react'
import { BiSolidTimer } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LiaHospital } from "react-icons/lia";

const LabTestCard = ({detail}) => {
  const {testsSummary, reportsTatText, visitType, priceRange, discount, price} = detail;

  return (
   testsSummary.map((test, index) => (
        <li className="lab-test-card" key={index}>
        <div className="sponsered-container" style={{backgroundColor: 'rgb(31, 170, 31)'}}>&#10003; Cashless</div>
            <div className="lab-test-name-container">
                <h2 className="booklab-test-heading">{test}</h2>
                <div className="reports-container">
                    <BiSolidTimer color="#156ddc" size={20} className="package-icon" />
                <p className="package-report-para" style={{color: '#2e3742', margin: '0px'}}>{reportsTatText}</p>
                </div>
                <div className="lab-test-available-container">
                    {visitType.map((each, index) => (
                        <div className="visit-type-container" style={{width: 'auto', marginRight: '10px'}} key={index}>
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
            <div className="lab-test-price-container">
                <div>
                    <div className="test-price-container">
                        <p className="actual-price-para"><FaIndianRupeeSign size={12} /> {priceRange}</p>
                        <p className="discount-para">{discount}% OFF</p>
                    </div>
                    <div className="test-price-container">
                        <FaIndianRupeeSign size={14} />
                        <p className="after-discount-price-para">{price}/- <span style={{color: "#7b8086", fontSize:'15px', fontWeight: '300'}}>Onwards</span></p>
                    </div>
                </div>
                <button type="button" className="add-button-lab">Add</button>
            </div>
        </li>

   ))
  )
}

export default LabTestCard