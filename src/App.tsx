import { useEffect, useState } from "react";
import { SEARCH_STATE } from './assets/searchState';
import axios from 'axios';
import Loading from "./components/loading";
import Failure from "./components/failure";
import Pokemon from "./components/pokemon";
import Init from "./components/init";
import SearchForm from "./components/searchForm";
import Layout from "./components/layout";
import Card from "./components/card";
import { TypePokemon } from "./assets/types";

function App() {
  const [SearchQuery, setSearchQuery] = useState<string>('');
  const [SearchResult, setSearchResult] = useState<TypePokemon | null>(null);
  const [SearchState, setSearchState] = useState<string>(SEARCH_STATE.EMPTY);

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
      }
      catch (e) {
        console.error(e);
        setSearchState(SEARCH_STATE.FAILURE);
      }
    }
    fetchData();
  }, [SearchQuery]);

  return (
    <Layout>
      <SearchForm setSearchQuery={setSearchQuery} />
      <Card state={SearchState}>
        {SearchState === SEARCH_STATE.LOADING && <Loading />}
        {SearchState === SEARCH_STATE.FAILURE && <Failure />}
        {SearchState === SEARCH_STATE.SUCCESS && SearchResult && 
          <Pokemon data={SearchResult} />}
        {SearchState === SEARCH_STATE.EMPTY && <Init />}
      </Card>
    </Layout>
  )
}

export default App
