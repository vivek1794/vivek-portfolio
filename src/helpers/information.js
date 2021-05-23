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
  role: 'Senior Android Developer'
};

export const contactInfo = {
  title: 'Contact',
  subtitle: 'Call me, maybe',
  location: {
    title: 'Location',
    value: 'https://www.google.com/maps/place/Vancouver,+BC/@49.2576508,-123.2639868,11z/data=!3m1!4b1!4m5!3m4!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!8m2!3d49.2827291!4d-123.1207375',
    displayName: 'Vancouver, BC'
  },
  phone: {
    title: 'Phone',
    value: '+12364644566',
    displayName: '236.464.4566'
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
      {'Android developer and fanboy from Chennai, India. Currently lives in Canada. Loves to be caught \
        up with the latest gadgets and developments in Android arena. \
        Dabbles a bit with IoT and Web development when there is free time. \
        Loves to play with' } <pre style={styles.code}>&lt;div&gt;</pre> {'s when I am not spending time with the '}
        <pre style={styles.code}>&lt;ConstraintLayout&gt;</pre>
        {'. True believer in Sharing Knowledge. Writes tech blog when there is time and often goes\
         on stage to talk about Android.'}
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
      value: 90
    },
    {
      title: 'Java',
      value: 90
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
      title: 'iOS*',
      value: 30
    }
  ]
};

export const techInfo = {
  title: 'Skills',
  subtitle: 'Sample of what I know',
  techs: [
    "Retrofit","Coroutines","Reactive Programming","WebRTC",
    "Functional Programming","GIT","SVN","HG", "Kotlin Multiplatform",
    "Glide","Picasso","SDK Development","Google Services",
    "Mobile Security","Team Management","Event Management"
  ]
};

