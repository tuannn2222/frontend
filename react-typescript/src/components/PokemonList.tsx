import React, { useEffect, useState } from 'react';
import { Detail } from '../interface';
import "./pokemon.css";
interface Props {
    id: number,
    name: string,
    image: string
    abilities: {
        name:string,
        ability:string
    }[] | undefined ,
    viewDetail: Detail,
    setDetail: React.Dispatch<React.SetStateAction<Detail>>
}
const PokemonList:React.FC<Props> = (props) => {
    const {id, name, image,abilities,viewDetail,setDetail} = props;
    const [isSelected,setSelected]  = useState(false)
    useEffect(() => {
        setSelected(id === viewDetail?.id)
    },[viewDetail])
    const closeDetail = () => {
        setDetail({
            id: 0,
            isOpened: false
        })
    }
    return (
        <div className="">
            {isSelected ? 
            (
                <section className="pokemon-list-detailed">
                    <div className="detail-container">
                        <p className="detail-close" onClick={closeDetail}>
                            X
                        </p>
                        <div className="detail-info">
                            <img src={image} alt="pokemon" className="detail-img" />
                            <p className="detail-name">{name}</p>
                        </div>
                        <div className="detail-skill">
                            <p className="detail-ability">Abilities:</p>
                            {abilities?.map((ab: any) => {
                                return (
                                    <div className="">
                                        {ab.ability.name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            ) : (
                <section className="pokemon-list-container">
                    <p className='pokemon-name'>{name}</p>
                    <img src= {image} alt="pokemon" />
                </section>
            )}
        </div>
    );
};

export default PokemonList
