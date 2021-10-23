/**
 * Run server
 */

import Promise from 'bluebird';
import mongoose from 'mongoose';
import config from '../config';
import Express from '../config/express';

/**
 * Promisify mongoose.
 * @param mongoose
 */
 Promise.promisifyAll(mongoose);

 /**
  * Config mongoose.
  * @param uris
  * @param options
  */
 mongoose.connect(config.db);

/**
 * Error when unable to connect to db
 */
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.db}`);
});

/**
 * Init Express.
 */
const ExpressServer = new Express();
ExpressServer.init();

/**
 * Listen to port
 */
ExpressServer.httpServer.listen(process.env.PORT || config.port, () => {
    console.log(`server ready @ ${config.port}`);
    
    console.log(
        `🚀 Server ready at http://localhost:${config.port}${ExpressServer.server.graphqlPath}`
      );

});