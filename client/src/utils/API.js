import axios from "axios";

// Export an object with a "search" method that searches the Google Books API for the passed query
export default {
  search: query => axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query),
  // Gets all books
  getBooks: () => {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: id => {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: bookData => {
    return axios.post("/api/books", bookData);
  }
};