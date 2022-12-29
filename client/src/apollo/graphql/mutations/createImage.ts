import {gql} from "@apollo/client"

import {Args, Res} from "~types/graphql"

import {Image, ImageParams, IMAGE_FRAGMENT} from "../fragments"

export interface CreateImageArgs extends Args<ImageParams> {}

export type CreateImageRes = Res<Image>

const CREATE_IMAGE_MUTATION = gql`
  ${IMAGE_FRAGMENT}
  mutation CreateImage($args: CreateImageArgs!) {
    res: createImage(args: $args) {
      ...ImageFragment
    }
  }
`

export default CREATE_IMAGE_MUTATION
