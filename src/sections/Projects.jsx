import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    image: '/assets/projects/solar-home-1.jpg',
    location: 'Basingstoke, Hampshire',
    summary: '6.2 kW system with battery — expected to save £900/year.',
  },
  {
    id: 2,
    image: '/assets/projects/solar-home-2.jpg',
    location: 'Guildford, Surrey',
    summary: '4.5 kW system installed on a slate roof in under 2 days.',
  },
  {
    id: 3,
    image: '/assets/projects/solar-home-3.jpg',
    location: 'Reading, Berkshire',
    summary: 'High-efficiency panels on a flat roof with MCS certification.',
  },
  {
    id: 4,
    image: '/assets/projects/solar-home-4.jpg',
    location: 'Aldershot, Hampshire',
    summary: '3.9 kW install with smart meter integration and app control.',
  },
  {
    id: 5,
    image: '/assets/projects/solar-home-5.jpg',
    location: 'Southampton, Hampshire',
    summary: '7.2 kW hybrid system powering both home and EV charger.',
  },
  {
    id: 6,
    image: '/assets/projects/solar-home-6.jpg',
    location: 'Slough, Berkshire',
    summary: 'Compact install on terraced house with 25-year warranty.',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
          Our Work Across the UK
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Use fixed aspect ratio or height for consistency */}
              <div className="w-full h-52 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.location}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg text-dark mb-1">
                  {project.location}
                </h3>
                <p className="text-sm text-text">{project.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-dark transition"
          >
            View More Projects
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg overflow-hidden max-w-3xl w-full shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-dark hover:text-red-500 text-xl font-bold z-10"
            >
              &times;
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.location}
              className="w-full max-h-[80vh] object-contain bg-black"
            />

            <div className="p-6 bg-white">
              <h3 className="text-lg font-semibold text-dark mb-2">
                {selectedProject.location}
              </h3>
              <p className="text-sm text-text">{selectedProject.summary}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
