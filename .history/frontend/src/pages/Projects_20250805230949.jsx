// frontend/src/pages/Projects.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Could not fetch projects:", error);
        setError(
          "Failed to fetch projects. Please ensure the backend server is running and the image URLs are correct."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center p-8"
      >
        <p className="text-xl dark:text-white">Loading projects...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center p-8"
      >
        <p className="text-xl text-red-500">Error: {error}</p>
      </section>
    );
  }

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
        className="text-3xl md:text-4xl font-montserrat font-bold text-black dark:text-white mb-12 tracking-tight"
      >
        My Projects
      </motion.h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
            className="group relative rounded-lg overflow-hidden border border-gray-300/50 dark:border-gray-700/50 bg-white/30 dark:bg-gray-900/30 backdrop-filter backdrop-blur-lg backdrop-saturate-150 shadow-lg transition-all duration-300"
          >
            <div className="relative overflow-hidden rounded-xl group">
              {/* Project Image */}
              <img
                src={projects.imageUrl}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
              {/* Log the image URL to the console */}
              {console.log(
                `Loading image for project: ${project.title}, URL: ${project.imageUrl}`
              )}

              {/* Project Details Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold font-montserrat mb-2">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base mb-4 italic font-raleway">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600 dark:bg-blue-800 text-white text-xs rounded-full font-raleway font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {project.liveDemoLink && (
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-blue-600/80 hover:bg-blue-500 transition-colors"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <FaLink size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
