import React from 'react'

import { FaStar } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";

const FeedbackCard = ({feedback}) => {
  const {content, rating, name} = feedback;

  return (
    <li className="feedback-container">
        <div className="star-container">
        {
            [...Array(rating)].map((each, index) => <FaStar key={index} color="#ffd000" />)
        }
        {
            [...Array(5-rating)].map((each, index) => <FaRegStar key={index} color="#ffd000" />)
        }
        </div>
        <p className="feedback-para">&quot;{content}&quot;</p>
        <hr />
        <div className="user-profile-container">
            <CgProfile size={25} />
            <p className="feedback-user-name-para">{name}</p>
        </div>
    </li>
  )
}

export default FeedbackCard