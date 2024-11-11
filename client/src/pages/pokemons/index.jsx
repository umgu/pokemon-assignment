import React, { useEffect, useState } from 'react'
import { API_SERVICE } from '../../api';
import "./index.scss";
import Navbar from '../../components/navbar';
import PokemonCard from './PokemonCard';

const Pokemons = () => {
    const [pokemonsDetail, setPokemonsDetail] = useState({ data: [], next: "", total: 0 });

    useEffect(() => {
        API_SERVICE.get("/pokemon").then((res) => {
            const data = res.data;
            if (data) {
                setPokemonsDetail(data)
            }
        });
    }, []);

    function handleLoadMore(e) {
        e.preventDefault();
        API_SERVICE.get(pokemonsDetail.next).then((res) => {
            const data = res.data;
            if (data) {
                setPokemonsDetail({ ...pokemonsDetail, data: [...pokemonsDetail.data, ...data.data] })
            }
        });
    }

    return (
        <div id="pokemons-page">
            <Navbar />
            <div className='pokemon-container row'>
                {pokemonsDetail.data.map((pokemon) => {
                    return <PokemonCard detail={pokemon} key={pokemon.id} />
                })}
                <div>
                    {pokemonsDetail.next && <button
                        className='load-more-btn'
                        onClick={handleLoadMore}
                    >Load more
                    </button>}
                </div>
            </div>

        </div>
    )
}

export default Pokemons;
