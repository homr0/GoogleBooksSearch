import React from "react";
import "./style.css";

export const List = ({children, header}) => {
  return(
    <ul className="collection deep-purple lighten-4 deep-purple-text text-darken-4">
      <li className="collection-header"><h4>{header}</h4></li>
      {children}
    </ul>
  );
};

export const ListItem = ({children}) => {
  return(
    <li className="collection-item indigo-text text-darken-4">
      {children}
    </li>
  );
}