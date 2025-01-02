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
  role: 'Senior Software Development Engineer'
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
    value: 'https://vivekc.xyz',
    displayName: 'vivekc.xyz'
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
      {'Highly accomplished Senior Software Development Engineer with 10 years of experience in Android, iOS, React Native development. Proven track record \
      of building and leading teams, delivering high-quality applications, and improving developer velocity. Expertise in Kotlin, Java, Swift, React Native and mobile-first architecture. \
      Passionate about building scalable, efficient, and user-friendly mobile experiences and contributing back to the developer community through public speaking and event organization.'}
    </>
  )
};

export const skillInfo = {
  title: 'Core Competence',
  subtitle: 'Somethings that I can do',
  skills: [
    {
      title: 'Android',
      value: 95
    },
    {
      title: 'Kotlin',
      value: 95
    },
    {
      title: 'Java',
      value: 95
    },
    {
      title: 'Web',
      value: 80
    },
    {
      title: 'CI/CD',
      value: 75
    },
    {
      title: 'iOS',
      value: 80
    },
    {
      title: 'React Native',
      value: 80
    }
  ]
};

export const techInfo = {
  title: 'Skills',
  subtitle: 'Sample of what I know',
  techs: [
    "Android Jetpack", "Compose", "Kotlin Multiplatform", "Retrofit",
    "Coroutines", "Reactive Programming", "WebRTC",
    "Functional Programming", "VCS", "Kotlin Multiplatform",
    "Glide", "Picasso", "SDK Development", "Google Services",
    "Mobile Security", "Team Management", "Event Management"
  ]
};

