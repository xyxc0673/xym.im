import { projects } from '@/config/projects';
import ProjectCard from './ProjectCard';
import { grid, vstack } from '@/styled-system/patterns';

const ProjectList = () => {
  return (
    <div
      className={grid({
        gap: '8',
        columns: 2,
        md: {
          columns: 1,
        },
      })}
    >
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
