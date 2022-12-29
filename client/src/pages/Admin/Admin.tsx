import {FC, useEffect} from "react"
import {useParams} from "react-router-dom"

import {Page} from "~components"
import {useImages} from "~hooks/graphql/queries"
import {adminAccessToken} from "~apollo/startup/cache"

import TableRow from "./components/TableRow"

const Admin: FC = () => {
  const {token} = useParams()
  const {images, loading} = useImages(token)

  useEffect(() => {
    adminAccessToken(token)
  }, [token])

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
              {images?.map((image, index) => (
                <TableRow key={`image_${index}`} image={image} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Page>
  )
}

export default Admin