/*
Current/Updated Resume: A detailed current/updated resume indicating:  
Name and address of employers (not the client site if you were a contractor). 
Dates of employment (mm/dd/yyyy format). Detailed job description including a list of all responsibilities, 
specific projects on which you worked, and particular accomplishments you achieved. Post secondary education
 including dates of completion and degrees received. Please place particular emphasis on those aspects of your background 
 which especially qualify you to accept the planned U.S. assignment.
*/
export const experienceInfo = {
  title: 'Experience',
  subtitle: 'Places where I grew and helped grow',
  experiences: [
    {
      title: 'Amazon',
      subtitle: 'Sr. Software Development Engineer',
      caption: 'Seattle, WA, USA',
      duration: '08/31/2020 - present',
      content: (
        <>
          {'Currently working as Senior Software Development Engineer for '}<a style={styles.links} href="https://play.google.com/store/apps/details?id=com.amazon.clouddrive.photos">Amazon Photos</a>{'. '}
          <ul>
            <li>Lead cross-functional teams of Android, iOS, and React Native engineers to enhance the cross-platform infrastructure for <a style={styles.links} href="https://play.google.com/store/apps/details?id=com.amazon.clouddrive.photos">Amazon Photos</a>.</li>
            <li>Spearhead initiatives to resolve bottlenecks and optimize developer velocity by 60%, by creating shared frameworks and improving build infrastructure.</li>
            <li>Collaborate with product managers, designers, and backend developers to define and implement architectural designs.</li>
            <li>Design and develop scalable and performant mobile applications using Kotlin, Java, Swift, and TypeScript.</li>
            <li>Mentor other developers, facilitate agile development, conduct code reviews, and enforce coding and design standards across the organization.</li>
            <li>Implement best practices for memory management, performance optimization, and network communication.</li>
            <li>Create automation and workflows to monitor operational performance of the application.</li>
            <li>Drive processes using Amazon’s internal tools like the Brazil build system and Pipelines for CI/CD.</li>
            <li>Led the recruitment process for mobile developers, identifying and onboarding top talent.</li>
          </ul>
        </>
      ),
      shortContent: (
        <>
          <ul>
            <li>Lead cross-functional teams of Android, iOS, and React Native engineers to enhance the cross-platform infrastructure for <a style={styles.links} href="https://play.google.com/store/apps/details?id=com.amazon.clouddrive.photos">Amazon Photos</a>.</li>
            <li>Spearhead initiatives to resolve bottlenecks and optimize developer velocity by 60%, by creating shared frameworks and improving build infrastructure.</li>
            <li>Collaborate with product managers, designers, and backend developers to define and implement architectural designs.</li>
            <li>Design and develop scalable and performant mobile applications using Kotlin, Java, Swift, and TypeScript.</li>
            <li>Mentor other developers, facilitate agile development, conduct code reviews, and enforce coding and design standards across the organization.</li>
            <li>Implement best practices for memory management, performance optimization, and network communication.</li>
            <li>Create automation and workflows to monitor operational performance of the application.</li>
            <li>Drive processes using Amazon’s internal tools like the Brazil build system and Pipelines for CI/CD.</li>
            <li>Led the recruitment process for mobile developers, identifying and onboarding top talent.</li>
          </ul>
        </>
      )
    },
    {
      title: 'Freshworks Studio Inc. (Now EY Studios)',
      subtitle: 'Android Developer III',
      caption: 'Victoria, BC, Canada',
      duration: '02/01/2019 - 08/30/2020',
      content: (
        <>
          {'Delivered mobile solutions for clients ranging from government agencies to private enterprises.'}
          <ul>
            <li>Led the Android and iOS development and release of the <a style={styles.links} href="https://play.google.com/store/apps/details?id=ca.bc.gov.id.servicescard">BC Services Card</a> mobile app.</li>
            <li>Advocated and successfully delivered Kotlin Multiplatform as a viable cross-platform technology choice for <a style={styles.links} href="https://play.google.com/store/apps/details?id=ca.wearebcfs.students">BCFS Deals</a> app to share common business logic between iOS and Android apps.</li>
            <li>Conducted business analysis and formulated technology roadmaps tailored to client needs.</li>
            <li>Designed and implemented prototypes, data flow diagrams, and system models.</li>
            <li>Mentored team members to support their professional growth and career advancement.</li>
            <li>Combined technical and leadership roles to ensure successful project delivery.</li>
          </ul>
        </>
      ),
      shortContent: (
        <>
          <ul>
            <li>Delivered mobile solutions for clients ranging from government agencies to private enterprises.</li>
            <li>Led the Android and iOS development and release of the <a style={styles.links} href="https://play.google.com/store/apps/details?id=ca.bc.gov.id.servicescard">BC Services Card</a> mobile app.</li>
            <li>Advocated and successfully delivered Kotlin Multiplatform as a viable cross-platform technology choice for <a style={styles.links} href="https://play.google.com/store/apps/details?id=ca.wearebcfs.students">BCFS Deals</a> app to share common business logic between iOS and Android apps.</li>
            <li>Integrated Google Play Billing to enable subscriptions on <a style={styles.links} href="https://play.google.com/store/apps/details?id=com.sailingplan.sailingplan">SailingPlan</a> Android application, increasing revenue by 40%.</li>
            <li>Conducted business analysis and formulated technology roadmaps tailored to client needs.</li>
            <li>Created detailed technical design documents with data flow diagrams, system models and prototypes.</li>
            <li>Mentored team members to support their professional growth and career advancement.</li>
            <li>Combined technical and leadership roles to ensure successful project delivery.</li>
          </ul>
        </>
      )
    },
    {
      title: 'Zoho Corporation Pvt. Ltd.',
      subtitle: 'Member Technical Staff',
      caption: 'Chennai, TN, India',
      duration: '05/11/2015 - 01/18/2019',
      content: (
        <>
          {'Led the team of five engineers developing '}<a style={styles.links} href="https://play.google.com/store/apps/details?id=com.zoho.assist">Zoho Assist</a>{', '}<a style={styles.links} href="https://play.google.com/store/apps/details?id=com.zoho.assist.agent">Zoho Assist - Customer app</a>{' and '}<a style={styles.links} href="https://play.google.com/store/apps/details?id=com.zoho.meeting">Zoho Meeting</a>{' mobile apps, fostering collaboration and innovation'}
          <ul>
            <li>Led the team of five engineers developing <a style={styles.links} href="https://play.google.com/store/apps/details?id=com.zoho.assist">Zoho Assist</a>, <a style={styles.links} href="https://play.google.com/store/apps/details?id=com.zoho.assist.agent">Zoho Assist - Customer app</a> and <a style={styles.links} href="https://play.google.com/store/apps/details?id=com.zoho.meeting">Zoho Meeting</a> mobile apps, fostering collaboration and innovation.</li>
            <li>Designed user interfaces, data models, and workflows for mobile applications.</li>
            <li>Authored and maintained multi-module Java/Kotlin codebase for Android apps.</li>
            <li>Created an SDK to abstract native WebRTC framework, to be used across Zoho Workplace applications.</li>
            <li>Created an SDK to facilitate Remote Mobile Sharing functionality from Android device and shared it with enterprise customers to integrate within their applications.</li>
            <li>Proactively launched and facilitated monthly knowledge-sharing sessions to educate the team on cutting-edge mobile technologies and promote best practices.</li>
            <li>Published applications to app stores and managed their lifecycle.</li>
          </ul>
        </>
      ),
      shortContent: (
        <>
        <ul>
            <li>Led the team of five engineers developing <a style={styles.links} href="https://play.google.com/store/apps/details?id=com.zoho.assist">Zoho Assist</a>, <a style={styles.links} href="https://play.google.com/store/apps/details?id=com.zoho.assist.agent">Zoho Assist - Customer app</a> and <a style={styles.links} href="https://play.google.com/store/apps/details?id=com.zoho.meeting">Zoho Meeting</a> mobile apps, fostering collaboration and innovation.</li>
            <li>Designed user interfaces, data models, and workflows for mobile applications.</li>
            <li>Authored and maintained multi-module Java/Kotlin codebase for Android apps.</li>
            <li>Created an SDK to abstract native WebRTC framework, to be used across Zoho Workplace applications.</li>
            <li>Created an SDK to facilitate Remote Mobile Sharing functionality from Android device and shared it with enterprise customers to integrate within their applications.</li>
            <li>Proactively launched and facilitated monthly knowledge-sharing sessions to educate the team on cutting-edge mobile technologies and promote best practices.</li>
            <li>Published applications to app stores and managed their lifecycle.</li>
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
      title: 'R.M.K. Engineering College',
      subtitle: 'Bachelor of Engineering - CS',
      caption: 'Chennai, TN, India',
      duration: '08/01/2011 - 05/31/2015',
      content: (
        <>
          {`Completed Bachelors degree from Anna University affliated college.`}
          <ul>
            <li>Secured 8.94/10 CGPA and came out as a college topper.</li>
            <li>Secured 14th rank among all CS graduates from the University.</li>
            <li>Was elected President of CS department and conducted various inter college events.</li>
          </ul>
        </>
      ),
      shortContent: (
        <>
          {`Completed Bachelors degree from Anna University, Chennai, India affliated college.`}
          <ul>
            <li>8.94/10 CGPA, ranking in top 15 in the University.</li>
            <li>Was elected President of CS department and conducted various inter college events.</li>
          </ul>
        </>
      )
    },
  ]
};

export const awardInfo = {
  title: 'Certifications',
  subtitle: 'To prove I know a few things',
  awards: [
    {
      title: 'Associate Android Developer',
      content: 'Google | 2018'
    },
    {
      title: 'Business English Certification',
      content: 'University of Cambridge | 2013'
    },
    {
      title: 'Rational Application Developer',
      content: 'IBM | 2013'
    },
  ]
};

export const volunteerInfo = {
  title: 'Event Planning',
  subtitle: 'Love for Android even after work',
  events: [
    {
      title: 'droidcon India',
      content: 'Program Head'
    },
    {
      title: 'GDG Vancouver',
      content: 'Organizer'
    },
    {
      title: 'droidcon London 2017',
      content: 'Volunteer'
    },
  ]
};


export const talksInfo = {
  title: 'Public Speaking',
  subtitle: 'Times I went on stage',
  talks: [
    {
      title: 'droidcon SF 2018',
      content: 'Teaching Kotlin to Play well with Java'
    },
    {
      title: 'droidcon Vienna 2018',
      content: 'Teaching Kotlin to Play well with Java'
    },
    {
      title: 'droidcon SF 2019',
      content: 'Navigating Android like a Pro'
    },
  ]
};
