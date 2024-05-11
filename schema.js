const { buildSchema } = require('graphql');
const User = require('./User');

const schema = buildSchema(`
  type Query {
    getUser(id: String!): User
    listUsers: [User]
  }

  type Mutation {
    addUser(name: String!, email: String!): User
  }

  type User {
    id: String
    name: String
    email: String
  }
`);

const root = {
  getUser: async ({ id }) => {
    return User.findById(id);
  },
  listUsers: async () => {
    return User.find({});
  },
  addUser: async ({ name, email }) => {
    const user = new User({ name, email });
    return user.save();
  }
};

module.exports = { schema, root };
