import React, { useEffect, useState } from 'react';
import { List } from '../List/List';

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
  const [currentData, setCurrentData] = useState(
      [
        { 
          id: 1,
          name: "",
          species: "",
          image: "",
        }
    ]);

  const URL = 'https://rickandmortyapi.com/api/character';
  
  const FetchApi=()=> {    
    fetch(URL)
    .then(response=>response.json())
    .then(data=>{
      setData(data.results)
      setCurrentData(data.results)
    })
  }
  useEffect(() => {
    FetchApi();
  }, []);

  function callback(value) {
    console.log("" + value -1)
    if (value  == -1) {
      setCurrentData(data)
    }else{
      setCurrentData([data[value-1]])
    }
  }


  return (
    <main>
     
     <select 
        onChange={e => callback(e.target.value)}>
            <option value="-1">Todos</option>
            {data.map((item) => (
            <option value={item.id}>{item.name}</option>
      ))}
    </select>

    <List data={currentData}/>
      
    </main>
  )
}