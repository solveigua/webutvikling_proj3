/**
 * Run server
 */

import mongoose from 'mongoose';
import config from './config';
import Express from './config/express';

/**
 * Promisify mongoose.
 * @param mongoose
 
 Promise.promisifyAll(mongoose);

 /**
  * Config mongoose.
  * @param uris
  * @param options
  
 mongoose.connect(config.db);*/

mongoose
    .connect(`mongodb+srv://solveig:aune@it2810-19.idi.ntnu.no:27017/?authSource=marvel&readPreference=primary&appname=MongoDB%20Compass&ssl=false`)
    .then( () => {
        console.log('MongoDB connected successfully')
    });
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
    console.log(`server ready @  27017`);
    
    console.log(
        `🚀 Server ready at http://localhost:${config.port}${ExpressServer.server.graphqlPath}`
      );

});