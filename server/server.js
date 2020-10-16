const { ApolloServer, gql } = require("apollo-server");
const { sequelize } = require("./models");

// The GraphQL schema
const typeDefs = require("./graphql/TypeDefs");
// A map of functions which return data for the schema.
const resolvers = require("./graphql/Resolver");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});



server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
  sequelize
    .authenticate()
    .then(() => {
      // sequelize.sync({ force: true, logging: console.log })
      console.log("Db Connected!!")})
    .catch(() => console.error("Db not Connected!!"));
});
