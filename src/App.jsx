import React, {useContext} from 'react'

import {Header, SearchBar, Icons, Loader, Banners} from "./components"

import './styles/style.css'

import { PageConfigContext } from "./services/PageConfig"


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
        </>}
  </div>
 )
}

export default App
