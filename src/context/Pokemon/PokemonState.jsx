import React, { useReducer } from 'react';
import axios from 'axios';
import PokemonContext from './PokemonContext';
import PokemonReducer from './PokemonReducer';

const PokemonState = (props) => {
  const initialState = {
    pokemonList: [],
    favoriteList: [],
    pokemon: {},
    notFound: false,
    search: false,
  };

  const getPokemons = async (offset = 0, limit = 16) => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );

      const { results } = data;

      const promises = results.map(async ({ url }) => {
        const { data } = await axios.get(url);
        return data;
      });

      const pokemonList = await Promise.all(promises);

      dispatch({
        type: 'GET_POKEMONS',
        payload: pokemonList,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getFavorites = () => {
    let favoriteList;

    window.localStorage.getItem('favorite_pokemon') !== null
      ? (favoriteList = JSON.parse(window.localStorage.getItem('favorite_pokemon')))
      : (favoriteList = []);

    dispatch({
      type: 'SET_FAVORITE',
      payload: favoriteList,
    });
  };

  const searchPokemon = async (namePokemon) => {
    try {
      setSearch(true);
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
      );

      setNotFound(false);

      dispatch({
        type: 'GET_POKEMON',
        payload: data,
      });
    } catch (error) {
      setNotFound(true);
      console.log(error);
    }
  };

  const clearPokemon = () => {
    setNotFound(false);
    setSearch(false);

    dispatch({
      type: 'GET_POKEMON',
      payload: {},
    });
  };

  const clearPokemons = () => {
    dispatch({
      type: 'GET_POKEMONS',
      payload: [],
    });
  };

  const setNotFound = (found) => {
    const valueFound = Boolean(found);

    dispatch({
      type: 'SET_FOUND',
      payload: valueFound,
    });
  };

  const setSearch = (search) => {
    const valuesearch = Boolean(search);

    dispatch({
      type: 'SET_SEARCH',
      payload: valuesearch,
    });
  };

  const updateFavorites = (namePokemon) => {
    let favoriteList;

    window.localStorage.getItem('favorite_pokemon') !== null
      ? (favoriteList = JSON.parse(window.localStorage.getItem('favorite_pokemon')))
      : (favoriteList = []);

    const isFavorite = favoriteList.indexOf(namePokemon);

    isFavorite >= 0
      ? favoriteList.splice(isFavorite, 1)
      : favoriteList.push(namePokemon);

    window.localStorage.setItem(
      'favorite_pokemon',
      JSON.stringify(favoriteList)
    );

    dispatch({
      type: 'SET_FAVORITE',
      payload: favoriteList,
    });
  };

  const getPokemon = async (url) => {
    try {
      const { data } = await axios.get(url);

      dispatch({
        type: 'GET_POKEMON',
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  return (
    <PokemonContext.Provider
      value={{
        pokemonList: state.pokemonList,
        pokemon: state.pokemon,
        favoriteList: state.favoriteList,
        updateFavorites,
        getFavorites,
        getPokemons,
        getPokemon,
        searchPokemon,
        clearPokemon,
        notFound: state.notFound,
        search: state.search,
        clearPokemons,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
