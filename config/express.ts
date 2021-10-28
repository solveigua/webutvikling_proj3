/**
 * Express configuration
 */
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import * as http from 'http';
import schema from '../server/graphql/schema/index';
import auth from '../server/middleware/auth';



class Express {
    public express: express.Application;
    public server: ApolloServer = new ApolloServer(schema);
    public httpServer: http.Server;
    public init = (): void => {
        /**
         * Creating an express application
         */
        this.express = express();
        /**
         *  Middlerware for extracting authToken
         */
        this.express.use(auth);
        this.server.applyMiddleware({ app: this.express });
        this.httpServer = http.createServer(this.express);
      }
    }    
export default Express;
