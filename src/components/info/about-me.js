import React from 'react';
import { Typography } from '@material-ui/core';
import { aboutMeInfo } from '../../helpers/information';
import Section from '../common/section';

const AboutMe = () => {
  const { title, subtitle, content } = aboutMeInfo;

  const sectionContent = (
    <Typography variant="body1">
      {content}
    </Typography>
  );

  return (
    <Section
      title={title}
      subtitle={subtitle}
      content={sectionContent}
    />
  );
}

export default AboutMe;
