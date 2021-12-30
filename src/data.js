import membershpe from './assets/membershpe.png';
import login from './assets/login.png';
import register from './assets/register.png';

import eCommerce from './assets/eCommerce.png';
import qa from './assets/q&a.png';
import theWorks from './assets/theWorks.png';

import img from './assets/img.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';

const data = {
  name: 'Victor D. Marsik',
  introduction: "Hi! I'm an Electrical Engineer student based in Ottawa",
  education: {
    header: 'Education',
    body: [
      {
        college: 'University of Florida, College of Liberal Arts and Sciences',
        degree: 'Bachelor of Science - Computer Science',
        year: 'Class of 2020 - Gainesville, Florida',
      },
    ],
  },
  work: {
    header: 'Work Experience',
    body: [
      {
        company: 'American Express',
        title: 'Engineer III',
        link: 'https://www.americanexpress.com/',
        description: [
          'Worked on multiple features and bug fixes for the non-card lending organization & the international card applications using Javascript, React, NodeJS',
          'Completed code refactors in different codebases in order to improve code quality and reduce redundant code',
          'Contributed to innovation features to improve some technical aspects of our applications',
          'Developed testing suites for the front-end and back-end, involving unit test and automation scripts to ensure code reliability using Jest, Webdriver.io, Selenium, Cucumber',
          'Deployed applications to production environments by utilizing the CI/CD pipeline',
          'Acted temporarily as Scrum Master while still holding my engineeting responsabilties, leading Agile ceremonies and team planning, and collaborating with Product Owner and Tech Lead',
          'Proficient in QA responsibilities such as manual testing, automation testing and regression testing, following SDET model of development and testing',
          'Participated in Hackathons and innovation events',
        ],
      },
      {
        company: 'Optym',
        title: 'Software Engineer Intern',
        link: 'https://optym.com/',
        description: [
          'Designed, implemented, tested, and delivered a data visualization web app for Optym using Python and React',
          'Interacted with the Microsoft SQL server, created the backend API using Flask, and created the User Interface',
          'Learned how to start and complete a complex project from scratch, working alongside my mentor fully understanding the business aspect of the application and its impact for the client',
        ],
      },
      {
        company: 'American Express',
        title: 'Software Engineer Intern',
        link: 'https://www.americanexpress.com/',
        description: [
          'Worked on an internal application of American Express in the LETT team, composed of 10 other full-time employees, under the Marketing Insights & Technology',
          'Developed in the front-end of the web application using React, and interacted with the API',
          'Developed multiple tests in the Java back-end using the TestNG testing framework',
        ],
      },
      {
        company: 'Booz Allen Hamilton',
        title: 'Technical Analyst',
        link: 'https://www.boozallen.com/',
        description: [
          'Worked within a multidisciplinary team of 6 to plan, design, and develop an internal use program using business machine learning and data mining with python and multiple libraries, including Scikit-Learn, and Selenium',
          'Developed both the front and back end of the application, to ultimately help increase the efficiency of the partnering process',
        ],
      },
    ],
  },
  skills: {
    header: 'Skills',
    list: [
      'Javascript',
      'ReactJS',
      'React Native',
      'JEST',
      'Selenium',
      'Git',
      'Java',
      'C++',
      'Python',
      'Express.js',
      'NodeJS',
      'GraphQL',
      'SQL',
      'Flask',
      'Django',
      'Angular.js',
      'HTML',
      'CSS',
      'Bootstrap',
      'Semantic UI',
      'Machine Learning',
      'TestNG',
      'Agile/Scrum Development',
    ],
  },
  projects: {
    header: 'Projects',
    body: [
      {
        title: 'MemberShpe',
        description:
          'Lead a team of SHPE students to design and create a functional web application for the club. We used the application to keep track of all the members, including a point/award system, attendance and many other features.',
        pictures: [membershpe, register, login],
      },
      {
        title: 'Canvas By Karen eCommerce',
        description:
          'Created an eCommerce application for the selling of custom shoes and clothing desings for a freelance artist.',
        pictures: [eCommerce, qa, theWorks],
      },
      {
        title: 'News Mobile App',
        description:
          'Created a news mobile app for learning purposes. Used React Native, and a free API to obtain the latest news data',
        pictures: [img, img1, img2, img3, img4],
      },
    ],
  },
};

export default data;
