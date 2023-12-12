import { css } from '@styled-system/css';
import { vstack } from '@styled-system/patterns';
import Footer from './footer';
import ProjectList from './ProjectList';
import Profile from './Profile';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('Home');

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
          mdDown: {
            w: '100%',
            px: '8',
          },
        })}
      >
        <Header id='who'>{t('Profile.Title')}</Header>
        <Profile />
        <Header id='projects'>{t('Projects')}</Header>
        <ProjectList />
        <Footer />
      </div>
    </main>
  );
}
