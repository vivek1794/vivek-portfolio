import React from 'react';

import Timeline from '../common/timeline';
import { experienceInfo } from '../../helpers/information';
import Section from '../common/section';

const Experience = () => {
  const { title, subtitle, experiences } = experienceInfo;

  return (
    <Section
      title={title}
      subtitle={subtitle}
      content={<Timeline items={experiences} align="bottom" />}
      paddingBottom
    />
  );
}

export default Experience;
