/**
 * Primary file for GraphQL schemas.
 */

import { gql } from 'apollo-server-express';
import { ApolloServerExpressConfig } from 'apollo-server-express';
import resolvers from '../resolvers/index';


/**
 * Input types:
 * Dont have mutation types as we dont need to write to db for tis project.
 */
const typeDefs = gql`
    type Movie {
        movieId: ID!
        title: String
        seqNr: Int
        releaseYear: Int
    }

    type Character {
        characterId: ID!
        name: String
        actor: String
        appearencesInMovies: Int
    }

    type Query {
        movies: [Movie]
        characters: [Character]
        movie(movieId: ID!): Movie!
        character(characterId: ID!): Character!
    }
`;

const schema: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  introspection: true,
  context: async ({ req, connection, payload }: any) => {
    if (connection) {
      return { isAuth: payload.authToken };
    }
    return { isAuth: req.isAuth };
  }
};

export default schema;