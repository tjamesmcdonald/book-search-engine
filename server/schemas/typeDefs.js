const typeDefs = `
type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type User {
    _id: ID!
    username: String!
    email: String
    savedBooks: [Book]
}

type Auth {
    token: String
    user: User
}

type Query {
    me: User
}

input bookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: bookInput!): User
    removeBook(bookId: String!): User
}
`;

module.exports = typeDefs;
