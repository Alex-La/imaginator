import {useCallback, useEffect, useState} from "react"
import {useCheckImageExist} from "./graphql/queries"

const PICSUM_URL = "https://picsum.photos/400/600"

const useLoremPicsum = () => {
  const [id, setId] = useState<number>()
  const [url, setUrl] = useState<string>()
  const [loading, setLoading] = useState<boolean>(true)
  const {checkExist, loading: checkLoading} = useCheckImageExist()

  const fetchImage = useCallback(async () => {
    setLoading(true)
    try {
      const {url} = await fetch(PICSUM_URL)
      const id = url.split("/")[4]
      checkExist({
        variables: {id: Number(id)},
        onCompleted({res}) {
          if (res) fetchImage()
          else {
            setId(Number(id))
            setUrl(url)
            setLoading(false)
          }
        },
      })
    } catch (e) {
      console.error(e)
    }
  }, [])

  useEffect(() => {
    fetchImage()
  }, [fetchImage])

  return {id, url, loading: loading || checkLoading, fetchImage}
}

export default useLoremPicsum
