export const resolvers = {
  Query: {
    books: (_, __, { dataSources }) => {
      console.log("someone asked for all books!");
      return dataSources.booksAPI.getItems();
    },

    book: (_, args, { dataSources }, ___) => {
      return dataSources.booksAPI.getItem(args.id);
    },

    reviews: (_, __, { dataSources }, ___) => dataSources.reviewsAPI.getItems(),

    review: (_, args, { dataSources }, ___) => {
      return dataSources.reviewsAPI.getItem(args.id);
    },

    users: (_, __, { dataSources }, ___) => dataSources.usersAPI.getItems(),

    user: (_, args, { dataSources }, ___) => {
      return dataSources.usersAPI.getItem(args.id);
    },
  },

  Mutation: {
    createReview: (_, args, { dataSources }, ____) => {
      const review = args.input;
      return dataSources.reviewsAPI.createReview(review);
    },

    editReview: (_, args, { dataSources }, ____) => {
      const review = args.input;
      return dataSources.reviewsAPI.editReview(review);
    },

    deleteReview: (_, args, { dataSources }, ____) => {
      return dataSources.reviewsAPI.deleteReview(args.reviewId);
    },
  },

  Book: {
    reviews: (parent, _, { dataSources }, ___) => {
      return dataSources.reviewsAPI.findByBook(parent.id);
    },
    averageRating: async (parent, _, { dataSources }, ___) => {
      const bookReviews = await dataSources.reviewsAPI.findByBook(parent.id);
      return bookReviews.length > 0
        ? bookReviews.reduce((prev, curr) => {
            return prev + curr.rating;
          }, 0) / bookReviews.length
        : null;
    },
  },

  Review: {
    book: (parent, _, { dataSources }, ___) => {
      return dataSources.booksAPI.getItem(parent.bookId);
    },
    user: (parent, _, { dataSources }, ___) => {
      return dataSources.usersAPI.getItem(parent.userId);
    },
  },

  User: {
    reviews: (parent, _, { dataSources }, ___) => {
      return dataSources.reviewsAPI.findByUser(parent.id);
    },
  },
};
