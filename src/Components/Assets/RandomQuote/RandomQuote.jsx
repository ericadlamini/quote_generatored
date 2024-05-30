import React from "react";
import "./RandomQuote.css";
import axios from "axios";

const randomQuote = () => {
  const options = {
    method: "GET",
    url: "https://famous-quotes4.p.rapidapi.com/random",
    params: {
      category: "all",
      count: "2",
    },
    headers: {
      "X-RapidAPI-Key": "eb3c468ee5mshd0031d052394ca8p122ba2jsn172afa24c6a3",
      "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
    },
  };

  axios
    .get("https://famous-quotes4.p.rapidapi.com/random", options)
    .then((response) => {
      console.log(response.data[0].text);
    })
    .catch((error) => {
      console.log(error);
    });
};

return;
<>
  <button onClick={randomQuote}>Refresh Quote</button>
</>;

export default randomQuote;
