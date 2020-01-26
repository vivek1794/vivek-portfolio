import React from 'react';

import Achievement from '../common/achievement';
import Section from '../common/section';
import { awardInfo } from '../../helpers/information';

const Awards = () => {
  const { title, subtitle, awards } = awardInfo;

  return (
    <Section
      title={title}
      subtitle={subtitle}
      content={<Achievement items={awards} />}
    />
  );
}

export default Awards;
