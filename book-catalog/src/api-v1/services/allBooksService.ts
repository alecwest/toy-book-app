const allBooks = [
  {
    title: "A",
    isbn: "123498765498741",
    genre: ["comedy", "thriller"],
  },
  {
    title: "B",
    isbn: "123498765498742",
    genre: ["mystery"],
  },
  {
    title: "C",
    isbn: "123498765498743",
    genre: ["romance"],
  },
];

export class AllBooksService {
  getAllBooks() {
    return { books: allBooks };
  }
}
