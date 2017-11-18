import React from 'react'
import Searchbar from './Searchbar'
import RecentButtonsBar from './RecentButtonsBar'

const Toolbar = () => {

  return(
    <div className="container-fluid toolbar">
      <div className="container">
        <Searchbar />
        <RecentButtonsBar />
      </div>
    </div>
  )

}


export default Toolbar
