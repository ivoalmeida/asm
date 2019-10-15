import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema } from 'graphql-tools';

import { login, signup } from './mutation';
import { users, accounts } from './data';

const typeDefs = `
  type User {
    userId: ID!
    email: String!
    firstName: String!
    lastName: String!
    admin: Boolean!
    password: String!
  }

  type Account {
    accountId: ID!
    name: String!
    type: String!
    contactName: String!
    accountManager: String!
    created: String!
    status: Boolean!
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    users: [User]
    accounts(offset:Int, limit:Int): AccountResult
  }

  type AccountResult {
    offset: Int
    limit: Int
    count: Int
    result: [Account]
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
    accounts: (root, { offset, limit }) => {
      if (!limit || limit <= 0) {
        limit = 10;
      }
      if (!offset) {
        offset = 0;
      }
      return {
        offset,
        limit,
        count: accounts.length,
        result: accounts.slice(offset, limit + offset),
      };
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
  connectToDevTools: true,
});

interface IProps {
  children: any;
}

const MockServer: React.SFC<IProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default MockServer;
