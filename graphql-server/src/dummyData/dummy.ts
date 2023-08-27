export const books = [
  {
    id: "d9d8a367-f950-4b9b-8511-4d2a8e188c67",
    title: "Some book title",
    author: "Adam Example",
    isbn13: null,
    isbn10: "1234567890",
    genre: ["comedy"],
  },
  {
    id: "030755bb-70df-4497-9428-f3cf58733150",
    title: "Ender's Game",
    author: "Orson Scott Card",
    isbn13: null,
    isbn10: "0312932081",
    genre: ["science fiction"],
  },
  {
    id: "030755bb-70df-4497-9428-f3cf58733151",
    title: "ABCD",
    author: "John Smith",
    isbn13: "2328176412312",
    isbn10: "0312932082",
    genre: ["fiction"],
  },
];

export const reviews = [
  {
    id: "d9d8a367-f950-4b9b-8512-4d2a8e188c67",
    bookId: "d9d8a367-f950-4b9b-8511-4d2a8e188c67",
    userId: "e9d8a367-f950-4b9b-8511-4d2a8e188c67",
    content: "It was pretty good",
    rating: 5,
  },
  {
    id: "d9d8a367-f950-4b9b-8512-4d2a8e188c67",
    bookId: "d9d8a367-f950-4b9b-8511-4d2a8e188c67",
    userId: "130755bb-70df-4497-9428-f3cf58733150",
    content: "Not my speed",
    rating: 2,
  },
  {
    id: "d9d8a367-f950-4b9b-8512-4d2a8e188c67",
    bookId: "030755bb-70df-4497-9428-f3cf58733151",
    userId: "e9d8a367-f950-4b9b-8511-4d2a8e188c67",
    content: "I couldn't finish it...",
    rating: 1,
  },
];

export const users = [
  {
    id: "e9d8a367-f950-4b9b-8511-4d2a8e188c67",
    name: "Alec West",
    username: "awest",
  },
  {
    id: "130755bb-70df-4497-9428-f3cf58733150",
    name: "Gary Wilson",
    username: "gwilson",
  },
  {
    id: "130755bb-70df-4497-9428-f3cf58733151",
    name: "Jack Smith",
    username: "jsmith",
  },
];
