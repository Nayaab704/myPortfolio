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
  meta,
  dbms,
  tesla,
  starbucks,
  carrent,
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
    title: "Unreal Engine Developer",
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
    title: "Software Engineer",
    company_name: "Virginia Tech Transport Institute",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "The project focuses on developing an AI-integrated Autonomous Driving Truck to advance autonomous vehicle technology, I am creating simulations for a Remote Driver and Remote Assistant, enabling seamless testing and operational control. ",
      "Designed and rigged a high-fidelity truck model in Blender and integrated it into Unreal Engine 5.4.4.",
      "Configured the vehicle physics in Unreal Engine using C++ & Blueprint to make the truck drivable for participant testing.",
      "Imported driving environments using Roadrunner plugins and imported them into Unreal Engine.",
      "Integrated Vive Focus 3 headset to enable remote truck operation and would utilize MATLAB for data analysis."
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Virginia Tech",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "This research focuses on developing a mobile app (Android/iOS) to address social isolation among older adults.",
      "Co-developing a cross-platform mobile app using React Native Expo.",
      "Built a backend with Typescript, Express, Prisma & MongoDB, using Redis for caching and GraphQL for data queries. ",
      "Integrated Socket.IO for real-time messaging, AWS S3 to store any files & CloudFront to access the files in S3. ",
      "Utilizing FlatList for lazy loading, pagination to split the message data for efficiency, and JWT for login. ",
      "As part of next steps, incorporating NLP with TensorFlow and Hugging Face for advanced search and recommendation.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Etihad",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Dec 2022",
    points: [
      "The project involved developing applications to integrate systems by transferring and transforming various message types.",
      "I developed a new adapter for cabin baggage for the Etihad Airline & Abu Dhabi Airport , using IIB ACE and ESQL to transform incoming XML data into JSON format.",
      "Additionally, I implemented logic to store the JSON data in MySQL databases using inline queries, configured Jenkins pipelines to automate the test, build, and deployment processes, ensuring a seamless CI/CD workflow",
      "Published the transformed producer sent messages to its respective consumers through a pub-sub messaging model.",
      "I worked within an Agile methodology, utilizing JIRA for ticket tracking and efficiently resolving issues during sprint cycles. ",
      
    ],
  },
  
  {
    title: "Full Stack Java Intern",
    company_name: "Cognizant",
    icon: CTSH_BIG,
    iconBg: "#E6DEDD",
    date: "Apr 2021 - Aug 2021",
    points: [
      "Trained in Java, Spring Boot, and Spring Hibernate to gain expertise in full-stack web development.",
      "Developed a book-selling e-commerce website during the internship, implementing functionality using Java and Spring Boot and managing data storage with JDBC. Learned to structure Maven projects and implemented logic using JSP, Servlets, multithreading, RESTful APIs, JDBC, and Spring Hibernate.",
      "Trained in Docker to understand containerization for deploying web applications as part of a microservices architecture.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Tata Steel",
    icon: tatasteel,
    iconBg: "#E6DEDD",
    date: "May 2018 - July 2018",
    points: [
      "Developed a machine learning based solution for quality inspection of steel sheets in the coating department.",
      "Used TensorFlow, OpenCV, and Keras for implementing image processing techniques to detect surface defects.",
      "Automated defect detection, categorizing steel sheets as Defects or No Defects, reducing manual inspection efforts. ",
     
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
    name: "Video Sharing Chat App",
    description:
      " An asynchronous mobile app (Android/iOS) to address social isolation among older adults.",
    tags: [
      {
        name: "React Native Expo",
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
    image: carrent,
    source_code_link:
      "https://github.com/Nayaab704/IceBreak.git",
    demo_link: "https://github.com/Nayaab704/IceBreak.git",
  },

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
      "https://github.com/Nayaab704/PeerMe",
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
