const projects = [
  {
    name: 'portfolio',
    desc: 'My first professional web development portfolio in which I showcase projects I\'m currently working on along with others I\'ve worked on in the past.',
    demo: require('../images/portfolio.gif'),
    site: 'https://kevtlw.github.io/',
    source: 'https://github.com/KevTLW/portfolio/',
    stack: ['React', 'Sass']
  },
  {
    name: 'RPI CMS 3.0',
    desc: 'CMS is the system utilized at Rensselaer Polytechnic Institute to organize student clubs, add students to clubs, create club mailing lists, and add new officers.',
    demo: require('../images/cms.png'),
    site: 'https://cms.union.rpi.edu/',
    source: null,
    stack: ['React', 'Django', 'PostgreSQL', 'jQuery', 'Bootstrap']
  },
  {
    name: 'MERN Boilerplate',
    desc: 'A simple full stack boilerplate application that includes authorization/authentication to quickly develop MERN stack applications.',
    demo: require('../images/mern.png'),
    site: 'https://github.com/KevTLW/MERN/',
    source: 'https://github.com/KevTLW/MERN/',
    stack: ['MongoDB', 'Express', 'React', 'NodeJS', 'Sass']
  }
];

export default projects;