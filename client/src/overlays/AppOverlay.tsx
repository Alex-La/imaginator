import {FC} from "react"
import Sidebar from "react-sidebar"
import {Outlet} from "react-router-dom"
import {useBreakpoints} from "~hooks"
import {useReactiveVar} from "@apollo/client"

import {isSidebarOpen} from "~apollo/startup/cache"
import {Sidebar as SidebarContent, Header} from "~components"

const AppOverlay: FC = () => {
  const {isMobile} = useBreakpoints()
  const open = useReactiveVar(isSidebarOpen)

  const toggleSidebar = () => isSidebarOpen(!open)

  return (
    <Sidebar
      sidebar={<SidebarContent />}
      sidebarClassName="w-full sm:w-63 z-20 bg-white"
      open={open}
      docked={!isMobile}
      transitions={isMobile}
      onSetOpen={toggleSidebar}>
      <Header />
      <Outlet />
    </Sidebar>
  )
}

export default AppOverlay
