import './App.css';
import React from "react";
import DisplayQuote from "./components/DisplayQuote";
import axios from 'axios';

function App() {
    const getQuote = () => {
        // Send the request
        axios
            .get('https://simpsons-quotes-api.herokuapp.com/quotes')
            // Extract the DATA from the received response
            .then((response) => response.data)
            // Use this data to update the state

            .then((data) => {
                setQuoteChar(data[0]);
            });
    };
    const [quoteChar, setQuoteChar] = React.useState(getQuote);
    console.log(getQuote());
    return (
    <div className="App">
        <button type="button" onClick={getQuote}>Get another quote</button>
      <DisplayQuote quoteChar={quoteChar} />
    </div>
  );
}

export default App;
