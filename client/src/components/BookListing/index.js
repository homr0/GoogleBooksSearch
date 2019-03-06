import React from "react";
import { Col, Row } from "../Grid";
import { ListItem } from "../List";
import { Btn, BtnA } from "../Btn";

const BookListing = props => {
  return(
    <ListItem id={props.id}>
      <Row>
        <Col size="10">
          <h5 className="book-title">{props.title}</h5>
          <h6>Written by:&nbsp;
            <span className="book-authors">
              {(props.authors.length >= 1) ? props.authors.join(", ") : "N/A"}
            </span>
          </h6>
        </Col>

        <Col size="2">
          <Btn colors={"right " + props.btnColors} handleClickEvent={props.handleClickEvent}>
            {props.btnLabel}
          </Btn>

          <BtnA colors="yellow right" link={props.link}>
            View
          </BtnA>
        </Col>
      </Row>

      <Row>
        <Col size="3">
          <img className="book-image" src={props.image} alt={props.title} />
        </Col>

        <Col size="9">
          <p className="book-image">{props.description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default BookListing;