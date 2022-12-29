import {useQuery} from "@apollo/client"

import {ImagesRes, IMAGES_QUERY} from "~apollo/graphql/queries"

const useImages = (token?: string) => {
  const {data, loading} = useQuery<ImagesRes>(IMAGES_QUERY, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  })

  return {images: data?.res, loading}
}

export default useImages
