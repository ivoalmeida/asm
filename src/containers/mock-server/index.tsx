import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema } from 'graphql-tools';

import { login, signup } from './mutation';
import { users } from './data';

const typeDefs = `
  type User {
    userId: ID!
    email: String!
    firstName: String!
    lastName: String!
    admin: Boolean!
    password: String!
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    users: [User]
  }

  type Mutation {
    signup(email: String!, password: String!, name: String!): String
    login(email: String!, password: String!): AuthPayload
  }
`;

const resolvers = {
  Query: {
    users: () => {
      return users;
    },
  },
  Mutation: {
    login,
    signup,
  },
};

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const link = new SchemaLink({ schema: executableSchema });

const cache = new InMemoryCache({ addTypename: false });
const client = new ApolloClient({
  link,
  cache,
});

interface IProps {
  children: any;
}

const MockServer: React.SFC<IProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default MockServer;
