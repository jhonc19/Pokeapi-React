import React, { useContext } from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';

import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined';

import useStyles from './CardPokemon.styles';
import PokemonContext from './../../../context/Pokemon/PokemonContext';
import { getIconByType, capitalizeString } from './../../../utils';

const CardPokemon = ({ pokemon }) => {
  const classes = useStyles();
  const { name, types, sprites } = pokemon;

  const pokemonContext = useContext(PokemonContext);
  const { favoriteList, updateFavorites } = pokemonContext;

  const heart = favoriteList.includes(pokemon.name) ? 'secondary' : 'default';

  const handleHeart = (e) => {
    e.preventDefault();

    updateFavorites(name);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {capitalizeString(name)}
          </Typography>
          <div className={classes.contentTypes}>
            {types.map(({ type }) => (
              <div key={type.name} className={classes.type}>
                {getIconByType(type.name)}
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  className={classes.spaceLeft}
                >
                  {capitalizeString(type.name)}
                </Typography>
              </div>
            ))}
          </div>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="favorite" color={heart} onClick={handleHeart}>
            <FavoriteOutlined />
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={sprites.front_default}
        title="Live from space album cover"
      />
    </Card>
  );
};

export default CardPokemon;
