const express = require('express');
const ApolloServer = require('apollo-server-express/')
const mongoose = require('mongoose')
const ConnectOptions = require('mongoose/')
const resolvers = require('./resolvers.js');
const typeDefs = require('./typeDefs');

async function startServer() {
    try {
        const app = express();
        const apolloserver = new ApolloServer({
            typeDefs: typeDefs,
            resolvers: resolvers,
        });

        await apolloserver.start();

        apolloserver.applyMiddleware({ app: app });

        app.use((req, res) => {
            res.send("Hello from express apollo server");
        });

        await mongoose.connect('mongodb://solveig:aune@it2810-19.idi.ntnu.no:27017/marvel?authSource=marvel&readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then( () => {
            console.log('Mongoose connected successfully')
        });

        app.listen(4000, () => console.log("server is running on port 4000"));
    }
    catch (err) {
        console.log("caugth error", err);
    }
}

startServer();