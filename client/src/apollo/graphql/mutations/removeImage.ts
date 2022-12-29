import {gql} from "@apollo/client"

import {Res} from "~types/graphql"

import {Image, IMAGE_FRAGMENT} from "../fragments"

export interface RemoveImageArgs {
  id: number
}

export type RemoveImageRes = Res<Image>

const REMOVE_IMAGE_MUTATION = gql`
  ${IMAGE_FRAGMENT}
  mutation RemoveImage($id: Int!) {
    res: removeImage(id: $id) {
      ...ImageFragment
    }
  }
`

export default REMOVE_IMAGE_MUTATION
