import React from "react";
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar">
        <Link to="/" className="logo">CCN</Link>
        <ul>
          <li>Home</li>
          <li>Topics</li>
          <li>Articles</li>
          <li>Users</li>
        </ul>
      </nav>
    )
}