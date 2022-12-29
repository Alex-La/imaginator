import {FC} from "react"
import {useParams} from "react-router-dom"
import cls from "classnames"

import {Page} from "~components"
import {useImages} from "~hooks/graphql/queries"
import {ImageState} from "~apollo/graphql/fragments"

const Admin: FC = () => {
  const {token} = useParams()
  const {images, loading} = useImages(token)

  return (
    <Page title="Admin">
      {loading ? (
        <h5 className="text-center text-info-main">Loading...</h5>
      ) : (
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-grey-500">
            <thead className="text-xs text-grey-700 uppercase bg-info-lighter">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Id
                </th>
                <th scope="col" className="py-3 px-6">
                  State
                </th>
                <th scope="col" className="py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {images?.map(({id, path, state}) => (
                <tr className="bg-white border-b" key={`image_${id}`}>
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
                    <button className="btn small error">Discard</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Page>
  )
}

export default Admin
