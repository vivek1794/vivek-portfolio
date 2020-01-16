import React from 'react';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  itemContainer: {
    display: 'flex',
    paddingRight: theme.spacing(6),
    paddingBottom: theme.spacing(3)
  },
  headerContainer: {
    marginBottom: theme.spacing(1)
  },
  line: {
    width: '60px',
    height: '4px',
    backgroundColor: '#E0A80D',
    marginBottom: theme.spacing(1)
  },
  title: {
    color: '#A4A5A6'
  },
  content: {
    color: '#979899'
  }
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
              <Typography className={classes.title}>{title}</Typography>
            </Grid>
            <Typography className={classes.content}>{content}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Achievement;
