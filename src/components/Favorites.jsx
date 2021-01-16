import React, { useContext } from "react";
import AppContext from "../AppContext";

function Favorites() {
  const value = useContext(AppContext);

  return (
    <div className="books">
      {value.state.favorites.map((book, index) => {
        return (
          <div className="book" key={index}>
            <h2 className="title">{book.title}</h2>
            <p className="description">{book.description}</p>
            <h6 className="author">{book.author}</h6>
          </div>
        );
      })}
    </div>
  );
}
export default Favorites;
