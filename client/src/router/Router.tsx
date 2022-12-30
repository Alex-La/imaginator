import {FC} from "react"
import {Route, Routes} from "react-router-dom"
import AppOverlay from "~overlays/AppOverlay"

import * as Pages from "~pages"

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppOverlay />}>
        <Route index element={<Pages.Home />} />
        <Route path="admin" element={<Pages.Admin />} />
      </Route>
    </Routes>
  )
}

export default Router
