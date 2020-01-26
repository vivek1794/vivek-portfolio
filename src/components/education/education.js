import React from 'react';

import Timeline from '../common/timeline';
import Section from '../common/section';
import { educationInfo } from '../../helpers/information';

const Education = () => {
  const { title, subtitle, educations } = educationInfo;

  return (
    <Section
      title={title}
      subtitle={subtitle}
      content={<Timeline items={educations} align="top" isEnd />}
      paddingTop
    />
  );
}

export default Education;
