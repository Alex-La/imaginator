import {useCallback, useEffect, useState} from "react"

const PICSUM_URL = "https://picsum.photos/400/600"

const useLoremPicsum = () => {
  const [id, setId] = useState<number>()
  const [url, setUrl] = useState<string>()
  const [loading, setLoading] = useState<boolean>(true)

  const fetchImage = useCallback(async () => {
    setLoading(true)
    try {
      const {url} = await fetch(PICSUM_URL)
      const id = url.split("/")[4]
      setId(Number(id))
      setUrl(url)
      setLoading(false)
    } catch (e) {
      console.error(e)
    }
  }, [])

  useEffect(() => {
    fetchImage()
  }, [fetchImage])

  return {id, url, loading, fetchImage}
}

export default useLoremPicsum
