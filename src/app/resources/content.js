import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ilyass",
  lastName: "Bougati",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fullstack Web Developper",
  avatar: "/images/avatar.jpg",
  location: "Africa/Casablanca", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Arabic", "French", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Ilyass-Bougati",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ilyass-bougati-093a60293/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:i.bougati12@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Fullstack Web Developper</>,
  subline: (
    <>
      I'm Ilyass, a student at <InlineCode>FSTS</InlineCode>, I create web applications
      <br /> using <InlineCode>The Spring Framework</InlineCode> and <InlineCode>React</InlineCode>
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ilyass is a driven software engineer specializing in backend development with Spring Boot.
         Passionate about building secure, scalable systems, he combines technical depth
        with a focus on real-world impact.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Impact Club",
        timeframe: "2024 - Present",
        role: "Backend Software Engineer",
        achievements: [
          <>
            Designed and implemented a secure RESTful API using Spring Boot and JPA, integrating role-based access control and JWT authentication to ensure seamless and protected access across 20+ endpoints for over 500 users
          </>,
          <>
            Integrated Cloudinary’s SDK as a third-party solution for image storage and management, and collaborated in Agile sprints using Git and Jira while building a scalable database schema for handling posts, comments, and reactions efficiently.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/impact/impact-landing-page.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "AWRACH",
        timeframe: "2022",
        role: "Digital Skills Educator",
        achievements: [
          <>
            Served as a Digital Skills Educator, teaching children the fundamentals of computer use, including keyboard and mouse operation, basic file management, and productivity tools such as Microsoft Office. Emphasized safe internet browsing practices and guided students in conducting effective online research, fostering digital literacy in an accessible and engaging learning environment.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Faculté des Sciences et Techniques Settat",
        description: <>Cycle d'Ingénieur Génie Informatique</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Backend Development",
        description: <>I excel in building robust backend systems using Spring Boot and Java. I focus on creating secure, scalable REST APIs that efficiently integrate with various systems.</>,
        images: [
        ],
      },
      {
        title: "DevOps & Tools",
        description: <>I streamline deployments using Docker and CI/CD pipelines, ensuring smooth software rollouts. I have deep familiarity with Git and GitHub Actions for effective version control and automation.</>,
        images: [
        ],
      },
      {
        title: "Databases",
        description: <>I design and manage relational databases such as PostgreSQL, MySQL, and SQLite while also working with NoSQL solutions like MongoDB. I focus on creating efficient schema designs that ensure data integrity and performance.</>,
      },
      {
        title: "Frontend Development",
        description: <>I develop simple responsive user interfaces with ReactJS and enhance designs using Bootstrap.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/skills/img1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/skills/img2.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
