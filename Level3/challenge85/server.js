import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Query {
    _empty: String
  }
  type Mutation {
    add(a: Int, b: Int): Int
  }
`;

const resolvers = {
  Mutation: {
    add: (_, { a, b }) => a + b,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`Server ready at ${url}`);
