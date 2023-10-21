import { css } from '@/styled-system/css';
import { vstack } from '@/styled-system/patterns';
import ProjectList from './ProjectList';

const Header = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      id={id}
      className={css({
        fontSize: '4xl',
        fontWeight: 'bold',
        color: 'slate.900',
        p: '6',
      })}
      href={`#${id}`}
    >
      {children}
    </a>
  );
};

export default function Home() {
  return (
    <main
      className={vstack({
        bg: 'gray.50',
        minH: '100vh',
      })}
    >
      <Header id='who'>Who</Header>
      <Header id='projects'>Projects</Header>
      <ProjectList />
    </main>
  );
}
