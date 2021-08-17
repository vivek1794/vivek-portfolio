import React from 'react';

import Achievement from '../common/achievement';
import Section from '../common/section';
import { volunteerInfo } from '../../helpers/information';

const Volunteer = () => {
  const { title, subtitle, events } = volunteerInfo;

  return (
    <Section
      title={title}
      subtitle={subtitle}
      content={<Achievement items={events} />}
    />
  );
}

export default Volunteer;
