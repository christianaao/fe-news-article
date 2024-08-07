import "../CSS/Header.css";
import React from "react";
import { NavBar } from "./NavBar";


export const Header = () => {
  return (
    <header>
      <title>CCN Community Connection News | Home</title>
      <h1>CCN</h1>
      <h2>Community Connection News</h2>
      <NavBar/>
    </header>
  );
};
