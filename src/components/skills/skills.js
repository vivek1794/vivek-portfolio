import React from 'react';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import ProgressBar from '../common/progress-bar';
import { skillInfo } from '../../helpers/information';

const useStyles = makeStyles(theme => ({
  introContainer: {
    backgroundColor: '#2b2c2c',
    padding: theme.spacing(8)
  },
  align: {
    [theme.breakpoints.up('lg')]: {
      textAlign: 'right'
    }
  },
  contentContainer: {
    backgroundColor: '#2d2e2e',
    padding: theme.spacing(8)
  },
  skillContainer: {
    paddingBottom: theme.spacing(3)
  }
}));

const Skills = () => {
  const classes = useStyles();
  const { title, subtitle, skills } = skillInfo;

  return (
    <Grid container>

      <Grid item xs={12} lg={4} className={classes.introContainer}>
        <Typography variant="h3" className={classes.align}>{title}</Typography>
        <Typography variant="h6" className={classes.align}>{subtitle}</Typography>
      </Grid>

      <Grid item container xs={12} lg={8} className={classes.contentContainer}>
        {skills.map(skill => (
          <Grid item xs={12} sm={6} className={classes.skillContainer}>
            <ProgressBar name={skill.title} value={skill.value} />
          </Grid>
        ))}
      </Grid>

    </Grid>
  );
}

export default Skills;
