import {useMutation} from "@apollo/client"

import {CreateImageArgs, CreateImageRes, CREATE_IMAGE_MUTATION} from "~apollo/graphql/mutations"

const useCreateImage = () => {
  const [createImage, {data, loading}] = useMutation<CreateImageRes, CreateImageArgs>(CREATE_IMAGE_MUTATION)

  return {image: data?.res, loading, createImage}
}

export default useCreateImage
