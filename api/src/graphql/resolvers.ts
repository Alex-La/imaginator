import {GraphQLError} from "graphql"

import {CreateImageArgs, RemoveImageParams} from "./typeDefs"
import {ImageModel} from "../entities/Image"
import {ApolloContext} from "../config/apolloServerConfig"
import {isAuthorized} from "../utils"

type PromiseWithError<T> = Promise<T | GraphQLError>

const resolvers = {
  Query: {
    images: async (_: any, __: any, {token, dataSources}: ApolloContext): PromiseWithError<ImageModel[]> => {
      try {
        if (!isAuthorized(token)) return new GraphQLError("Please, provide valid access token!")

        return await dataSources.imagesAPI.findAllImages()
      } catch (e) {
        return new GraphQLError("Can't load image list!")
      }
    },
    picsumPhoto: async (_: any, __: any, {dataSources}: ApolloContext): PromiseWithError<string> => {
      try {
        return await dataSources.imagesAPI.getPicsumPhoto()
      } catch (e) {
        return new GraphQLError("All photos are checked!")
      }
    },
  },

  Mutation: {
    createImage: async (
      _: any,
      {args}: CreateImageArgs,
      {dataSources}: ApolloContext,
    ): PromiseWithError<ImageModel> => {
      try {
        const exist = await dataSources.imagesAPI.findImageById(args.id)
        if (exist) return new GraphQLError("Image is already checked!")

        return await dataSources.imagesAPI.createImage(args)
      } catch (e) {
        return new GraphQLError("Server approving error!")
      }
    },
    removeImage: async (
      _: any,
      {id}: RemoveImageParams,
      {dataSources}: ApolloContext,
    ): PromiseWithError<ImageModel> => {
      try {
        return await dataSources.imagesAPI.removeImage(id)
      } catch (e) {
        return new GraphQLError("Can't remove this image!")
      }
    },
  },
}

export default resolvers
