import React from 'react';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

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

  return (
    <Grid container>
      <Grid item xs={12} lg={4} className={classes.introContainer}>
        <Typography variant="h3" className={classes.align}>INTRO</Typography>
        <Typography variant="h6" className={classes.align}>What I am all about</Typography>
      </Grid>
      <Grid item xs={12} lg={8} className={classes.contentContainer}>
        <Grid item container xs={12} lg={10}>
          <Typography variant="body1">
            {"Android developer and fanboy from Chennai, India. Loves to be caught \
              up with the latest gadgets and developments in Android arena. Dabbles\
              a bit with IoT and Web development when there is free time. Loves to \
              play with <div>s when I am not playing with the <ConstraintLayout>"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
