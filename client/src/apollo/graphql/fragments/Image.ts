import {gql} from "@apollo/client"

export enum ImageState {
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}

export interface ImageParams {
  id: number
  path: string
  state: ImageState
}

export type Image = {
  id: number
  path: string
  state: ImageState
}

const IMAGE_FRAGMENT = gql`
  fragment ImageFragment on Image {
    id
    path
    state
  }
`

export default IMAGE_FRAGMENT
