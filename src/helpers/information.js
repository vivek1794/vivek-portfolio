import React from 'react';

const styles = {
  text: {
    fontSize: '20px'
  },
  code: {
    display: 'inline'
  },
  links: {
    textDecoration: 'none',
    color: '#3DDC84',
    fontWeight: 'bold'
  }
};

export const myInfo = {
  firstName: 'Vivek',
  lastName: 'Chanddru',
  role: 'Senior Staff Engineer - Mobile'
};

export const contactInfo = {
  title: 'Contact',
  subtitle: 'Call me, maybe',
  location: {
    title: 'Location',
    value: 'https://maps.app.goo.gl/d2esoo36Dt15NDtU9',
    displayName: 'Seattle, WA'
  },
  phone: {
    title: 'Phone',
    value: '+14254039678',
    displayName: '425.403.9678'
  },
  website: {
    title: 'Web',
    value: 'https://vivekc.me',
    displayName: 'vivekc.me'
  },
  blog: {
    title: 'Blog',
    value: 'https://medium.com/adventurous-android',
    displayName: 'Adventurous Android'
  },
  email: {
    title: 'Email',
    value: 'vivek.chanddru@gmail.com'
  }
};

export const socialLinksInfo = {
  facebook: 'https://fb.com/vivek1794',
  linkedIn: 'https://www.linkedin.com/in/vivek1794/',
  twitter: 'https://twitter.com/Vivek_chanddru'
};

export const aboutMeInfo = {
  title: 'About me',
  subtitle: 'Just a little bit',
  content: (
    <>
      {'Strategic Mobile Leader with over a decade of experience leading teams and setting technical vision for mobile applications serving tens of millions of users. Proven track record of leading large-scale cross-functional initiatives, delivering high-quality applications, and improving developer velocity. Expertise in designing performant and secure mobile applications and SDKs, Agentic development, cross-platform development and mentorship.'}
    </>
  )
};

export const techInfo = {
  title: 'Skills',
  subtitle: 'Sample of what I know',
  techs: [
    "Android", "iOS", "Kotlin", "Java", "Swift", "React Native", "Kotlin Multiplatform",
    "Android Jetpack", "Compose", "WebRTC", "Coroutines",
    "SDK Development", "Mobile Security"
  ]
};

