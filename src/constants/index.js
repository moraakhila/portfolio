import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like JavaScript, React, as well as back-end technologies like Node.js, Java, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT_1 = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. My journey in web development began with a deep curiosity for how things work, evolving into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. My commitment to continuous learning drives me to produce exceptional code and user experiences.
`;

export const ABOUT_TEXT_2 = `
I have experience working on a variety of projects, from simple websites to complex applications, and I excel in team settings where I can contribute to collective success. My portfolio showcases a range of projects that highlight my ability to seamlessly integrate front-end and back-end technologies. I am always eager to take on new challenges and stay updated with the latest industry trends and best practices.
`;

export const EXPERIENCES = [
  {
    year: "August 2023 - May 2024",
    role: "Graduate Teaching Assistant",
    company: "The University of Oklahoma",
    description: `Orchestrated lab sessions and tutorials, fostering an interactive learning environment for undergraduates to grasp Java programming concepts. Mentored students individually, ensuring comprehension of complex programming principles and proficient troubleshooting of coding challenges. Supervised lab activities, optimizing operations to sustain an enriching educational atmosphere conducive to student success. Facilitated comprehensive understanding of Java programming through hands-on exercises, resulting in a 20% increase in student engagement and comprehension. Implemented innovative teaching methodologies, resulting in a 15% improvement in student performance evaluations.
    `,
    technologies: ["Java", "Teaching and Mentoring", "Presentation Skills"],
  },
  {
    year: "November 2022 - July 2023",
    role: "Graduate Research Assistant",
    company: "The University of Oklahoma",
    description: `Directed the collection and analysis of breath samples using cutting-edge technology operated by Breathonix, contributing to ongoing research on non-invasive diagnostic methods. Analyzed breath sample data using statistical software such as Python, achieving approximately 85% accuracy in extracting meaningful insights and patterns to inform further research directions and contribute to scientific publications. Designing an intuitive website for the project, enabling participants to easily input their information and receive predictions as output based on breath sample data analysis, thereby reducing the time for predicting output by 70%. Collaborated with a diverse team to optimize breath sampling, ensuring data accuracy, while also contributing to protocol development for participant recruitment and sample collection.`,
    technologies: ["Data Collection", "Data Analysis"],
  },
  {
    year: "December 2020 - July 2022",
    role: "Project Engineer",
    company: "Wipro Technologies Private Limited",
    description: `Spearheaded the development of front-end applications from conception to deployment, collaborating with cross-functional teams, ensuring in a 20% increase in user engagement. Analyzed client requirements to design and implement high-quality front-end solutions, utilizing HTML, CSS, JavaScript and React frameworks, resulting in reduction in page load time. Managed project timelines, ensuring adherence to best practices and code quality standards, resulting in improvement in development efficiency. Identified and resolved technical issues promptly, improving front-end functionality by 40% and ensuring seamless user experiences. Delivered exceptional technical support to clients, ensuring a satisfaction rate and fostering long-term relationships.
    `,
    technologies: ["JavaScript", "React", "Probelm Solving"],
  },
  {
    year: "May 2019 - September 2019",
    role: "Web Developer Intern",
    company: "Lakireddy Bali Reddy College of Engineering",
    description: `Led the development of responsive and user-friendly website using HTML5, CSS3, and JavaScript, culminated in surge in user engagement. Implemented efficient backend solutions utilizing PHP and MySQL, reducing website loading times and enhancing overall performance. Collaborated with cross-functional teams to identify and troubleshoot technical issues, leading to a 20% decrease in website downtime. Conducted comprehensive testing and debugging procedures to ensure seamless functionality across many browsers and devices, achieving a 95% bug-free user experience.`,
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
  address: "1800 Beaumont Drive, Norman, OK 73071 ",
  email: "morakhila99@gmail.com",
};
