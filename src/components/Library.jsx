import React from "react";
import Books from "./Books";
import Favorites from "./Favorites";

function Library() {
  return (
    <div className="library">
      <h1>Books in the library</h1>
      <Books />
      <h1>Favorites</h1>
      <Favorites />
    </div>
  );
}
export default Library;
