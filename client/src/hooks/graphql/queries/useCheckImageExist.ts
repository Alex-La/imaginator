import {useLazyQuery} from "@apollo/client"
import {CheckImageExistArgs, checkImageExistRes, CHECK_IMAGE_EXIST_QUERY} from "~apollo/graphql/queries"

const useCheckImageExist = () => {
  const [checkExist] = useLazyQuery<checkImageExistRes, CheckImageExistArgs>(CHECK_IMAGE_EXIST_QUERY)

  return {checkExist}
}

export default useCheckImageExist
