import React, {useContext} from 'react'

import { HealthCheckUpFilterContext, LabTestFilterContext } from '../services/FilterPackage'

const CategoryCard = ({category, labtest}) => {
  const {currentFilter, setFilter} = useContext(labtest ? LabTestFilterContext : HealthCheckUpFilterContext);

  return (
    <li className="category-list-element">
      <button type="button" className={`category-button ${category===currentFilter ? "active-button" : ""}`} onClick={() => setFilter(category)}>{category}</button>
    </li>
  )
}

export default CategoryCard 