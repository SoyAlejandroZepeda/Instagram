const { gql } = require('apollo-server');

//Schemas
const typeDefs = gql`

     type User {
          id: ID
          email: String
          password: String
     }

     input UserInput {
          email: String!
          password: String!
     }

     type Query {
          getUser : User
     }

     type Mutation {
          newUser(input: UserInput) : User
     }

`;

module.exports = typeDefs;