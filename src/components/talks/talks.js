import React from 'react';

import Achievement from '../common/achievement';
import Section from '../common/section';
import { talksInfo } from '../../helpers/information';

const Talks = () => {
  const { title, subtitle, talks } = talksInfo;

  return (
    <Section
      title={title}
      subtitle={subtitle}
      content={<Achievement items={talks} />}
    />
  );
}

export default Talks;
