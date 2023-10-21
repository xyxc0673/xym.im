import { projects } from '@/config/projects';
import ProjectCard from './ProjectCard';
import { vstack } from '@/styled-system/patterns';

const ProjectList = () => {
  return (
    <div
      className={vstack({
        gap: '8',
        px: '4',
      })}
    >
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
