import { useState } from 'react';
import styled from 'styled-components';

const FormWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  form{
    position: relative;
    filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.05));
  }
`;

const SearchInput = styled.input`
  width: 150px;
  height: 36px;
  padding: 0 10px;
  position: relative;
  z-index: 2;
  outline: none;
  border: 1px solid #bbb;
  border-radius: 18px;
  font-size: 14px;
  box-shadow: rgba(0,0,0,0.1) 2px 2px 1px inset;
  cursor: text;

  &:focus+label,&.on+label{
    transform: translateY(-50%);
    background-color: #fff;
    border: 1px solid #bbb;
    border-radius: 5px;
    font-size: 11px;
    color: #000;
    line-height: 1;
  }
`;

const SearchLabel = styled.label`
  padding: 2px 5px;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 18px;
  font-size: 14px;
  line-height: 32px;
  color: #999;
  transition: 0.3s;
  cursor: text;
`;

const SearchButton = styled.button`
  height: 36px;
  margin-left: -36px;
  padding: 0 20px 0 46px;
  outline: none;
  background-color: #eaeaea;
  border: 1px solid #bbb;
  border-radius: 18px;
  font-size: 16px;
  box-shadow: rgba(0,0,0,0.1) 0 -2px 1px inset;
  cursor: pointer;
`;

function SearchForm({ handleSearch }: {handleSearch: (e: React.FormEvent<HTMLFormElement>) => void}) {
  const [InputValue, setInputValuse] = useState('');
  
  return (
    <FormWrap>
      <form onSubmit={handleSearch}>
        <SearchInput type="search" name="query" id="query" 
          onInput={(e)=>setInputValuse(e.currentTarget.value)}
          value={InputValue}
          className={InputValue ? 'on' : undefined}
        />
        <SearchLabel htmlFor="query">Pokemon ID</SearchLabel>
        <SearchButton type="submit">search</SearchButton>
      </form>
    </FormWrap>
  )
}

export default SearchForm;