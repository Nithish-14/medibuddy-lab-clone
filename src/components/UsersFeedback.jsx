import React, {useContext} from 'react'

import { PageConfigContext } from '../services/PageConfig'

import FeedbackCard from './FeedbackCard';

const UsersFeedback = () => {
  const {pageConfig} = useContext(PageConfigContext);

  return (
    <div className="featured-health-container lifestyle-parent-container" style={{background: '#ffffff'}}>
         <h1 className="featured-section-heading lifestyle-heading works-heading">What our Users say</h1>
         <ul className="packages-container" style={{marginBottom: '20px'}}>
            {pageConfig[5].props.map((each, index) => <FeedbackCard feedback={each} key={index} />)}
        </ul>
    </div>
  )
}

export default UsersFeedback