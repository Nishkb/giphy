import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiKey = "4zAxQA26s1TWqifZlk1haOUF8up1wB6I";
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${"4zAxQA26s1TWqifZlk1haOUF8up1wB6I"}&q=${query}`
    );
    setGifs(res.data.data);
  };

  return (
    <>
    <header>
         <h1>React Giphy Searchbox</h1>
    </header>
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {gifs.map((gif) => (
        <img src={gif.images.original.url} alt={gif.title} key={gif.id} />
      ))}
    </div>
    </>
  );
}

export default SearchBar;

