import React from "react";

export default function SearchBar () {
    return (
        <div>
            <form>
                <input type="text" placeholder="Search york.ac.uk" />
                <button type="submit"><i className="a"/></button>
                {/* I want to put one of those magnifying images as the submit button */}
            </form>
        </div>
    )
}