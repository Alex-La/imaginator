import {useMutation} from "@apollo/client"

import {CreateImageArgs, CreateImageRes, CREATE_IMAGE_MUTATION} from "~apollo/graphql/mutations"
import {ImagesRes, IMAGES_QUERY} from "~apollo/graphql/queries"

const useCreateImage = () => {
  const [createImage, {data, loading}] = useMutation<CreateImageRes, CreateImageArgs>(CREATE_IMAGE_MUTATION, {
    update(cache, {data}) {
      if (data?.res) {
        const {res: image} = data
        cache.updateQuery<ImagesRes>({query: IMAGES_QUERY}, data => (data ? {res: [...data.res, image]} : data))
      }
    },
  })

  return {image: data?.res, loading, createImage}
}

export default useCreateImage
