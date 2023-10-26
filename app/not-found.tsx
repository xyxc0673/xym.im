import { css } from '@styled-system/css';
import { stack, vstack } from '@styled-system/patterns';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div
      className={stack({
        w: 'screen',
        h: 'screen',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <div
        className={vstack({
          alignItems: 'center',
          gap: 4,
          mt: '-8%',
        })}
      >
        <h1
          className={css({
            fontSize: '8xl',
            fontWeight: 'bold',
          })}
        >
          404
        </h1>
        <p
          className={css({
            fontSize: '4xl',
            fontWeight: 'medium',
            color: 'gray.500',
          })}
        >
          Page flew to outer space 🚀
        </p>
        <Link
          href='/'
          className={css({
            fontSize: '4xl',
            fontWeight: 'semibold',
            color: 'gray.600',
            _hover: {
              textDecoration: 'underline',
            },
          })}
        >
          Back to Earth 🌍
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default NotFound;
