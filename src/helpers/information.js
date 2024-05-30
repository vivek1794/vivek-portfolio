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
  role: 'Software Development Engineer III'
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
    value: '++1454039678',
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
      {'Mobile developer and fanboy from Chennai, India who now calls Seattle, Washington as home. \
        Dabbles a bit with IoT and Web development when there is free time. \
        Loves to play with' } <pre style={styles.code}>&lt;div&gt;</pre> {'s when I am not spending time with the '}
        <pre style={styles.code}>&lt;ConstraintLayout&gt;</pre>
        {'. Cross-platform enthusiast. True believer in Sharing Knowledge. Writes tech blog when there is time and often goes\
         on stage to talk about Android/Mobile.'}
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
      value: 60
    },
    {
      title: 'React Native',
      value: 60
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
      caption: 'Seattle, WA',
      duration: '08/31/2020 - present',
      content: (
        <>
        {'Currently working as Senior Software Development Engineer for '}<a style={styles.links} href="https://play.google.com/store/apps/details?id=com.amazon.clouddrive.photos">Amazon Photos</a>{'. '} 
        <ul>
          <li>Leading a team of Android, iOS and React Native engineers to facilitate better cross-platform infrastructure and foundations.</li>
          <li>Responsible for identifying bottlenecks and developer velocity improvements in mobile cross-platform area, plan, propose and lead the team to deliver the projects. </li>
        <li>Collaborate with cross-functional teams, including product managers, designers, and backend developers, to understand and create functional and non-functional requirements and design application architecture.</li>
        <li>Develop efficient and reliable Mobile applications using Java, Kotlin, TypeScript or Swift.</li>
<li>Implement best practices for performance optimization, memory management, and network communication to ensure smooth and responsive user experiences.</li>
<li>Conduct thorough testing and debugging of applications to identify and resolve issues, ensuring high-quality software delivery.</li>
<li>Introduce coding standards to be followed and participate in code reviews to ensure code quality, maintainability, and adherence to coding standards.</li>
<li>Mentor junior developers, providing guidance and support in career development.</li>
<li>Collaborate with teammates using version control systems like Git, ensuring seamless code integration and collaboration.</li>
<li>Utilize issue tracking and project management tools (e.g., Jira) to track progress, prioritize tasks, and communicate effectively within the team.</li>
<li>Lead end-to-end lifecycle of development of software by multiple engineers including but not limited to discovery, planning, conception, design, implementation, documentation and maintenance.</li>
<li>Reviewing software design from other engineers and providing feedback on architectural issues, performance and implementation constraints. </li>
<li>Set up and maintain build automation processes using internal Amazon tools like Brazil build system and Pipelines to enable continuous integration and deployment.</li>
        </ul>
        </>
      ),
      shortContent: (
        <>
        {'Currently working as Senior Software Development Engineer for '}<a style={styles.links} href="https://play.google.com/store/apps/details?id=com.amazon.clouddrive.photos">Amazon Photos</a>{'. '} 
        <ul>
        <li>Leading a team of Android, iOS and React Native engineers to facilitate better cross-platform infrastructure and foundations.</li>
          <li>Responsible for identifying bottlenecks and developer velocity improvements in mobile cross-platform area, plan, propose and lead the team to deliver the projects. </li>
        <li>Collaborate with cross-functional teams, including product managers, designers, and backend developers, to understand and create functional and non-functional requirements and design application architecture.</li>
<li>Develop efficient and reliable Mobile applications using Java, Kotlin, TypeScript or Swift.</li>
<li>Implement best practices for performance optimization, memory management, and network communication to ensure smooth and responsive user experiences.</li>
<li>Conduct thorough testing and debugging of applications to identify and resolve issues, ensuring high-quality software delivery.</li>
<li>Introduce coding standards to be followed and participate in code reviews to ensure code quality, maintainability, and adherence to coding standards.</li>
<li>Mentor junior developers, providing guidance and support in career development.</li>
<li>Collaborate with teammates using version control systems like Git, ensuring seamless code integration and collaboration.</li>
<li>Utilize issue tracking and project management tools (e.g., Jira) to track progress, prioritize tasks, and communicate effectively within the team.</li>
<li>Lead end-to-end lifecycle of development of software by multiple engineers including but not limited to discovery, planning, conception, design, implementation, documentation and maintenance.</li>
<li>Reviewing software design from other engineers and providing feedback on architectural issues, performance and implementation constraints. </li>
<li>Set up and maintain build automation processes using internal Amazon tools like Brazil build system and Pipelines to enable continuous integration and deployment.</li>
        </ul>
        </>
      )
    },
    {
      title: 'Freshworks Studio Inc.',
      subtitle: 'Android Developer III',
      caption: 'Victoria, BC',
      duration: '02/01/2019 - 08/30/2020',
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
<li>Analyzed business problems of clients and help formulate technology roadmap</li>
<li>Identified and proposed technology solutions viable to the client needs.</li>
<li>Collaborated with other app development experts and address business, technical, and logical needs</li>
<li>Generated interface designs, prototypes, data flow diagrams, and system models.</li>
<li>Created test plans, test scripts, and conducted system testing.</li>
<li>Participated in app development, deployment, and migration.</li>
<li>Prepared technical documents and other required functional specifications.</li>
<li>Mentored and managed mobile team members to enable their career growth and advancement. </li>
<li>Managed the delivery of BC Services Card mobile app product through various development cycles in addition to working as a developer. </li>
<li>Responsible for android and iOS mobile app development and was also managing the project as a Project Manager. </li>
        </ul>
        </>
      )
    },
    {
      title: 'Zoho Corporation Pvt. Ltd.',
      subtitle: 'Member Technical Staff',
      caption: 'Chennai, IN',
      duration: '05/11/2015 - 01/18/2019',
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
<li>Analyzed the requirements and arrive at a proper plan for the development.</li>
<li>Identified the proper tools and technologies required to accomplish the tasks </li>
<li>Collaborated with the other developers in the organization to complete the tasks.</li>
<li>Worked on the User Interface designs, data model and data flow designs. </li>
<li>Wrote and maintained the Java/Kotlin code for Android applications.</li>
<li>Wrote test cases and test scripts for various scenarios of the mobile application.</li>
<li>Created and maintained documentations for various frameworks and processes. </li>
<li>Managed a team of 5 Android and iOS engineers and helped them develop mobile applications.</li>
<li>Trained the Customer Support technicians to identify, fix and inform the end users about the issues. </li>
<li>Researched new technologies and tools which could improve productivity and shared it with other developers in the team.</li>
<li>Helped in deployment of the application to various app stores. </li>
<li>Mentor fellow developers on Android development skills.</li>
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
      caption: 'Chennai, IN',
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
        {`Completed Bachelors degree from Anna University, Chennai India affliated college.`}
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
