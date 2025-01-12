import React, {useContext, useState} from 'react'

import { LabTestFilterContext } from '../services/FilterPackage'
import { PageConfigContext } from '../services/PageConfig';

import CategoryCard from './CategoryCard';

import LabTestCard from './LabTestCard';


const LabTest = () => {
  const {pageConfig} = useContext(PageConfigContext);

  const {currentFilter, setFilter} = useContext(LabTestFilterContext);

  const [page, updatePage] = useState(1);

  let packages;


  const filterFunction = (pkg) => {
    switch (currentFilter) {
      case "Popular":
        return pkg.isPopular;
      case "Centre Visit":
        return pkg.isCenterVisitPackage;
      case "Covid 19":
        return pkg.isCovidTest;
      default:
        return pkg.subCategories.some(
          (subCategory) => subCategory.toUpperCase() === currentFilter.toUpperCase()
        );
    }
  }

  if (currentFilter === "View All") {
    packages = pageConfig[2].props[0].packages;
  } else {
    packages = pageConfig[2].props[0].packages.filter((each) => filterFunction(each))
  }

  const ITEMS_PER_PAGE = 3;

 
  const endIndex = page * ITEMS_PER_PAGE;
  const currentPackages = packages.slice(0, endIndex);


    
  return (
    <div className="featured-health-container lab-test-container">
         <div className="heading-container" style={{width: '100%'}}>
            <h1 className="featured-section-heading">Book Popular Lab Tests</h1>
            <button type="button" onClick={() => setFilter("View All")} style={{border: 'none', backgroundColor: 'transparent', padding: '0', cursor: 'pointer'}}>
              <p className='view-all-para'>View All</p>
            </button>
        </div>
        <ul className="categories-container">
            {pageConfig[2].categories["10386"].map((each, index) => <CategoryCard labtest={true} category={each} key={index} />)}
        </ul>
        <ul className="lab-tests-container ">
            {currentPackages.map((each, index) => <LabTestCard key={index} detail={each} />)}
        </ul>
        <button type="button" className="view-more-button" onClick={() => updatePage((prev) => prev+1)}>View More...</button>
    </div>
  )
}

export default LabTest