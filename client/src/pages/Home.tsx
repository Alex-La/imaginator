import {FC, useCallback, useRef} from "react"
import {toast} from "react-hot-toast"

import {Page} from "~components"
import {usePicsumPhoto} from "~hooks/graphql/queries"
import {useCreateImage} from "~hooks/graphql/mutations"
import {ImageState} from "~apollo/graphql/fragments"

const Home: FC = () => {
  const imageRef = useRef<HTMLImageElement>(null)

  const {photo, loading, refetch} = usePicsumPhoto()
  const {createImage, loading: createLoading} = useCreateImage()

  const onCreate = useCallback(
    (state: ImageState) => {
      if (photo) {
        const id = Number(photo.split("/")[4])
        createImage({
          variables: {args: {id, path: photo, state}},
          onCompleted() {
            toast.success("Success!")
            refetch()
          },
        })
      }
    },
    [photo],
  )

  const onAccept = useCallback(() => onCreate(ImageState.ACCEPTED), [onCreate])
  const onReject = useCallback(() => onCreate(ImageState.REJECTED), [onCreate])

  return (
    <Page title="Home" className="flex items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <div className="w-full sm:w-1/2 relative">
          <img
            ref={imageRef}
            className="w-full h-100 sm:h-80 lg:h-100 bg-grey-200 rounded-lg object-cover"
            src={photo}
          />
          {loading && (
            <div className="absolute inset-0 bg-grey-100 rounded-lg flex items-center justify-center">
              <p className="caption animate-bounce">Loading...</p>
            </div>
          )}
        </div>
        <div className="flex mt-5 justify-center">
          <button className="btn info mr-2" disabled={createLoading || loading} onClick={onAccept}>
            Accept
          </button>
          <button className="btn error ml-2" disabled={createLoading || loading} onClick={onReject}>
            Reject
          </button>
        </div>
      </div>
    </Page>
  )
}

export default Home
