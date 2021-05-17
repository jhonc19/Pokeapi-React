import React from 'react';
import { Typography, Box } from '@material-ui/core';
const Footer = () => {
  return (
    <>
      <Box pt={2} p={2} bgcolor="primary.main" color="info.contrastText">
        <Typography variant="body2" align="center">
          {'Copyright © Jhon Choque ' + new Date().getFullYear()}
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
