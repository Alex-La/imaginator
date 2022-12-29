import {gql} from "@apollo/client"

import {Res} from "~types/graphql"

export interface CheckImageExistArgs {
  id: number
}

export type checkImageExistRes = Res<boolean>

const CHECK_IMAGE_EXIST_QUERY = gql`
  query Query($id: Int!) {
    res: checkImageExist(id: $id)
  }
`

export default CHECK_IMAGE_EXIST_QUERY
