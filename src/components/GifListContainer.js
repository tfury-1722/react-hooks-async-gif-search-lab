import React from "react";
import {useEffect, useState} from "react"; 
import GifList from "./GifList"
import GifSearch from "./GifSearch"


const API_KEY = "=dc6zaTOxFJmzC&rating=g"
const URL = "https://api.giphy.com/v1/gifs/search?q="

const [searchQuery, setSearchQuery] = useState("")
const [choices, setChoices] = useState([])

function handleSubmit(event) {
    event.preventDefault();
    setSearchQuery(searchQuery + [event.target.value])
}

const GifListContainer = () => {

    useEffect(() => {
        fetch(`URL+${searchQuery}+&api_key=${API_KEY}`)
        .then(r => r.json())
        .then(data => console.log(data))
    }, [searchQuery])

    return (
        <article>
            <GifList/>
            <GifSearch onClick={handleSubmit}/>
        </article>
    )
}

export default GifListContainer;
