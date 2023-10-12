// import React, { useState } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    const options = {
      method: "GET",
      url: "https://healthruwords.p.rapidapi.com/v1/quotes/",
      params: {
        id: "731",
        size: "medium",
        maxR: "1",
        t: "Wisdom",
      },
      headers: {
        "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
        "X-RapidAPI-Host": "healthruwords.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const randomQuote = response.data[0].media;
      setQuote(randomQuote);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={fetchQuote}>Get Random Quote</button>
      {quote && <p>{quote}</p>}
    </div>
  );
};

export default App;
