export const resolvers = {
  Query: {
    books: (_, __, { dataSources }) => {
      return dataSources.booksAPI.getBooks();
    },

    book: (_, args, { dataSources }, ___) => {
      return dataSources.booksAPI.getBook(args.id);
    },

    reviews: (_, __, { dataSources }, ___) =>
      dataSources.reviewsAPI.getReviews(),

    users: (_, __, { dataSources }, ___) => dataSources.usersAPI.getUsers(),
  },

  Book: {
    reviews: (parent, _, { dataSources }, ___) => {
      return dataSources.reviewsAPI
        .getReviews()
        .then((reviews) =>
          reviews.filter((review) => review.bookId === parent.id)
        );
    },
    averageRating: async (parent, _, { dataSources }, ___) => {
      const bookReviews = await dataSources.reviewsAPI
        .getReviews()
        .then((reviews) =>
          reviews.filter((review) => review.bookId === parent.id)
        );
      return (
        bookReviews.reduce((prev, curr) => {
          return prev + curr.rating;
        }, 0) / bookReviews.length
      );
    },
  },

  Review: {
    book: (parent, _, { dataSources }, ___) => {
      return dataSources.booksAPI
        .getBooks()
        .then((books) => books.find((b) => b.id == parent.bookId));
    },
    user: (parent, _, { dataSources }, ___) => {
      return dataSources.usersAPI
        .getUsers()
        .then((users) => users.find((u) => u.id == parent.userId));
    },
  },

  User: {
    reviews: (parent, _, { dataSources }, ___) => {
      return dataSources.reviewsAPI
        .getReviews()
        .then((reviews) => reviews.filter((f) => f.userId == parent.id));
    },
  },
};
