import {gql} from "@apollo/client"

import {Res} from "~types/graphql"

import {Image, IMAGE_FRAGMENT} from "../fragments"

export type ImagesRes = Res<Image[]>

const IMAGES_QUERY = gql`
  ${IMAGE_FRAGMENT}
  query Images {
    res: images {
      ...ImageFragment
    }
  }
`

export default IMAGES_QUERY
