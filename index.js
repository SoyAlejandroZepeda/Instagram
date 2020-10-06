const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schemas');
const resolvers = require('./db/resolvers');

const connectDB = require('./config/db');
require('dotenv').config({path: 'variables.env'});

//Connect to database
connectDB();

//Server
const server = new ApolloServer({
     typeDefs,
     resolvers
});

//Start server
server.listen({ port: process.env.PORT || 4000 }).then(({url}) => {
     console.log(`Server ready on ${url}`);
});