import React from "react";

const GifSearch = ({handleSubmit}) => {
    return (
        <form>
            <label htmlFor={"search-text"}/>
            <input type={"text"} id={"search-text"} placeholder={"Type here to search"}></input>
            <button type={"submit"} onSubmit={handleSubmit}>ENTER</button>
        </form>
    )
}

export default GifSearch;