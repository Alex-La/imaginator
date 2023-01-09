import {ImageState} from "../entities/Image"

interface Args<T> {
  args: T
}

export interface CreateImageParams {
  id: number
  path: string
  state: ImageState
}

export interface RemoveImageParams {
  id: number
}

export interface CreateImageArgs extends Args<CreateImageParams> {}

const typeDefs = `#graphql
    type Query {
        images: [Image!]!
        picsumPhoto: String!
    }

    type Mutation {
        createImage(args: CreateImageArgs!): Image!
        removeImage(id: Int!): Image!
    }

    type Image {
        id: Int!
        path: String!
        state: ImageState!
    }

    input CreateImageArgs {
        id: Int!
        path: String!
        state: ImageState!
    }

    enum ImageState {
        ACCEPTED,
        REJECTED
    }
`

export default typeDefs
