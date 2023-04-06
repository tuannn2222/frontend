import React from 'react'
import { Detail, Pokemon, PokemonDetail } from '../interface'
import PokemonList from './PokemonList';
import "./pokemon.css";

interface Props {
    pokemons: PokemonDetail[];
    viewDetail: Detail
    setDetail: React.Dispatch<React.SetStateAction<Detail>>
}



const PokemonCollections:React.FC<Props> = (props) => {

    const {pokemons,viewDetail,setDetail} = props

    const selectPokemon = ( id: number) => {
        if (!viewDetail.isOpened){        
            setDetail({
                id: id,
                isOpened: true
            })
        }
    }

    return (
        <>
            <section className={viewDetail.isOpened? "collection-container-active":"collection-container"}>
                {viewDetail.isOpened ? (
                    <div className="overlay">

                    </div>
                ) : (
                    <div className="">

                    </div>
                )}
                {pokemons.map((pokemon) =>{
                    return (
                        <div onClick={() => selectPokemon(pokemon.id)} key = {pokemon.id}>
                            <PokemonList 
                                viewDetail = {viewDetail}
                                setDetail = {setDetail}
                                name = {pokemon.name}
                                id = {pokemon.id}
                                image = {pokemon.sprites.front_default}
                                abilities ={pokemon.abilities}
                            />
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default PokemonCollections
