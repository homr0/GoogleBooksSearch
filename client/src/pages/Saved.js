import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Main } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    books: []
  };

  render() {
    return(
      <Main>
        <Row>
          <Col size="12">
            <p>Saved stuff here</p>
          </Col>
        </Row>

        <Row>
          <Col size="12">
            <List header="Saved Books">
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

export default Saved;