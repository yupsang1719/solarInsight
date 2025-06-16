import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    image: '/assets/projects/reading.jpeg',
    location: 'Reading, Berkshire',
  },
  {
    id: 2,
    image: '/assets/projects/odiham.jpeg',
    location: 'Odiham, Hampshire',
  },
  {
    id: 3,
    image: '/assets/projects/solar-home-3.jpg',
    location: 'Camberley, Hampshire',
  },
  {
    id: 4,
    image: '/assets/projects/solar-home-1.jpg',
    location: 'Yateley, Hampshire',
  },
];

const Projects = () => {
  return (
    <section className="bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-dark mb-10">Our Projects</h2>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group break-inside-avoid overflow-hidden rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.location}
                className="w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">{project.location}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="self-start text-sm bg-white text-dark px-3 py-1 rounded hover:bg-primary hover:text-white transition"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
