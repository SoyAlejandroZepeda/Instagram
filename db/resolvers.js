const User = require('../models/User');
require('dotenv').config({ path: 'variables.env' });

//Resolvers
const resolvers = {
     //Queries
     Query: {
          getUser : async () => {
               try {
                    const users = await User.find({});
                    return users;
               } catch (error) {
                    console.log(error);
               }
          }
     },

     //Mutations
     Mutation: {
          newUser : async (_, { input }) => {
               try {
                    const user = new User(input);
                    user.save();
                    return user;
               } catch (error) {
                    console.log(error);
               }
          }
     }
}

module.exports = resolvers;