export const experienceInfo = {
  title: 'Experience',
  subtitle: 'Places where I grew and helped grow',
  experiences: [
    {
      title: 'Amazon Canada',
      subtitle: 'Software Development Engineer - Android Developer',
      caption: 'Vancouver, BC',
      duration: 'August 2020 - present',
      content: (
        <>
        {'Currently working on various interesting features for '}<a style={styles.links} href="https://play.google.com/store/apps/details?id=com.amazon.clouddrive.photos">Amazon Photos Android app</a>{'. '} 
        </>
      ),
      shortContent: (
        <>
        {'Currently working on various interesting features for '}<a style={styles.links} href="https://play.google.com/store/apps/details?id=com.amazon.clouddrive.photos">Amazon Photos Android app</a>{'. '} 
        </>
      )
    },
    {
      title: 'Freshworks Studio',
      subtitle: 'Android Developer',
      caption: 'Victoria, BC',
      duration: 'February 2019 - August 2020',
      content: (
        <>
        {'Worked on a number of mobile apps for FreshWorks Studio clients ranging from Provincial Government to Private organizations.'}
        <ul>
          <li>Worked as Android Developer for <a style={styles.links} href="https://play.google.com/store/apps/details?id=ca.bc.gov.id.servicescard">BC Services Card</a> mobile app.</li>
          <li>Created and maintained modular codebase with good unit test coverage.</li>
          <li>Implemented several security methods such as oAuth, JWT, KeyStore to protect data.</li>
          <li>Documented major changes and proof of concepts for discussion with product management.</li>
          <li>Architected Kotlin Multiplatform codebase for <a style={styles.links} href="https://play.google.com/store/apps/details?id=ca.wearebcfs.students">BCFS Deals</a> app to share common business logic between iOS and Android apps.</li>
          <li>Created and maintained <a style={styles.links} href="https://play.google.com/store/apps/details?id=com.sailingplan.sailingplan">Sailing Plan</a> mobile app using modern development practices.</li>
          <li>Mentored other Android developers on their career development plans and department goals.</li>
        </ul>
        </>
      ),
      shortContent: (
        <>
        {'Worked on a number of mobile apps for FreshWorks Studio clients ranging from Provincial Government to Private organizations.'}
        <ul>
          <li>Worked as Android Developer for <a style={styles.links} href="https://play.google.com/store/apps/details?id=ca.bc.gov.id.servicescard">BC Services Card</a> mobile app.</li>
          <li>Created and maintained modular codebase with good unit test coverage.</li>
          <li>Implemented several security methods such as oAuth, JWT, KeyStore to protect data.</li>
          <li>Documented major changes and proof of concepts for discussion with product management.</li>
          <li>Architected Kotlin Multiplatform codebase for <a style={styles.links} href="https://play.google.com/store/apps/details?id=ca.wearebcfs.students">BCFS Deals</a> app to share common business logic between iOS and Android apps.</li>
          <li>Created and maintained <a style={styles.links} href="https://play.google.com/store/apps/details?id=com.sailingplan.sailingplan">Sailing Plan</a> mobile app using modern development practices.</li>
          <li>Mentored other Android developers on their career development plans and department goals.</li>
        </ul>
        </>
      )
    },
    {
      title: 'Zoho Corporation pvt. Ltd.',
      subtitle: 'Android Developer & Mobile Lead',
      caption: 'Chennai, IN',
      duration: 'May 2015 - January 2019',
      content: (
        <>
  {'Worked on '}<a style={styles.links} href="https://play.google.com/store/apps/details?id=com.zoho.assist">Zoho Assist</a> 
  {' & '}<a style={styles.links} href="https://play.google.com/store/apps/details?id=com.zoho.meeting">Zoho Meeting</a> {'suite of mobile apps.'}
        <ul>
          <li>Was the Mobile Apps Tech Lead and lead a team of 5 Android and iOS developers.</li>
          <li>Created and mainted the Android application for Zoho Assist which is used for Remote Desktop sharing.</li>
          <li>Developed multi-modular codebase for Zoho Assist and Zoho Meeting.</li>
          <li>Created custom WebRTC SDK for Zoho Meeting over the native WebRTC SDK.</li>
          <li>Designed and architected the customer SDK for Zoho Assist mobile apps.</li>
          <li>Created the CI/CD pipeline for deployment of Zoho Assist SDK using Gitlab Runners.</li>
          <li>Worked on Automated testing bot and report generation using Spoon SDK, PHP, Bash and JS.</li>
          <li>Organized monthly meetups for the Android team to promote knowledge sharing.</li>
        </ul>
        </>
      ),
      shortContent: (
        <>
        {'Worked on '}<a style={styles.links} href="https://play.google.com/store/apps/details?id=com.zoho.assist">Zoho Assist</a> 
        {' & '}<a style={styles.links} href="https://play.google.com/store/apps/details?id=com.zoho.meeting">Zoho Meeting</a> {'suite of mobile apps.'}
              <ul>
                <li>Was the Mobile Apps Tech Lead and lead a team of 5 Android and iOS developers.</li>
                <li>Created and mainted the Android application for Zoho Assist which is used for Remote Desktop sharing.</li>
                <li>Developed multi-modular codebase for Zoho Assist and Zoho Meeting.</li>
                <li>Created custom WebRTC SDK for Zoho Meeting over the native WebRTC SDK.</li>
                <li>Designed and architected the customer SDK for Zoho Assist mobile apps.</li>
                <li>Created the CI/CD pipeline for deployment of Zoho Assist SDK using Gitlab Runners.</li>
                <li>Worked on Automated testing bot and report generation using Spoon SDK, PHP, Bash and JS.</li>
                <li>Organized monthly meetups for the Android team to promote knowledge sharing.</li>
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
      title: 'Anna University',
      subtitle: 'Bachelor of Engineering - CS',
      caption: 'Chennai, IN',
      duration: '2011 - 2015',
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
        {`Completed Bachelors degree from Anna University affliated college.`}
        <ul>
          <li>Secured 8.94/10 CGPA and came out as a college topper.</li>
          <li>Secured 14th rank among all CS graduates from the University.</li>
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
      title: 'Associate Android Developer - 2018',
      content: 'Google'
    },
    {
      title: 'Business English Certification - 2013',
      content: 'University of Cambridge'
    },
    {
      title: 'Rational Application Developer - 2013',
      content: 'IBM'
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
