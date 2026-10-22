import React from 'react';

import Achievement from '../common/achievement';
import Section from '../common/section';
import { researchInfo } from '../../helpers/information';
import { communityInfo } from '../../helpers/information';

import Timeline from '../common/timeline';

const Community = () => {
  const { title, subtitle, items } = researchInfo;
  const { title: communityTitle, subtitle: communitySubtitle, items: communityItems } = communityInfo;

  return (
    <Section
      title={communityTitle}
      subtitle={communitySubtitle}
      content={<Timeline items={[...items, ...communityItems]} align="bottom" isEnd  />}
    />
  );
}

export default Community;
