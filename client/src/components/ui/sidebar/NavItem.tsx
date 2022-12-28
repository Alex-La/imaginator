import {FC, memo, useMemo} from "react"
import {Link, useLocation} from "react-router-dom"
import cls from "classnames"
import {isSidebarOpen} from "~apollo/startup/cache"

export type NavigationItem = {
  path: string
  title: string
  icon: string
}

type Props = {
  item: NavigationItem
  index: number
  totalItems: number
}

const NavItem: FC<Props> = ({item, index, totalItems}) => {
  const {path, icon, title} = item

  const {pathname} = useLocation()

  const isActive = useMemo(() => pathname === path, [pathname, path])

  const closeSidebar = () => isSidebarOpen(false)

  return (
    <Link
      to={path}
      onClick={closeSidebar}
      key={`route_${index}`}
      className={cls("cursor-pointer transition w-full px-4 py-2 flex items-center hover:bg-grey-200", {
        "border-b border-grey-200": index !== totalItems - 1,
        "bg-info-lighter": isActive,
      })}>
      <span className="material-symbols-outlined">{icon}</span>
      <p className="ml-2 s2">{title}</p>
    </Link>
  )
}

export default memo(NavItem)
