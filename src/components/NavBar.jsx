import React from "react";
import "../CSS/Links.css"
import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar">
          <NavLink to="/" className="nav-link logo">CCN</NavLink>
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/articles" className="nav-link">Articles</NavLink>
          <NavLink to="/topics" className="nav-link">Topics</NavLink>
          <NavLink to="/users" className="nav-link login">My Account</NavLink>
      </nav>
    )
}