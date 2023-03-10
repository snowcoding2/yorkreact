import React from "react";
import DropdownButton from "./DropdownButton";
import '../styles/Header.css';

export default function Header () {
    return (
        <div className="Header">
            <DropdownButton className="Header-Item" name="Staff and students" options={["Staff homepage", "Student homepage"]}/>
            <DropdownButton className="Header-Item" name="A-Zs" options={["Undergraduate courses", "Postgraduate courses"]}/>
            <a className="Header-Item" href="https://jobs.york.ac.uk/">Jobs</a>
            <a className="Header-Item" href="https://york.ac.uk/alumni/">Alumni</a>
            <a className="Header-Item" href="https://www.york.ac.uk/global/city-college-europe-campus/">Europe Campus</a>
        </div>
    )
}