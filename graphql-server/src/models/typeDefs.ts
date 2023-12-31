export const typeDefs = `#graphql

  type Book {
    id: ID!
    bookId: String
    reviewId: String
    title: String
    author: String
    isbn10: String
    isbn13: String
    genre: [String!]
    reviews: [Review!]
    averageRating: Float
  }

  type Review {
    id: ID!
    book: Book
    user: User
    content: String
    rating: Int
  }

  type User {
    id: ID!
    name: String!
    username: String!
    reviews: [Review!]
  }

  type Query {
    books: [Book!]
    book(id: ID!): Book!
    reviews: [Review!]
    review(id: ID!): Review!
    users: [User!]
    user(id: ID!): User!
  }

  input CreateReviewInput {
    bookId: String!
    userId: String!
    rating: Int!
    content: String
  }

  input EditReviewInput {
    reviewId: ID!
    rating: Int!
    content: String
  }

  type Mutation {
    createReview(input: CreateReviewInput!): Review!
    editReview(input: EditReviewInput!): Review!
    deleteReview(reviewId: ID!): Review!
  }
`;
