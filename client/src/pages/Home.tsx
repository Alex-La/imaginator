import {FC, useRef} from "react"

import {Page} from "~components"

const Home: FC = () => {
  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <Page title="Home" className="flex items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <div className="w-full sm:w-1/2 relative">
          <img
            ref={imageRef}
            className="w-full h-100 sm:h-80 lg:h-100 bg-grey-200 rounded-lg object-cover"
            src="https://picsum.photos/400/600"
          />
          {false && (
            <div className="absolute inset-0 bg-grey-100 rounded-lg flex items-center justify-center">
              <p className="caption animate-bounce">Загрузка...</p>
            </div>
          )}
        </div>
        <div className="flex mt-5 justify-center">
          <button className="btn info mr-2">Accept</button>
          <button className="btn error ml-2">Reject</button>
        </div>
      </div>
    </Page>
  )
}

export default Home
