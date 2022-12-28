import React from "react"
import {Page} from "~components"

const Error: React.FC = () => {
  return (
    <Page title="Ошибка">
      <div className="fixed inset-0 flex items-center justify-center">
        <h3>Ошибка</h3>
      </div>
    </Page>
  )
}

export default Error
