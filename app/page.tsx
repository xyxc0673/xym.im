import { css } from '@/styled-system/css';
import { vstack } from '@/styled-system/patterns';
import Footer from './footer';
import ProjectList from './ProjectList';
import Profile from './Profile';

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
        py: '6',
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
      <div
        className={vstack({
          w: '70%',
          alignItems: 'start',
          px: '16',
        })}
      >
        <Header id='who'>Who</Header>
        <Profile />
        <Header id='projects'>Projects</Header>
        <ProjectList />
        <Footer />
      </div>
    </main>
  );
}
