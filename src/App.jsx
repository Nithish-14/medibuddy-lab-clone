import React, {useContext} from 'react'

import {Header, SearchBar, Icons, Loader, Banners, FeaturedHealth, 
  LabTest, Achievement, LifeStyle, HealthCheck, UsersFeedback, HowItWorks, SafeLab, FrequentryAskedQuestions} from "./components"

import './styles/style.css'

import { PageConfigContext } from "./services/PageConfig"
import { LabTestFilterProvider } from './services/FilterPackage'
import { HealthCheckUpProvider } from './services/FilterPackage'


const App = () => {
  const {loading} = useContext(PageConfigContext);

  return (
  <div className="app-container">
    <Header />
    <div className="app-search-container">
        <SearchBar />
    </div>
    {loading ? 
        <Loader /> : 
        <>
          <Icons />
          <Banners />
        <HealthCheckUpProvider>
          <FeaturedHealth />
        </HealthCheckUpProvider>
        <LabTestFilterProvider>
           <LabTest />
        </LabTestFilterProvider>
        <Achievement />
        <LifeStyle />
        <HealthCheck />
        <UsersFeedback />
        <HowItWorks />
        <SafeLab />
        <FrequentryAskedQuestions />
        </>
      }
  </div>
 )
}

export default App
