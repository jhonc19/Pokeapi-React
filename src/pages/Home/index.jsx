import React, { useState } from 'react';

import Pagination from '@material-ui/lab/Pagination';

import Layout from '../../components/Layout';
import Buscar from '../../components/shared/Buscar';
import ListadoPokemon from '../../components/ListadoPokemon';
import useStyles from './Home.styles';

const Home = () => {
  const classes = useStyles();

  const [actualPage, setActualPage] = useState(0);

  const handleChange = (event, page) => {
    setTimeout(() => {
      setActualPage(page - 1);
    }, 750);
  };

  return (
    <Layout>
      <Buscar />
      <ListadoPokemon page={actualPage} />
      <Pagination
        count={70}
        color="primary"
        size="large"
        className={classes.navCenter}
        onChange={handleChange}
      />
    </Layout>
  );
};

export default Home;
