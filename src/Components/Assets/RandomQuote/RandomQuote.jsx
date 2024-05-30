import React from "react";
import "./RandomQuote.css";
import axios from "axios";

const RandomQuote = () => {
  const newQuote = () => {
    axios
      .get("https://api.forismatic.com/api/1.0/?")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return;
  <></>;
};

export default RandomQuote;
