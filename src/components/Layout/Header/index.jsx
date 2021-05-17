import React, { useContext } from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@material-ui/core';

import {
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  People as PeopleIcon,
  FavoriteOutlined as FavoriteOutlinedIcon,
} from '@material-ui/icons';

import clsx from 'clsx';

import PokemonContext from './../../../context/Pokemon/PokemonContext';
import StyleBadge from './StyleBadge';
import { useStyles } from './Header.styles';

const Header = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const pokemonContext = useContext(PokemonContext);
  const { favoriteList } = pokemonContext;

  const handleDrawer = (value) => {
    setOpen(Boolean(value));
  };
  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawer(true)}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display="flex"
            flexGrow={1}
            alignItems="center"
            flexDirection="column"
          >
            <img
              src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
              alt="pokeapi"
              className={classes.headerImage}
            />
          </Box>
          <StyleBadge badgeContent={favoriteList.length}>
            <FavoriteOutlinedIcon color="secondary" fontSize="large" />
          </StyleBadge>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={() => handleDrawer(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Listado Pokemon" />
            </ListItem>
          </div>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
