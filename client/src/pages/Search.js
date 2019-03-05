import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Main } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input } from "../components/Form";
import { Btn, BtnA } from "../components/Btn";

class Search extends Component {
  state = {
    books: [],
    search: ""
  };

  // componentDidMount() {
  //   this.searchBook("Harry Potter");
  // }

  searchBook = query => {
    API.search(query)
      .then(res => this.setState({books: res.data.items}))
      .catch(err => console.log(err));
  };

  saveBook = book => {
    console.log(book);
    API.saveBook({
      title: book.title,
      author: book.authors,
      description: book.description,
      image: book.image,
      link: book.link
    })
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
              {this.state.books.map(book => <ListItem id={book.id} key={book.id}>
                <Row>
                  <Col size="10">
                    <h5 className="book-title">{book.volumeInfo.title}</h5>
                    <h6>Written by:&nbsp;
                      <span className="book-authors">
                        {(book.volumeInfo.authors) ? book.volumeInfo.authors.join(", ") : "N/A"}
                      </span>
                    </h6>
                  </Col>

                  <Col size="2">
                    <Btn colors="blue right" handleClickEvent={() => this.saveBook({
                      title: book.volumeInfo.title,
                      authors: book.volumeInfo.authors || [],
                      description: book.volumeInfo.description,
                      image: (book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png",
                      link: book.volumeInfo.infoLink
                    })}>
                      Save
                    </Btn>

                    <BtnA colors="yellow right" link={book.volumeInfo.infoLink}>
                      View
                    </BtnA>
                  </Col>
                </Row>

                <Row>
                  <Col size="3">
                    <img className="book-image" src={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png"} alt={book.volumeInfo.title} />
                  </Col>

                  <Col size="9">
                    <p className="book-image">{book.volumeInfo.description}</p>
                  </Col>
                </Row>
              </ListItem>
              ) || "Please enter a book title"}
            </List>
          </Col>
        </Row>
      </Main>
    );
  }
};

export default Search;