export const resolvers = {
  Query: {
    books: (_, __, { dataSources }) => {
      return dataSources.booksAPI.getItems();
    },

    book: (_, args, { dataSources }, ___) => {
      return dataSources.booksAPI.getItem(args.id);
    },

    reviews: (_, __, { dataSources }, ___) => dataSources.reviewsAPI.getItems(),

    users: (_, __, { dataSources }, ___) => dataSources.usersAPI.getItems(),
  },

  Book: {
    reviews: (parent, _, { dataSources }, ___) => {
      return dataSources.reviewsAPI
        .getItems()
        .then((reviews) =>
          reviews.filter((review) => review.bookId === parent.id)
        );
    },
    averageRating: async (parent, _, { dataSources }, ___) => {
      const bookReviews = await dataSources.reviewsAPI
        .getItems()
        .then((reviews) =>
          reviews.filter((review) => review.bookId === parent.id)
        );
      return bookReviews.length > 0
        ? bookReviews.reduce((prev, curr) => {
            return prev + curr.rating;
          }, 0) / bookReviews.length
        : null;
    },
  },

  Review: {
    book: (parent, _, { dataSources }, ___) => {
      return dataSources.booksAPI
        .getItems()
        .then((books) => books.find((b) => b.id == parent.bookId));
    },
    user: (parent, _, { dataSources }, ___) => {
      return dataSources.usersAPI
        .getItems()
        .then((users) => users.find((u) => u.id == parent.userId));
    },
  },

  User: {
    reviews: (parent, _, { dataSources }, ___) => {
      return dataSources.reviewsAPI
        .getItems()
        .then((reviews) => reviews.filter((f) => f.userId == parent.id));
    },
  },
};
