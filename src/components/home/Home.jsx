import React, { useEffect, useState } from 'react';
import { List } from '../List/List';
import { Selector } from '../Select/Selector';

export const Home = () => {

  const [data, setData] = useState(
    [
      { 
        id: 1,
        name: "",
        species: "",
        image: "",
      }
    ]);

  const URL = 'https://rickandmortyapi.com/api/character';
  //const dataResponse = data
  const FetchApi=()=> {    
    fetch(URL)
    .then(response=>response.json())
    .then(data=>setData(data.results))
  }
  useEffect(() => {
    FetchApi();
  }, []);

  function handleSelectorChange(evt) {
    console.log("a")
  }

  return (
    <main>
      <Selector data={data} onchange={handleSelectorChange()}/>
      <List data={data}/>
    </main>
  )
}