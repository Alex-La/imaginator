import {useQuery} from "@apollo/client"
import {PICSUM_PHOTO_QUERY, PicsumPhotoRes} from "~apollo/graphql/queries"

const useImages = () => {
  const {data, loading, refetch} = useQuery<PicsumPhotoRes>(PICSUM_PHOTO_QUERY, {
    notifyOnNetworkStatusChange: true,
  })

  return {photo: data?.res, loading, refetch}
}

export default useImages
