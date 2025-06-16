import React from 'react';
import { useParams, Link } from 'react-router-dom';

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

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <section className="min-h-screen py-20 px-4 text-center">
        <h1 className="text-3xl font-bold text-dark mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-primary underline">Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-dark mb-6">{project.location}</h1>
        <img
          src={project.image}
          alt={project.location}
          className="w-full max-h-[600px] object-cover rounded-lg shadow-md"
        />
        <div className="mt-8">
          <Link to="/projects" className="text-primary underline hover:text-accent transition">
            ← Back to All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
