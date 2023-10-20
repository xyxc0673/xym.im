import { projects } from '@/config/projects';
import { css } from '@/styled-system/css';
import { vstack } from '@/styled-system/patterns';
import ProjectCard from './ProjectCard';

export default function Home() {
  return (
    <main
      className={vstack({
        bg: 'gray.50',
        minH: '100vh',
      })}
    >
      <h1
        className={css({
          fontSize: '4xl',
          fontWeight: 'bold',
          color: 'slate.900',
          p: '6',
        })}
      >
        # Projects
      </h1>
      <div
        className={vstack({
          gap: '6',
        })}
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </main>
  );
}
