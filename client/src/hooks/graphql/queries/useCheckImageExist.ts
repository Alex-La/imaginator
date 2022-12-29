import {useLazyQuery} from "@apollo/client"
import {CheckImageExistArgs, checkImageExistRes, CHECK_IMAGE_EXIST_QUERY} from "~apollo/graphql/queries"

const useCheckImageExist = () => {
  const [checkExist, {loading}] = useLazyQuery<checkImageExistRes, CheckImageExistArgs>(CHECK_IMAGE_EXIST_QUERY)

  return {checkExist, loading}
}

export default useCheckImageExist
