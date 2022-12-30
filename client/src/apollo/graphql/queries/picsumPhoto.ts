import {gql} from "@apollo/client"

import {Res} from "~types/graphql"

export type PicsumPhotoRes = Res<string>

const PICSUM_PHOTO_QUERY = gql`
  query PicsumPhoto {
    res: picsumPhoto
  }
`

export default PICSUM_PHOTO_QUERY
