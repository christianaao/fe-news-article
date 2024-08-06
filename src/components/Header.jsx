import "../styling/Header.css";
import React from "react";

export const Header = () => {
  return (
    <header>
      <title>CCN Community Connection News | Home</title>
      <h1>CCN</h1>
      <h2>Community Connection News</h2>
      <nav className="nav-link">
        <ul>
          <li>Home</li>
          <li>Topics</li>
          <li>Articles</li>
          <li>Users</li>
        </ul>
      </nav>
    </header>
  );
};
