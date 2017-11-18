import React from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

const Header = () => {

  return (
    <div className="container-fluid header-nav">
      <div className="container d-flex justify-content-between">
        <div className="header-left flex-row">
          <h1 className="logo-text">LocalEyesr</h1>
          <h5 className="logo-sub-text">Discover Colorado with Data Visualization</h5>
        </div>
        <div className="header-right flex-row">
          {/* create if or statement */}
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
    </div>
  )

}

export default Header
