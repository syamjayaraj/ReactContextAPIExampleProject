import "./App.css";
import React, { Component } from "react";
import Library from "./components/Library";

import AppContext from "./AppContext";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          _id: "1",
          title: "Book name 1",
          description: "Best book for business man, students and entreprenuers",
          author: "Rahul",
        },
        {
          _id: "2",
          title: "Book name 2",
          description: "Best book for business man, students and entreprenuers",
          author: "Rahul",
        },
        {
          _id: "3",
          title: "Book name 3",
          description: "Best book for business man, students and entreprenuers",
          author: "Rahul",
        },
        {
          _id: "4",
          title: "Book name 4",
          description: "Best book for business man, students and entreprenuers",
          author: "Rahul",
        },
      ],
      favorites: [],
    };
  }

  addToFavorites = (book) => {
    if (!this.state.favorites.includes(book)) {
      this.setState({
        favorites: [...this.state.favorites, book],
      });
    }
  };

  removeFromFavorites = (book) => {
    this.state.favorites.map((favorite, index) => {
      console.log(favorite._id, book._id);
      if (favorite._id == book._id) {
        this.state.favorites.splice(index, 1);
      }
    });
    this.setState({
      favorites: this.state.favorites,
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          addToFavorites: this.addToFavorites,
          removeFromFavorites: this.removeFromFavorites,
        }}
      >
        <Library />
      </AppContext.Provider>
    );
  }
}

export default App;
