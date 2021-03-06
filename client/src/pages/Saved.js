import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Main } from "../components/Grid";
import { List } from "../components/List";
import BookListing from "../components/BookListing";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err));
  };

  deleteBook = (id) => {
    console.log(id);
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return(
      <Main>
        <Row>
          <Col size="12">
            <List header="Saved Books">
              {this.state.books.map(book => 
              <BookListing key={book._id}
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}

              id={book._id}
              btnColors="red lighten-1"
              btnLabel="Delete"
              handleClickEvent={() => this.deleteBook(book._id)}
            />)}
            </List>
          </Col>
        </Row>
      </Main>
    );
  }
};

export default Saved;