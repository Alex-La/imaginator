import React, {FC, memo} from "react"
import {Helmet} from "react-helmet-async"

type Props = {
  title: string
  children?: React.ReactNode
  className?: string
}

const Page: FC<Props> = ({title, children, className}) => {
  return (
    <>
      <Helmet>
        <title>{title} | Imaginator</title>
      </Helmet>
      <div className={`px-5 sm:px-6 lg:px-10 py-2 sm:py-5 lg:py-6 ${className}`}>{children}</div>
    </>
  )
}

export default memo(Page)
