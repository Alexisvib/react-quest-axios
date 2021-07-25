import './App.css';
import React from "react";
import DisplayQuote from "./components/DisplayQuote";
import axios from 'axios';

function App() {
    const initQuote = {
        character: "Waylon Smithers",
        characterDirection: "Left",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FWaylonSmithers.png?1497567511840",
        quote: "I think women and seamen don't mix"
    }

    const [quoteChar, setQuoteChar] = React.useState(initQuote);
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
    return (
    <div className="App">
        <button type="button" onClick={getQuote}>Get another quote</button>
      <DisplayQuote quoteChar={quoteChar} />
    </div>
  );
}

export default App;
