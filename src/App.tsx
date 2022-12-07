import { FormEvent, useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [SearchQuery, setSearchQuery] = useState<string>('');
  const [SearchResult, setSearchResult] = useState<any | null>(null);
  const [Loading, setLoading] = useState<string>('');

  useEffect(()=>{
    if (!SearchQuery) return;
    const fetchData = async () => {
      try {
        setLoading('loading');
        const API_URL = `https://pokeapi.co/api/v2/pokemon/${SearchQuery}`;
        const result = await axios.get(API_URL);
        setSearchResult(result.data);
        setLoading('success');
      }
      catch (e) {
        console.error(e);
        setLoading('failure');
      }
    }
    fetchData();

    console.log(SearchResult);
  }, [SearchQuery]);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(e.currentTarget.query.value);
  }

  return (
    <div>
      <h1>Pokemon Query</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="query">ID</label>
        <input type="text" name="query" id="query" />
        <button type="submit">search pokemon</button>
      </form>
      <div>
        {Loading === 'loading' && <p>Loading...</p>}
        {Loading === 'failure' && <p>failure!</p>}
        {Loading === 'success' && SearchResult && 
          <div>
            <img src={SearchResult['sprites']['other']['official-artwork']['front_default']} alt={SearchResult['name']} />
          </div>
        }
      </div>
    </div>
  )
}

export default App
