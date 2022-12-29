import {useMutation} from "@apollo/client"

import {RemoveImageArgs, RemoveImageRes, REMOVE_IMAGE_MUTATION} from "~apollo/graphql/mutations"
import {ImagesRes, IMAGES_QUERY} from "~apollo/graphql/queries"

const useRemoveImage = () => {
  const [removeImage, {data, loading}] = useMutation<RemoveImageRes, RemoveImageArgs>(REMOVE_IMAGE_MUTATION, {
    update(cache, {data}) {
      if (data?.res) {
        const {res: image} = data
        cache.updateQuery<ImagesRes>({query: IMAGES_QUERY}, data => {
          if (data) {
            return {res: data.res.filter(i => i.id !== image.id)}
          }
          return data
        })
      }
    },
  })

  return {image: data?.res, loading, removeImage}
}

export default useRemoveImage
