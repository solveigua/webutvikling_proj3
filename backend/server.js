const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

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
        });
        console.log('Mongooose connected ...');

        app.listen(4000, () => console.log("server is running on port 4000"));
    }
    catch (err) {
        console.log("caugth error", err);
    }
}

startServer();