import React, {useContext} from 'react'

import { PageConfigContext } from './../services/PageConfig';

import CategoryCard from './CategoryCard';
import FeatureCard from './FeatureCard';

const FeaturedHealth = () => {
  const {pageConfig} = useContext(PageConfigContext);

  return (
    <div className="featured-health-container">
        <div className="heading-container">
            <h1 className="featured-section-heading">Featured Health Check-ups</h1>
            <p className='view-all-para'>View All</p>
        </div>
        <ul className="categories-container">
            {pageConfig[2].categories["10386"].map((each, index) => <CategoryCard category={each} key={index} />)}
        </ul>
        <ul className="packages-container">
            {pageConfig[2].props[0].packages.map((each, index) => <FeatureCard key={index} detail={each} />)}
        </ul>
    </div>
  )
}

export default FeaturedHealth