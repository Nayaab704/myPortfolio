import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  myportfolio,
  clothshop,
  peerme,
  CTSH_BIG,
  tatasteel,
  dbms,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IIB ACE Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "DBMS",
    icon: dbms,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "IIB ACE Developer",
    company_name: "Cognizant",
    icon: CTSH_BIG,
    iconBg: "#383E56",
    date: "Aril 2021 - Dec 2022",
    points: [
      "Integration development and support using the IBM ACE tool.",
      "Implementing adaptor's code for different data types.",
      "Transforming the data received from the Producer and sending it to respective consumers through pub-sub model",
      "Maintaining Database for different Airines data which include aircraft/fleet/pax/bag/resource info.",
      
    ],
  },
  {
    title: "React Developer",
    company_name: "Cognizant",
    icon: CTSH_BIG,
    iconBg: "#E6DEDD",
    date: "April 2021 - Dec 2022",
    points: [
      "Leveraged React, JavaScript, HTML5, CSS3, and Bootstrap to craft dynamic web applications.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and optimising the code based on the constructive feedback from senior developers.",
    ],
  },
  {
    title: "Java Web Developer",
    company_name: "Cognizant",
    icon: CTSH_BIG,
    iconBg: "#383E56",
    date: "April 2021 - Dec 2022",
    points: [
      "Led a team of 5 developers in building a scalable e-commerce platform using Java 11, Spring Boot, and Hibernate ORM.",
      "Utilized Java's Concurrency API to implement multithreading for batch processing jobs, reducing processing times by over 60%.",
      "Engaged in bi-weekly code reviews, championing best practices and mentored 300+ GENC's.",
      "Optimized SQL queries and redesigned database schema, resulting in a 40% improvement in query execution times.",
    ],
  },
  {
    title: "SAP Intern",
    company_name: "Tata Steel",
    icon: tatasteel,
    iconBg: "#E6DEDD",
    date: "May 2018 - July 2018",
    points: [
      "Designed a project that seamlessly connected various departments, eliminating the need for manual intervention, while also maintaining a comprehensive record of the quantity of steel rods in transit and prepared for the melting process.",
     
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Nayaab worked really great as a mentor and provided great help to 300+ GENC's in IIB ACE tool.",
    name: "G Preetha",
    designation: "Senior HR",
    company: "Cognizant",
    image: "https://media.licdn.com/dms/image/D4D35AQEvaBss3G7fLg/profile-framedphoto-shrink_400_400/0/1655390077142?e=1698361200&v=beta&t=WVMtFCFpjJhgGZmi5I3v6oLR-XXhoRZBNY3ExiNEIoc",
  },
  {
    testimonial:
      "One thing I really appriciate that she is a quick learner to understand such a tightly coupled system.",
    name: "Jerly K George",
    designation: "IBM Integration Developer",
    company: "Cognizant",
    image: "https://media.licdn.com/dms/image/D5603AQH_7Q6pO1RaZA/profile-displayphoto-shrink_400_400/0/1671738414447?e=1703116800&v=beta&t=4ATBPHEkyssD38ZQ3fAK9YvSpqP9R3Hj0he5OZvrU_M",
  },
  {
    testimonial:
      "She was in my team and contributed a lot to our project for different adaptors",
    name: "Mohammed Faris P Y",
    designation: "Senior IBM Integration Developer",
    company: "Cognizant",
    image: "https://media.licdn.com/dms/image/C5603AQEnmp5c14LPyw/profile-displayphoto-shrink_400_400/0/1587560282290?e=1703116800&v=beta&t=xtrIWM6QM3UScQOcKqod8EE5O9lDO139zEzJkzG2FNg",
  },
];

const projects = [
  {
    name: "Match-Making platform",
    description:
      "A peer-programmer website facilitating matches based on coding preferences, allowing users to connect & collaborate.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: peerme,
    source_code_link:
      "https://github.com/Nayaab704/Nexas.git",
    demo_link: "https://match-platform.vercel.app/",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Cloth Shopify",
    description:
      "Designed and developed a website that allows user to view, add, and navigate through different products.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "pink-text-gradient",
      },
    ],
    image: clothshop,
    source_code_link:
      "https://github.com/Nayaab704/clothing-shop-main.git",
    demo_link: "https://frabjous-phoenix-c053c4.netlify.app/",
  },
  {
    name: "My Portfolio",
    description:
      "Deveoped my own 3D Portfolio using Next JS Three JS and Tailwind CSS to show up my skills and projects.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: myportfolio,
    source_code_link:
      "https://github.com/Nayaab704/myPortfolio.git",
    demo_link: "https://nayaab-portfolio.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
