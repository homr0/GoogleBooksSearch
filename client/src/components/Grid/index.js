import React from "react";

// Main element.
export const Main = ({children}) => {
  return(
    <main className="container">
      {children}
    </main>
  );
}

// Rows element.
export const Row = ({children}) => {
  return(
    <div className="row">
      {children}
    </div>
  );
}

// Column element.
export const Col = ({children, size}) => {
  return(
    <div className={"col s" + size}>
      {children}
    </div>
  )
}