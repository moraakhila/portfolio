import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With over 5 years of hands-on experience, I have honed my skills in front-end technologies like JavaScript, React, as well as back-end technologies like Java, Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT_1 = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. My journey in web development began with a deep curiosity for how things work, evolving into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. My commitment to continuous learning drives me to produce exceptional code and user experiences.
`;

export const ABOUT_TEXT_2 = `
I have experience working on a variety of projects, from simple websites to complex applications, and I excel in team settings where I can contribute to collective success. My portfolio showcases a range of projects that highlight my ability to seamlessly integrate front-end and back-end technologies. I am always eager to take on new challenges and stay updated with the latest industry trends and best practices.
`;

export const EXPERIENCES = [
  {
    year: "November 2022 - May 2024",
    role: "Research Assistant",
    company: "The University of Oklahoma",
    description: `Directed the collection and analysis of breath samples using cutting-edge technology operated by Breathonix,
    contributing to ongoing research on non-invasive diagnostic methods. Analyzed breath sample data using Python, achieving approximately 85% accuracy in extracting meaningful insights and patterns, informing further research directions and contributing to scientific publications.
    Designed a user-friendly website for the project, enabling participants to input their information and receive predictions based on breath sample data analysis, reducing prediction time by 70%. Collaborated with a diverse team to optimize breath sampling, ensuring data accuracy, and contributed to protocol development for participant recruitment and sample collection.`,
    technologies: ["Python", "Data Collection", "Data Analysis", "Research"],
  },
  {
    year: "December 2020 - July 2022",
    role: "Software Developer",
    company: "Wipro Technologies Private Limited",
    description: `Resolved 95% of client-reported bugs promptly and effectively, ensuring high levels of customer satisfaction and smooth operation of IBM Tririga applications. Generated around 20 user-friendly web pages and interfaces using Java, HTML, CSS, and JavaScript, enhancing usability and functionality within the IBM Tririga platform. Collaborated closely with team members to analyze requirements, design solutions, and implement enhancements, contributing to the continuous improvement of IBM Tririga software. Leveraged Java Persistence API (JPA) to design and implement data access layer for IBM Tririga applications, ensuring seamless integration with relational databases and efficient management of persistent data.
    `,
    technologies: ["Java", "Critical Thinking", "Probelm-Solving"],
  },
  {
    year: "November 2019 - November 2020",
    role: "Software Developer Intern",
    company: "Outshade Digital Media Pvt Ltd",
    description: `Demonstrated proficiency in React.js development, creating interactive and feature-rich components. Formulated RESTful web services using Spring Boot, enabling seamless communication between frontend and backend components by implementing CRUD operations for efficient data manipulation with the help of Spring JPA. Stayed updated with the latest web development trends and technologies, incorporating best practices into daily tasks to ensure modern and scalable solutions. Proven ability to effectively address technical challenges and foster a collaborative team environment.`,
    technologies: ["React", "Java", "Spring Boot"],
  },
  {
    year: "January 2019 - June 2019",
    role: "Web Developer",
    company: "Lakireddy Bali Reddy College of Engineering",
    description: `Contributed to team discussions and provided valuable insights into user interface requirements. Created a responsive and user-friendly website using HTML5, CSS3, and JavaScript, leading to a substantial increase in user engagement metrics. Conducted comprehensive testing and debugging across multiple browsers and devices, successfully resolving 90% of frontend issues pre-deployment.`,
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "Face Detection Full Stack Application",
    image: project1,
    description:
      "This responsive face detection app provides seamless user authentication with sign-in and registration options. After signing in, users can input an image URL to detect faces using the Clarifai API, with detected faces highlighted by a bounding box, and track the number of times they have checked for faces. This project showcases my skills in full-stack development, API integration, and responsive UI design.",
    technologies: ["HTML", "CSS", "React", "Node.js", "PostgreSQL"],
    url: "https://myproject-splj.onrender.com/",
    github: "https://github.com/moraakhila/smart-brain-frontend",
  },
  {
    title: "Robofriends App",
    image: project2,
    description:
      "The RoboFriends app is a simple React-based application that allows users to search for robots by their names through a dynamic search box. It fetches robo data from an external API and displays the results in a scrollable card list, updating in real-time as the search field is populated. This project showcases my ability to build responsive and interactive web applications.",
    technologies: ["HTML", "CSS", "React"],
    url: "https://moraakhila.github.io/robofriends/",
    github: "https://github.com/moraakhila/robofriends",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. It features a clean, responsive design that adapts seamlessly to various devices and screen sizes.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    url: "https://portfolio-akhila.vercel.app/",
    github: "https://github.com/moraakhila/portfolio",
  },
];

export const CONTACT = {
  address: "Grand Prairie, Texas",
  email: "morakhila99@gmail.com",
};
