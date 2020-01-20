import React from 'react';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import { aboutMeInfo } from '../../helpers/information';

const useStyles = makeStyles(theme => ({
  introContainer: {
    backgroundColor: theme.palette.grey.dark,
    padding: theme.spacing(8)
  },
  align: {
    [theme.breakpoints.up('lg')]: {
      textAlign: 'right'
    }
  },
  contentContainer: {
    backgroundColor: theme.palette.grey.main,
    padding: theme.spacing(8)
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  const { title, subtitle, content } = aboutMeInfo;

  return (
    <Grid container>
      <Grid item xs={12} lg={4} className={classes.introContainer}>
        <Typography variant="h3" className={classes.align}>{title}</Typography>
        <Typography variant="h6" className={classes.align}>{subtitle}</Typography>
      </Grid>
      <Grid item xs={12} lg={8} className={classes.contentContainer}>
        <Grid item container xs={12} lg={10}>
          <Typography variant="body1">
            {content}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
