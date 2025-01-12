import React, {useContext, lazy, Suspense} from 'react'

import {Header, SearchBar, Icons, Loader, Banners, FeaturedHealth} from "./components"

import './styles/style.css'

import { PageConfigContext } from "./services/PageConfig"
import { LabTestFilterProvider } from './services/FilterPackage'
import { HealthCheckUpProvider } from './services/FilterPackage'

const LabTest = lazy(() => import('./components/LabTest'))
const Achievement = lazy(() => import('./components/Achievement'))
const  LifeStyle= lazy(() => import('./components/LifeStyle'))
const HealthCheck = lazy(() => import('./components/HealthCheck'))
const UsersFeedback = lazy(() => import('./components/UsersFeedback'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const SafeLab = lazy(() => import('./components/SafeLab'))
const FrequentryAskedQuestions = lazy(() => import('./components/FrequentryAskedQuestions'))




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
        <Suspense fallback={<Loader />}>
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
        </Suspense>
        </>
      }
  </div>
 )
}

export default App
