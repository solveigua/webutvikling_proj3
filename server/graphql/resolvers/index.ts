/**
 * Export for all resolvers.
 */
import { moviesResolver } from './movies';
import { charactersResolver } from './characters';

const rootResolver = {
  Query: {
    //test:
    hello: () => {
      return "helloWorld";
    },
    ...moviesResolver,
    ...charactersResolver
    // Add other queries here
  },
  Mutation: {
    // Add mutations here
  },
  Subscription: {
    // Add subscriptions here
  }
};

export default rootResolver;