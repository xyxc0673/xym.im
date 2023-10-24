import { GrommetIconsGithub } from '@/assets';
import { css } from '@/styled-system/css';
import { hstack, stack, vstack } from '@/styled-system/patterns';
import Link from 'next/link';

const CopyRight = () => {
  const year = new Date().getFullYear();

  return (
    <div
      className={hstack({
        gap: '1',
        alignItems: 'center',
        color: 'stone.600',
      })}
    >
      <span
        className={css({
          fontSize: 'lg',
        })}
      >
        ©
      </span>
      <span>{year}</span>
      <Link
        href='https://github.com/xyxc0673'
        className={css({
          backgroundImage: 'linear-gradient(to right, #e68765, #f0b7a3)',
          backgroundClip: 'text',
          color: 'transparent',
          fontWeight: 'bold',
          fontSize: 'md',
          transition: 'all 0.2s ease-in-out',
          _hover: {
            scale: '1.2',
            transform: 'translateX(4px)',
          },
        })}
      >
        XYXC
      </Link>
    </div>
  );
};

const OpenSource = () => {
  return (
    <div className={hstack({ gap: '2' })}>
      <span>Open Source in</span>
      <Link
        className={hstack({
          _hover: {
            textDecoration: 'underline',
          },
          gap: 1,
        })}
        href='https://github.com/xyxc0673/xym.im'
      >
        <GrommetIconsGithub />
        xym.im
      </Link>
    </div>
  );
};

const Footer = () => {
  return (
    <footer
      className={css({
        py: '8',
      })}
    >
      <div
        className={stack({
          gap: '6',
          flexDirection: 'column',
          alignItems: 'center',
          md: {
            flexDirection: 'row',
          },
        })}
      >
        <CopyRight />
        <OpenSource />
      </div>
    </footer>
  );
};

export default Footer;
