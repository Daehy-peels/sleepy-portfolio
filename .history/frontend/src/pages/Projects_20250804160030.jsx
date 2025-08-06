// frontend/src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";

// Import your tech icons here, e.g.:
// import { FaReact } from 'react-icons/fa';
// import { DiMongodb } from "react-icons/di";

const Projects = () => {
  // === Project data array ===
  // This is where you will add, edit, or remove your projects.
  // Use a placeholder image for now, and replace it with your project screenshots later.
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "A brief description of your project. Talk about its purpose, features, and what you learned while building it. Keep it concise and engaging.",
      techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"], // Add your tech stack here
      image: "https://via.placeholder.com/600x400", // Placeholder image
      githubUrl: "https://github.com/your-username/project-one",
      liveUrl: "https://your-project-one-live-demo.com",
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "Another project description. You can highlight different aspects here, like a unique user interface or a complex backend feature you built.",
      techStack: ["React", "Express", "PostgreSQL"],
      image: "https://via.placeholder.com/600x400",
      githubUrl: "https://github.com/your-username/project-two",
      liveUrl: "https://your-project-two-live-demo.com",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "Describe your third project here. This could be a personal project, a freelance gig, or a contribution to an open-source project.",
      techStack: ["Vue.js", "Firebase", "Sass"],
      image: "https://via.placeholder.com/600x400",
      githubUrl: "https://github.com/your-username/project-three",
      liveUrl: "https://your-project-three-live-demo.com",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center p-8 pt-24 md:pt-16 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-12 tracking-tight"
      >
        My Projects
      </motion.h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            className="group relative rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 transition-all duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />

            {/* Project Details Overlay */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm md:text-base mb-4 italic">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600 dark:bg-blue-800 text-white text-xs rounded-full font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <FaLink size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
