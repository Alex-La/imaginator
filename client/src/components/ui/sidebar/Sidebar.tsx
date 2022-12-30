import {FC} from "react"

import {isSidebarOpen} from "~apollo/startup/cache"
import useBreakpoints from "~hooks/useBreakpoints"

import NavItem, {NavigationItem} from "./NavItem"

const routes: NavigationItem[] = [
  {
    path: "/",
    title: "Home",
    icon: "home",
  },
  {
    path: "/admin",
    title: "Admin",
    icon: "admin_panel_settings",
  },
]

const Sidebar: FC = () => {
  const {isMobile} = useBreakpoints()

  const closeSidebar = () => isSidebarOpen(false)

  return (
    <div className="py-2 sm:py-5 lg:pt-10 lg:pb-8 h-full flex flex-col sm:items-center lg:items-start">
      <div className="bg-grey-200 rounded-l-xl rounded-r-none sm:rounded-r-xl flex items-center px-4 py-2 ml-4">
        <div className="rounded-full bg-info-lighter w-8 h-8 flex items-center justify-center">
          <span className="material-symbols-outlined">person</span>
        </div>
        <div className="ml-3">
          <p className="s2">Lorem User</p>
          <p className="caption text-grey-500">Role</p>
        </div>
        {isMobile && (
          <span className="material-symbols-outlined cursor-pointer ml-auto" onClick={closeSidebar}>
            close
          </span>
        )}
      </div>

      <div className="mt-10 w-full">
        {routes.map((value, index) => (
          <NavItem key={`nav_item_${index}`} item={value} index={index} totalItems={routes.length} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
