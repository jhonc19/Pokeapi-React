import React, { useContext } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import PeopleIcon from '@material-ui/icons/People';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import ListItemText from '@material-ui/core/ListItemText';

import { useStyles } from './Header.styles';
import StyleBadge from './StyleBadge';
import PokemonContext from './../../../context/Pokemon/PokemonContext';
import { Box } from '@material-ui/core';

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
