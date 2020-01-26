import React from 'react';

import ContactInfo from '../info/contact-info';
import { contactInfo } from '../../helpers/information';
import Section from '../common/section';

const Contact = () => {
  const { title, subtitle } = contactInfo;

  return (
    <Section
      title={title}
      subtitle={subtitle}
      content={<ContactInfo />}
    />
  );
}

export default Contact;
