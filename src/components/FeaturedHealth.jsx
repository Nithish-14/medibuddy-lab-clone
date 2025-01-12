import React, {useContext} from 'react'

import { PageConfigContext } from './../services/PageConfig';
import { HealthCheckUpFilterContext } from '../services/FilterPackage';

import CategoryCard from './CategoryCard';
import FeatureCard from './FeatureCard';

const FeaturedHealth = () => {
  const {pageConfig} = useContext(PageConfigContext);

  const {currentFilter, setFilter} = useContext(HealthCheckUpFilterContext);

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

  return (
    <div className="featured-health-container">
        <div className="heading-container">
            <h1 className="featured-section-heading">Featured Health Check-ups</h1>
            <button type="button" onClick={() => setFilter("View All")} style={{border: 'none', backgroundColor: 'transparent', padding: '0', cursor: 'pointer'}}>
              <p className='view-all-para'>View All</p>
            </button>
        </div>
        <ul className="categories-container">
            {pageConfig[2].categories["10386"].map((each, index) => <CategoryCard category={each} key={index} />)}
        </ul>
        <ul className="packages-container">
            {packages.map((each, index) => <FeatureCard key={index} detail={each} />)}
        </ul>
    </div>
  )
}

export default FeaturedHealth