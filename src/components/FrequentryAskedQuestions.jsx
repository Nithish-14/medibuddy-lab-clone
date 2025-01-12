import React, {useContext, useState} from 'react'

import { PageConfigContext } from './../services/PageConfig';
import QuestionCard from './QuestionCard';


const FrequentryAskedQuestions = () => {
   const {pageConfig} = useContext(PageConfigContext);

   const [visible, updateVisible] = useState(0);

  return (
    <div className="featured-health-container lifestyle-parent-container" style={{background: '#ffffff'}}>
         <h1 className="featured-section-heading lifestyle-heading works-heading">Frequently Asked Questions</h1>
         <ul className="questions-container">
             {pageConfig[6].props.map((each, index) => <QuestionCard updateVisible={updateVisible} visible={visible} key={index} questionDetail={each} />)}
         </ul>
    </div>
  )
}

export default FrequentryAskedQuestions