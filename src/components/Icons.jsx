import React, {useContext} from 'react'

import { PageConfigContext } from './../services/PageConfig';
import IconsCard from './IconsCard';

const Icons = () => {
  const {pageConfig} = useContext(PageConfigContext);
 
  return (
    <ul className="icons-container">
        {pageConfig[0].props.map(each => <IconsCard icon={each} key={each.order} />)}
        <p className="icons-list extra-para"></p>
    </ul>
  )
}

export default Icons