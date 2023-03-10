import React from "react";
import logo from '../images/logo.svg'
import SearchBar from "./SearchBar"
import "../styles/Navbar.css"

export default function Navbar () {
    return (
        <div className="Navbar-Container">
            <a href="http://localhost:3000"><img src={logo} alt="logo" width="225px"/></a>
            <SearchBar className="Navbar-Search"/>
        </div>
    )
}