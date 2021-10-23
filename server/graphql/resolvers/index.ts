/**
 * Export for all resolvers.
 */
import { moviesResolver } from './movies';

const rootResolver = {
  Query: {
    ...moviesResolver
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