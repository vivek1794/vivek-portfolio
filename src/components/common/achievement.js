import React from 'react';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  itemContainer: {
    display: 'block',
    paddingRight: theme.spacing(6),
    paddingBottom: theme.spacing(3)
  },
  headerContainer: {
    marginBottom: theme.spacing(1)
  },
  line: {
    width: '60px',
    height: '4px',
    backgroundColor: theme.palette.green.main,
    marginBottom: theme.spacing(1)
  },
}));

const Achievement = ({ items }) => {
  const classes = useStyles();

  return (
    <Grid container>
      {items.map(item => {
        const { title, content } = item;

        return (
          <Grid item key={title} container xs={12} sm={4} className={classes.itemContainer}>
            <Grid item className={classes.headerContainer}>
              <Grid item className={classes.line} />
              <Typography variant="h5">{title}</Typography>
            </Grid>
            <Typography variant="body1">{content}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Achievement;
