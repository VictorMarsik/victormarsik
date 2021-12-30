import membershpe from './assets/membershpe.png';
import login from './assets/login.png';
import register from './assets/register.png';

import eCommerce from './assets/eCommerce.png';
import qa from './assets/q&a.png';
import theWorks from './assets/theWorks.png';

import bb3 from './assets/blackbox2.jpg';
import bb2 from './assets/blackbox4.JPG';
import bb1 from './assets/blackbox3.mp4';

import ewwb1 from './assets/ewb1.png'
import ewwb2 from './assets/ewb2.JPG'

const data = {
  name: 'Victor D. Marsik',
  introduction: "Hi! I'm an Electrical Engineer student based in Ottawa",
  education: {
    header: 'Education',
    body: [
      {
        college: 'University of Carleton. Department of Electrical and Computer Engineering',
        degree: ['Bachelor of Engineering - Electrical Engineering', <br />,
        'Minor - Computer Science',],
        year: 'Class of 2023 - Ottawa, Canada',
      },
    ],
  },
  work: {
    header: 'Work Experience',
    body: [
      {
        company: 'SigmaPoint Technologies Inc.',
        title: 'Project Manager Engineer Intern',
        link: 'https://www.sigmapoint.com/',
        description: [
          'Worked done for the X-Ray project ~(July 2020 to July 2021)',
        ],
      },
      {
        company: 'SigmaPoint Technologies Inc.',
        title: 'Quality Assurance Engineer Intern',
        link: 'https://optym.com/',
        description: [
          'Take work done from resume (only from April 2020 to July 2020 (PFMEA)',
        ],
      },
      {
        company: 'Health Canada',
        title: 'Consumer Product Safety Engineer Intern',
        link: 'https://www.canada.ca/en/health-canada.html',
        description: [
          'Worked done at Health Canada Summer 2019',
        ],
      },
    ],
  },
  skills: {
    header: 'Skills',
    list: [
      'Matlab',
      'Eagle CAD',
      'PSpice',
      'Arena Simulation',
      'AutoDesk CAD',
      'Creo CAD',
      'Xilinth Vivado',
      'HDL Design',
      'FPGA Programming',
      'Git',
      'Java',
      'C++',
      'Python',
      'C',
      'C#',
      'HTML',
      'CSS',
      'Bootstrap',
      'Machine Learning',
    ],
  },
  projects: {
    header: 'Projects',
    body: [
      {
        title: 'Bicycle Black Box',
        description:
          'What was done in the project? take from resume old groupchat',
        pictures: [bb2,bb3],
      },
      {
        title: 'Director of Kumvana Fellowship Project, Engineers Without Borders',
        description:
          'What is the project? What was done? take from old resumes',
        pictures: [ewwb1, ewwb2],
      },
    ],
  },
};

export default data;
