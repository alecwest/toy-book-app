import fetch, { RequestInit } from "node-fetch";
import { books, reviews, users } from "../dummyData/dummy";

const requestInfo: RequestInit = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const resolvers = {
  Query: {
    books: () => {
      return books;
      // return fetch(`http://localhost:8091/books`, requestInfo)
      //   .then((resp) => {
      //     return resp.json();
      //   })
      //   .then((resp) => readResults(resp));
    },

    book: (_, args, __, ___) => {
      return books.find((book) => book.id == args.id);
    },

    reviews: (parent, _, __, ___) => reviews,

    users: () => users,
  },

  Book: {
    reviews: (parent, _, __, ___) => {
      return reviews.filter((review) => review.bookId === parent.id);
    },
    averageRating: (parent, _, __, ___) => {
      const bookReviews = reviews.filter(
        (review) => review.bookId === parent.id
      );
      return (
        bookReviews.reduce((prev, curr) => {
          return prev + curr.rating;
        }, 0) / bookReviews.length
      );
    },
  },

  Review: {
    book: (parent, _, __, ___) => {
      return books.find((b) => b.id == parent.bookId);
    },
    user: (parent, _, __, ___) => {
      return users.find((u) => u.id == parent.userId);
    },
  },

  User: {
    reviews: (parent, _, __, ___) => {
      return reviews.filter((f) => f.userId == parent.id);
    },
  },
};

function readResults(data): any[] {
  return data._embedded.books.map((book) => {
    console.log(book);
    book["id"] = (book["_links"]["self"]["href"] as string)
      .split("/")
      .reverse()[0];
    return book;
  });
}
