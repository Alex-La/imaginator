import {FC, memo, useCallback} from "react"
import cls from "classnames"
import {toast} from "react-hot-toast"

import {Image, ImageState} from "~apollo/graphql/fragments"
import {useRemoveImage} from "~hooks/graphql/mutations"

type Props = {
  image: Image
}

const TableRow: FC<Props> = ({image}) => {
  const {path, id, state} = image

  const {removeImage, loading} = useRemoveImage()

  const onRemove = useCallback(
    () =>
      removeImage({
        variables: {id},
        onCompleted() {
          toast.success("Success!")
        },
      }),
    [id],
  )

  return (
    <tr className="bg-white border-b">
      <th scope="row" className="py-4 px-6 font-medium text-grey-900 whitespace-nowrap">
        <a href={path} target="_blank" className="text-info-main hover:underline">
          {id}
        </a>
      </th>
      <td className="py-4 px-6">
        <span
          className={cls("px-4 py-2 rounded-sm", {
            "bg-primary-lighter text-primary-main": state === ImageState.ACCEPTED,
            "bg-error-lighter text-error-main": state === ImageState.REJECTED,
          })}>
          {state}
        </span>
      </td>
      <td className="py-4 px-6">
        <button className="btn small error" disabled={loading} onClick={onRemove}>
          Discard
        </button>
      </td>
    </tr>
  )
}

export default memo(TableRow)
