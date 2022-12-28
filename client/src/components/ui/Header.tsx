import React from "react"
import {Link, useNavigate} from "react-router-dom"

import {isSidebarOpen} from "~apollo/startup/cache"
import {useBreakpoints} from "~hooks"

const Header: React.FC = () => {
  const navigate = useNavigate()
  const {isMobile} = useBreakpoints()

  const openSidebar = () => isSidebarOpen(true)
  const toHome = () => navigate("/")

  return (
    <header className="bg-white relative z-1 px-5 py-5 flex items-center justify-between">
      {isMobile && (
        <span className="material-symbols-outlined text-grey-800 cursor-pointer" onClick={openSidebar}>
          menu
        </span>
      )}
      <h4 className="cursor-pointer" onClick={toHome}>
        Imaginator
      </h4>
      <span className="material-symbols-outlined text-info-main cursor-pointer">account_circle</span>
    </header>
  )
}

export default Header
