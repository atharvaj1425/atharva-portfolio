import {
  mobile,
  backend,
  creator,
  web,
  cpp,
  javascript,
  typescript,
  express,
  expressjs,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,

  // gpai,
  // dlrs,
  // uber,
  // hdp,
  // nourishai,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];


const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    // {
    //   name: "TypeScript",
    //   icon: "/assets/tech/typescript.svg",
    //   link: "https://www.typescriptlang.org/",
    // },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    // {
    //   name: "C++",
    //   icon: cpp2,
    //   link: "https://en.cppreference.com/w/",
    // },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com//",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Django",
      icon: "/assets/tech/django.svg",
      link: "https://django.com/",
    },
    {
      name: "Flask",
      icon: "/assets/tech/flask.svg",
      link: "https://flask.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    // {
    //   name: "Three.js",
    //   icon: "/assets/tech/three.png",
    //   link: "https://threejs.org",
    // },
    // {
    //   name: "Framer",
    //   icon: "/assets/tech/framer.svg",
    //   link: "https://www.framer.com/motion/",
    // },
    {
      name: "Auth",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    }
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Gitlab",
      icon: "/assets/tech/gitlab.svg",
      link: "https://gitlab.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    // {
    //   name: "Figma",
    //   icon: "/assets/tech/figma.svg",
    //   link: "https://www.figma.com/",
    // },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    // {
    //   name: "Yarn",
    //   icon: "/assets/tech/yarn.svg",
    //   link: "https://yarnpkg.com/",
    // },
    {
      name: "Vite",
      icon: "/assets/tech/vite.svg",
      link: "https://yarnpkg.com/",
    },
  ],
  databases: [
    {
      name: "Postgres",
      icon: "/assets/tech/postgresql.svg",
      link: "https://www.postgres.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
  ],
};

const experiences = 
// [
//   {
//     title: "Lead Developer Intern",
//     company_name: "KothariTech Pvt Ltd",
//     // icon: kotharitech, // You might need to provide this icon or adjust accordingly
//     iconBg: "#383E56",
//     date: "June 2024 - August 2024",
//     points: [
//       "Developed a production-ready website using React and Redux within a month with Vercel and GitLab CI/CD.",
//       "Integrated and displayed API data on the frontend, ensuring seamless communication with the backend.",
//       "Coordinated with developer interns to ensure smooth project execution and timely delivery."
//     ],
//   },
//   {
//     title: "Web Development Intern",
//     company_name: "Cognifyz Technologies",
//     // icon: cognifyz, // Adjust accordingly for the icon
//     iconBg: "#E6DEDD",
//     date: "March 2024 - April 2024",
//     points: [
//       "Contributed to multiple projects as a frontend developer, including creation of landing pages.",
//       "Leveraged expertise in CSS and JavaScript to develop visually appealing and responsive UIs.",
//       "Demonstrated strong problem-solving skills and attention to detail in UI development and project execution."
//     ],
//   },
// ];
[
  {
    "title": "Finalist - Backend Developer",
    "company_name": "Smart India Hackathon 2024",
    "iconBg": "#383E56",
    "date": "Nov 2024 - Dec 2024",
    "points": [
      "Developed the backend for 'Green Post AI' using Django, integrating AI-powered image processing for cleanliness monitoring.",
      "Implemented role-based access control and integrated Cloudinary for storing and analyzing CCTV images with Google Gemini API.",
      "Designed MySQL schemas for geolocation-based monitoring and automated compliance alerts using AI models."
    ]
  },
  {
    "title": "Tech Web Head",
    "company_name": "IEEE VIT",
    "iconBg": "#E6DEDD",
    "date": "Jun 2024 - Present",
    "points": [
      "Led website maintenance and enhancement efforts for IEEE VIT, ensuring optimal functionality and user experience.",
      "Managed GitHub repositories, streamlining team collaboration and project development.",
      "Optimized web performance and implemented new features to improve engagement and accessibility."
    ]
  }
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

import { nourishai, gpai, dlrs, hdp, uber } from "../assets";
const projects = [
  {
    name: "Food Waste Management System",
    description:
      "A web app connecting restaurants, volunteers, NGOs, and individuals to minimize food waste by redistributing surplus food. AI-based tracking suggests optimized food production levels.",
    tags: [
      {
        name: "mern-stack",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
    ],
    image: nourishai, // Replace with your actual image variable
    source_code_link: "https://github.com/atharvaj1425/odoo-hack", // Add actual link
  },
  {
    name: "Green Post AI (SIH Finalist)",
    description:
      "An AI-powered system for monitoring cleanliness in post offices, integrating Google Gemini API for image analysis, role-based access, and automated compliance alerts.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "ai-image-processing",
        color: "pink-text-gradient",
      }
    ],
    image: gpai, // Replace with your actual image variable
    source_code_link: "https://github.com/atharvaj1425/gpai_app", // Add actual link
  },
  {
    name: "Heart Disease Prediction System",
    description:
      "A Django-based machine learning app predicting heart disease using KNN, Random Forest, Decision Tree, and Logistic Regression, with confidence level visualization.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "data-visualization",
        color: "pink-text-gradient",
      }
    ],
    image: hdp, // Replace with your actual image variable
    source_code_link: "https://github.com/atharvaj1425/Heart-Disease-Prediction", // Add actual link
  },
  {
    name: "Uber Clone",
    description:
      "A real-time ride-booking app built with the MERN stack, featuring live tracking, dynamic ride matching, and seamless user experience.",
    tags: [
      {
        name: "mern-stack",
        color: "blue-text-gradient",
      },
      {
        name: "websockets",
        color: "green-text-gradient",
      },
      {
        name: "real-time-tracking",
        color: "pink-text-gradient",
      }
    ],
    image: uber, // Replace with your actual image variable
    source_code_link: "https://github.com/atharvaj1425/uber-clone-mern", // Add actual link
  },
  {
    name: "Daily Lecture Record System",
    description:
      "A Django-based system enabling faculty to log lectures, HODs to monitor progress, and admins to manage academic schedules efficiently.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "role-based-access",
        color: "green-text-gradient",
      },
      {
        name: "database-management",
        color: "pink-text-gradient",
      }
    ],
    image: dlrs, // Replace with your actual image variable
    source_code_link: "https://github.com/atharvaj1425/Daily-Lecture-Record-System", // Add actual link
  }
];



export { services, technologies, experiences, testimonials, projects };
