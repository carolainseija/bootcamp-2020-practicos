import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
      Pricing
    </Typography>
    <Typography variant="h5" align="center" color="textSecondary" component="p">
      Quickly build an effective pricing table for your potential customers with this layout.
      It&apos;s built with default Material-UI components with little customization.
    </Typography>
  </Container>
  );
}