import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [searchQuote, setSearchQuote] = useState(null);

  useEffect(() => {
    getQuoteFromAPI();
  }, []);

  const getQuoteFromAPI = async () => {
      const response = await fetch("https://api.quotable.io/random");
      const json = await response.json();
      setSearchQuote(json);
  };

  return (
    <div className="App">
      <div className="quoteContainer">
        {searchQuote && (
          <>
            <h2>{searchQuote.content}</h2>
            <p>- {searchQuote.author}</p>
          </>
        )}
        <button id="getNewQuote" onClick={getQuoteFromAPI}>Get New Quote</button>
      </div>
    </div>
  );
}

export default App;
