export const ProjectList = [
  {
    id: 1,
    name: "reelgood",
    title: "Reelgood",
    desktop: "/assets/reelgood-desktop.webp",
    mobile: "/assets/reelgood-mobile.webp",
    outline:
      "A streaming search engine, where you can discover what's trending, search your favourite titles and find where to stream them on major platforms.",
    link: "https://reelgood.vercel.app/",
    github: "https://github.com/jkellerman/Reelgood",
    stack: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "CSS Modules" },
      { id: 4, name: "TMDB API" },
      { id: 5, name: "React Query" },
      { id: 6, name: "Vercel" },
      { id: 7, name: "SSR" },
    ],
    overview:
      "I built Reelgood from the ground up whilst making design decisions along the way with user experience and performance in mind. I am continously improving the app as I pick up new skills and technologies.",
    solution: [
      "Next.js was the logical choice for this web app, offering the ability to set up dynamic page and API routes with ease, along with various rendering options that can lead to improved performance. The app uses server-side rendering with stale-while-revalidate cache-control headers to ensure the data for what is trending is always fresh while improving app performance by reducing network requests.",

      "React Query was used for the interior genre and search pages, which involve infinite scrolling, to reduce the amount of code needed for fetching data and improving performance by handling data caching and background refetching.",
    ],
    challenges: [
      "One of the main challenges I encountered was image optimisation due to the large volume of images in the application. Using the Next/Image component or a custom loader would have incurred some costs, therefore, I opted out of the image optimisation offered by Vercel which would have generated images in next-gen format, resized them for different screen sizes, and prevented cumulative layout shifts.",
      "However, I implemented best practices where possible, such as lazy loading and fetching images from the TMDB API at appropriate sizes.",
    ],
    lessons:
      "This is the largest application I've built from scratch which provided valuable lessons in code structure and organisation. Initially, my code was not clean, and instead of refactoring, I completed tasks and moved on to the next. I have since made a point of refactoring my code for better readability and organisation. I also implemented the atomic design system to improve directory organisation and consistency.",
  },
  {
    id: 2,
    name: "planetviewer",
    title: "3D/AR Planet Viewer",
    desktop: "/assets/planet-viewer-desktop.webp",
    mobile: "/assets/planet-viewer-mobile.webp",
    outline:
      "Learn about the planets in our solar system whilst interacting with 3D models of them. These are can be viewed in Augmented Reality on iOS devices.",
    link: "https://www.planetviewer.net/",
    github: "https://github.com/jkellerman/Planet-viewer",
    stack: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Styled-Components" },
      { id: 4, name: "Framer Motion" },
      { id: 5, name: "Model-viewer" },
      { id: 6, name: "Netlify" },
    ],
    overview:
      "This project was initially a challenge from Frontend Mentor, but I decided to expand it by adding some exciting extra features. I was motivated to create an app that not only met the requirements of the challenge, but also allowed users to interact with 3D Models and experience the planets in augmented reality.",
    solution: [
      "To accomplish my goals, I used React and React Router DOM to create a single-page application with eight routes for each planet. As I switched routes, I had to manage the state of the current active tab, and this gave me the opportunity to use the Context API for the first time, which helped me avoid unnecessary prop drilling. I also utilized Styled-Components to efficiently build components for all screen sizes with a mobile-first workflow.",
    ],
    challenges: [
      "While building the app, I encountered some challenges related to the UI. One of the most significant was the time it took for the 3D models to load. I mitigated this issue by creating a poster file that displays before the model is rendered. This gave the users something to see while the model loads, improving their experience.",
    ],
  },
  {
    id: 3,
    name: "billy",
    title: "Billy",
    desktop: "/assets/billy-desktop.webp",
    mobile: "/assets/billy-mobile.webp",
    outline:
      "An invoice management app for freelancers to help stay organised and keep track of payments.",
    github: "https://github.com/franmsilva/billy",
    stack: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Styled-Components" },
      { id: 4, name: "DynamoDB" },
      { id: 5, name: "Jest" },
      { id: 6, name: "React Testing Library" },
      { id: 7, name: "Firebase" },
      { id: 8, name: "Storybook" },
    ],
    overview:
      "As a collaborative effort with a software engineer, my primary responsibilities for this project included building reusable components, resolving issues in the existing codebase, integrating login authentication, and writing unit and integration tests. ",
    solution:
      "The project was built using DynamoDB, a NoSQL database service, which provided a reliable and secure data storage solution for the backend, and TypeScript, Next.js, and Styled-components for the frontend. As part of the development process, I utilised Storybook to create and test UI components in isolation. To implement the login authentication, I opted for Firebase due to its simple setup process and customisable login form options. Additionally, I set up unit and integration tests using Jest and React Testing library to ensure reliability and functionality across the app.",
    challenges:
      "As this was my first collaborative project, one of the obstacles I faced was getting acquainted with the existing codebase. Additionally, I had to familiarise myself with new technologies while adhering to coding standards and design systems, which was a challenging task. Despite the challenges, the project helped me develop skills in project management, communication, and problem-solving.",
    lessons:
      "Collaborating with a more experienced software engineer was invaluable to me. I gained knowledge of best practices for collaborating on app development, and I have since applied this knowledge to my own projects. However, the most significant takeaway for me was learning how to use Git in a pair programming scenario. While I was already familiar with Git, I learned best practices for making commits, managing conflicts, and participating in code reviews.",
  },
];
