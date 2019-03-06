import axios from "axios";

// Export an object with a "search" method that searches the Google Books API for the passed query
export default {
  search: query => axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query),
  // Gets all books
  getBooks: () => axios.get("/api/books"),
  // Deletes the book with the given id
  deleteBook: id => axios.delete("/api/books/" + id),
  // Saves a book to the database
  saveBook: bookData => axios.post("/api/books", bookData).then(res => console.log(res))
};