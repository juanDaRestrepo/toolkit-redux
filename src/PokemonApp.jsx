

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './Redux/store/slices/pokemon';

export const PokemonApp = () => {

  const {pokemons, isLoading , page} = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getPokemons() );
  }, [])
  
  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <p>is loading?{isLoading? 'true': 'false'}</p>
        <ul>
            {
              pokemons.map(({name, url}, index) => 
              <li key={index}>{name} </li>
            )}
        </ul>

        <button
          onClick={() => dispatch( getPokemons(page)) }
          disabled={isLoading}
        >
          next
        </button>
    </>
  )
}
