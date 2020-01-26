import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import ProgressBar from '../common/progress-bar';
import Section from '../common/section';
import { skillInfo } from '../../helpers/information';

const useStyles = makeStyles(theme => ({
  skillContainer: {
    paddingBottom: theme.spacing(3)
  }
}));

const Skills = () => {
  const classes = useStyles();
  const { title, subtitle, skills } = skillInfo;

  return (
    <Section
      title={title}
      subtitle={subtitle}
      content={skills.map(skill => (
        <Grid item key={skill.title} xs={12} sm={6} className={classes.skillContainer}>
          <ProgressBar name={skill.title} value={skill.value} />
        </Grid>
      ))}
    />
  );
}

export default Skills;
