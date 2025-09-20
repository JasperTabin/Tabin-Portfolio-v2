/* Data set for projects */

export const defaultProjects = [
  {
    id: 1,
    title: "IoT Water Monitoring System",
    description:
      "IoT water monitoring system with real-time alerts and mobile app integration",
    image: "/src/assets/Capstone.jpg",
    href: "https://www.youtube.com/watch?v=FpUaKoGismA&ab_channel=JohnGabrielGerolia",
    tech: ["IoT", "Firebase", "MIT App Inventor", "Hardware"],
  },
  
  {
    id: 2,
    title: "Urban Web",
    description:
      "Modern interior design showcase with clean layouts and visuals",
    image: "/src/assets/Website.jpg",
    href: "https://jaspertabin.github.io/LaboLinaw-Urban-Web/",
    tech: ["React.js", "CSS"],
    links: [
      {
        label: "Source",
        url: "https://github.com/JasperTabin/LaboLinaw-Urban-Web?tab=readme-ov-file",
        type: "secondary",
      },
      {
        label: "Visit",
        url: "https://jaspertabin.github.io/LaboLinaw-Urban-Web/",
        type: "primary",
      },
    ],
  },

  {
    id: 3,
    title: "Cat Maze Game",
    description:
      "Interactive maze game featuring smooth gameplay mechanics and responsive design",
    image: "/src/assets/Desktop2.png",
    href: "https://jaspertabin.github.io/my-react-game/",
    tech: ["React.js", "CSS"],
    links: [
      {
        label: "Source",
        url: "https://github.com/JasperTabin/my-react-game/tree/main",
        type: "secondary",
      },
      {
        label: "Visit",
        url: "https://jaspertabin.github.io/my-react-game/",
        type: "primary",
      },
    ],
  },

  {
    id: 4,
    title: "Portfolio Website v1",
    description:
      "A modern and responsive personal portfolio website built with React and TailwindCSS",
    image: "/src/assets/Desktop.png",
    href: "https://tabin-portfolio.vercel.app/",
    tech: ["React", "Tailwind", "Framer-Motion", "Vite"],
  },
];
