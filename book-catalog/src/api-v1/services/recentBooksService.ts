const recentBooks = [
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
];

export class RecentBooksService {
  getRecentBooks() {
    return { books: recentBooks };
  }
}
