import { FormEvent, useEffect, useState } from "react";
import { SEARCH_STATE } from './assets/searchState';
import axios from 'axios';
import Loading from "./components/loading";
import Failure from "./components/failure";
import Pokemon from "./components/pokemon";
import Empty from "./components/empty";

function App() {
  const [SearchQuery, setSearchQuery] = useState<string>('');
  const [SearchResult, setSearchResult] = useState<any | null>(null);
  const [SearchState, setSearchState] = useState<string>(SEARCH_STATE.INIT);

  useEffect(()=>{
    // empty input 처리
    if (!SearchQuery) {
      setSearchState(SEARCH_STATE.EMPTY);
      return;
    };

    // 데이터 호출
    const fetchData = async () => {
      try {
        setSearchState(SEARCH_STATE.LOADING);
        const API_URL = `https://pokeapi.co/api/v2/pokemon/${SearchQuery}`;
        const result = await axios.get(API_URL);
        result.data.image = result.data['sprites']['other']['official-artwork']['front_default'];
        setSearchResult(result.data);
        setSearchState(SEARCH_STATE.SUCCESS);

        console.log(result.data);
      }
      catch (e) {
        console.error(e);
        setSearchState(SEARCH_STATE.FAILURE);
      }
    }
    fetchData();
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
        {SearchState === SEARCH_STATE.LOADING && <Loading />}
        {SearchState === SEARCH_STATE.FAILURE && <Failure />}
        {SearchState === SEARCH_STATE.SUCCESS && <Pokemon data={SearchResult} />}
        {SearchState === SEARCH_STATE.EMPTY && <Empty />}
      </div>
    </div>
  )
}

export default App
