import { type } from 'os';
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PokemonCollections from './components/PokemonCollections';
import { Detail, Pokemon } from './interface';

interface Pokemons {
  name: string,
  url: string
}





const App:React.FC = () =>{

  const [pokemons,setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl,setNexUrl]  = useState<string>("")
  const [loading,setLoading] = useState<boolean>(true);
  const [viewDetail, setDetail] = useState<Detail>({
    id:0,
    isOpened: false
  })
  
  useEffect(() => {
  
    const getPokemon =async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20");
      setNexUrl(res.data.next);
      res.data.results.forEach(async(pokemon:Pokemons) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        setPokemons( p => [...p,poke.data] );
        setLoading(false);
      });
    }

    getPokemon();
  },[])


  const nextPage = async () => {
    setLoading(true)
    let res = await axios.get(nextUrl);
    setNexUrl(res.data.next)
    res.data.results.forEach(async (pokemon:Pokemons) => {
      const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      setPokemons((p) => [...p,poke.data])
      setLoading(false)
    });
  }


  return (
    <>
    <div className="App">
        <div className="container">
          <header className='pokemon-header'>Pokemon</header>
          <PokemonCollections 
          pokemons = {pokemons}
          viewDetail={viewDetail}
          setDetail={setDetail}
          />
          <div className="btn">
              <button onClick={nextPage}>{loading ? "Loading..." : "Load More"}</button>
          </div>
        </div>
    </div>
    </>  
  );
}

export default App;
