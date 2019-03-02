import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Main } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books: [],
    query: ""
  };

  render() {
    return(
      <Main>
        <Row>
          <Col size="12">
            <p>Search for stuff here</p>
          </Col>
        </Row>

        <Row>
          <Col size="12">
            <List header="Search Results">
              {this.state.books.map(book => <ListItem>
                  There's a book. {book.title}
                </ListItem>
              )}
            </List>
          </Col>
        </Row>
      </Main>
    );
  }
};

export default Search;