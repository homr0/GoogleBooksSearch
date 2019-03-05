import React from "react";
import "./style.css";

export const List = ({children, header}) => {
  return(
    <ul className="collection">
      <li className="collection-header"><h4>{header}</h4></li>
      {children}
    </ul>
  );
};

export const ListItem = ({children}) => {
  return(
    <li className="collection-item">
      {children}
    </li>
  );
}