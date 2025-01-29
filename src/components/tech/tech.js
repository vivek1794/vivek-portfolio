import React from 'react';
import { makeStyles } from '@material-ui/core';

import Section from '../common/section';
import { techInfo } from '../../helpers/information';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  chip: {
    margin: '8px 8px 8px 0',
    height: 24
  }
}));

const Tech = () => {
  const classes = useStyles();
  const { title, subtitle, techs } = techInfo;

  return (
    <Section
      title={title}
      subtitle={subtitle}
      content={techs.map(tech => (
        <Chip label={tech} classes={{ root: classes.chip }} variant="outlined"/>
      ))}
    />
  );
}

export default Tech;
