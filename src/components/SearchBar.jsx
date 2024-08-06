import { useState } from "react";
import "../styling/SearchBar.css"

export default function SearchBar({ setSearchTerm }) {
  const [currentSearchInput, setCurrentSearchInput] = useState("");

  function handleChange(event) {
    setCurrentSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (currentSearchInput !== "") {
      setSearchTerm(currentSearchInput);
      setCurrentSearchInput("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchTerm"></label>
      <input
        id="searchTerm"
        onChange={handleChange}
        placeholder="Search here"
        value={currentSearchInput}
        type="text"></input>
      <button className="search-button">Search</button>
    </form>
  );
}