import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Main } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input } from "../components/Form";
import { Btn } from "../components/Btn";
import BookListing from "../components/BookListing";

class Search extends Component {
  state = {
    books: [],
    search: ""
  };

  componentDidMount() {
    this.searchBook("Harry Potter");
  }

  searchBook = query => {
    API.search(query)
      .then(res => this.setState({books: res.data.items}))
      .catch(err => console.log(err));
  };

  saveBook = book => {
    API.saveBook(book)
      .then(res => console.log("Success!"))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBook(this.state.search);
  };

  render() {
    return(
      <Main>
        <Row>
          <Col size="12">
            <List header="Book Search">
              <ListItem>
                <Input
                  id="search"
                  name="search"
                  label="Book"
                  size="12"
                  handleInputChange={this.handleInputChange}
                />

                <Row>
                  <Col size="12">
                    <Btn
                      colors="green right"
                      handleClickEvent={this.handleFormSubmit}
                    >
                      Search
                    </Btn>
                  </Col>
                </Row>
              </ListItem>
            </List>
          </Col>
        </Row>

        <Row>
          <Col size="12">
            <List header="Search Results">
              {this.state.books.map(book => 
              <BookListing 
                key={book.id}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors || []}
                description={book.volumeInfo.description}
                image={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png"}
                link={book.volumeInfo.infoLink}

                id={book.id}
                btnColors="blue"
                btnLabel="Save"
                handleClickEvent={() => this.saveBook({
                  title: book.volumeInfo.title,
                  authors: book.volumeInfo.authors || [],
                  description: book.volumeInfo.description,
                  image: (book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png",
                  link: book.volumeInfo.infoLink
                })}
              />
              )}
            </List>
          </Col>
        </Row>
      </Main>
    );
  }
};

export default Search;