export const experienceInfo = {
  title: 'Experience',
  subtitle: 'Places where I grew and helped grow',
  experiences: [
    {
      title: 'PayPal / Venmo',
      subtitle: 'Senior Staff Software Development Engineer',
      caption: 'Seattle, WA',
      duration: '03/2026 – Present',
      content: (
        <>
          <ul>
            <li>Lead mobile architecture for <b>Pay with Venmo</b> and <b>Venmo Commerce</b>, ensuring robust, scalable technical foundations for an organization of 100 engineers across 6 teams.</li>
            <li>Automate complex investigation workflows by leveraging Claude to create sharable contexts and skills, equipped with deep codebase knowledge and capabilities to query the BigQuery schema via MCP, <b>reducing time to RCA issues by 30%</b>.</li>
            <li>Successfully <b>increased</b> the PwV <b>conversion rate by 2%</b> within the first 3 months by identifying drop-offs and implementing targeted technical optimizations.</li>
            <li>Mentor Technical Leads across the Commerce organization and established a weekly leads sync to facilitate knowledge sharing, raise the bar on code quality, and standardize architectural patterns.</li>
            <li>Serve as a core member of the Mobile Leadership group, taking responsibility for the overall code quality of the Venmo mobile application and spearheading AI adoption strategies across the engineering lifecycle.</li>
          </ul>
        </>
      )
    },
    {
      title: 'Amazon',
      subtitle: 'Senior Software Development Engineer',
      caption: 'Seattle, WA',
      duration: '08/2020 – 03/2026',
      content: (
        <>
          <ul>
            <li>Set the technical vision and direction for the <b>30+ person mobile engineering organization</b> (Android, iOS, React Native) at <a style={styles.links} href="https://play.google.com/store/apps/details?id=com.amazon.clouddrive.photos&pli=1">Amazon Photos</a>, actively mentoring senior engineers.</li>
            <li>Influenced the <b>engineering roadmap for a 300+ person org</b> as a designated <b>technical 'bar raiser,</b>' partnering with Director, VP, and SVP-level leadership to deliver strategic goals.</li>
            <li>Led the architectural modernization of the <a style={styles.links} href="https://play.google.com/store/apps/details?id=com.amazon.clouddrive.photos&pli=1">Amazon Photos</a> Android app, rewriting a decade-old codebase into a scalable multi-module architecture, resulting in a <b>50% crash rate reduction</b>.</li>
            <li>Spearheaded a critical cross-platform infrastructure initiative, <b>securing director-level buy-in</b>. Led the new team to <b>improve developer velocity by ~60%</b>, reduce build times by 30%, and cut release-related issues by 40%.</li>
            <li>Architected revenue-critical features using React Native, solving complex performance bottlenecks and ensuring eventual consistency for in-app purchases, <b>increasing mobile plan sales by ~10%</b>.</li>
            <li>Pioneered the integration of a <b>conversational GenAI</b> feature on Alexa+, allowing users to launch photo slideshows via voice commands by converging LLM inference with the Model Context Protocol (MCP).</li>
          </ul>
        </>
      )
    },
    {
      title: 'Freshworks Studio Inc. (Now EY Studios)',
      subtitle: 'Android Developer III',
      caption: 'Victoria, BC',
      duration: '02/2019 – 08/2020',
      content: (
        <>
          <ul>
            <li>Architected the mobile infrastructure (Android/iOS) for <b>North America's first remote video identity verification system</b> (<a style={styles.links} href="https://play.google.com/store/apps/details?id=ca.bc.gov.id.servicescard">BC Services Card</a>), securing sensitive government data for over 2 million residents.</li>
            <li>Championed the <b>adoption of Kotlin Multiplatform</b>, securing C-suite approval (CEO, CTO) to standardize cross-platform architecture and <b>influence technical direction</b> across all new client projects.</li>
          </ul>
        </>
      )
    },
    {
      title: 'Zoho Corporation Pvt. Ltd.',
      subtitle: 'Member Technical Staff',
      caption: 'Chennai, TN, India',
      duration: '05/2015 – 01/2019',
      content: (
        <>
          <ul>
            <li>Architected the flagship <a style={styles.links} href="https://play.google.com/store/apps/details?id=com.zoho.assist">Zoho Assist</a> and <a style={styles.links} href="https://play.google.com/store/apps/details?id=com.zoho.meeting">Zoho Meeting</a> applications from scratch, leading a 5-engineer team and designing custom low-latency algorithms for remote screen scaling.</li>
            <li>Drove the mobile real-time communication strategy by delivering a foundational WebRTC SDK, handling low-level video/audio encoding to eliminate duplicated engineering effort across multiple high-traffic Zoho applications.</li>
          </ul>
        </>
      )
    },
  ]
};

export const educationInfo = {
  title: 'Education',
  subtitle: 'Where it all began',
  educations: [
    {
      title: 'R.M.K. Engineering College (Anna University)',
      subtitle: 'Bachelor of Engineering in Computer Science',
      caption: 'Chennai, TN, India',
      duration: '08/2011 - 05/2015',
      content: (
        <>
          <ul>
            <li>CGPA: 8.94/10, Ranked 14th out of 19,000+ university students</li>
          </ul>
        </>
      )
    },
  ]
};

export const researchInfo = {
  title: 'Patents & Authored Works',
  subtitle: 'Innovative contributions',
  items: [
    {
      title: 'Pending Patent',
      duration: '2026',
      content: (
        <>System and Method for Real-Time Multimodal Cognitive State Synchronization for Adaptive Computing – <a style={styles.links} href="https://patents.google.com/patent/CA3277979A1/">CA3277979A1</a></>
      )
    },
    {
      title: 'Technical Author',
      duration: '2016-Present',
      content: (
        <>Authored a widely-cited series of articles on <a style={styles.links} href="https://medium.com/adventurous-android/getting-started-with-webrtc-for-android-daab1e268ff4">WebRTC for Android</a>, contributing to the community's knowledge base with over 300,000 lifetime views.</>
      )
    },
    {
      title: 'Research Publications',
      duration: '2015-Present',
      content: (
        <>Authored and published <a style={styles.links} href="https://www.researchgate.net/profile/Vivek-Chanddru">7 research papers</a> across international journals related to mobile application optimization and innovations.</>
      )
    }
  ]
};

export const communityInfo = {
  title: 'Public Speaking & Community',
  subtitle: 'Sharing the knowledge',
  items: [
    {
      title: 'International Speaker',
      duration: '2018 - Present',
      content: (
        <>{`Addressed audiences on Kotlin-Java interoperability and Jetpack Navigation at droidcon San Francisco (2018, 2019) and droidcon Vienna (2018).`}</>
      )
    },
    {
      title: 'Community Organizer',
      duration: '2017 - Present',
      content: (
        <>{`Program Head for droidcon India (2019, 500+ attendees), Program Committee - droidcon India (2025, 2026)`}</>
      )
    }
  ]
};
