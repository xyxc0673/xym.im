import { skills } from '@/config/skills';
import { css, cx } from '@/styled-system/css';
import { vstack, hstack } from '@/styled-system/patterns';
import Image from 'next/image';

const Profile = () => {
  return (
    <div
      className={vstack({
        alignItems: 'start',
        w: '100%',
      })}
    >
      <div
        className={css({
          overflow: 'hidden',
          rounded: '3xl',
        })}
      >
        <Image
          src='/profile/avatar.jpg'
          alt='avatar'
          width={64}
          height={64}
          className={cx(
            css({
              objectFit: 'cover',
            })
          )}
        />
      </div>
      <div className='group'>
        <div
          className={css({
            fontSize: '4xl',
            fontWeight: 'bold',
            position: 'relative',
            _after: {
              content: '""',
              display: 'inline-block',
              position: 'absolute',
              top: '15%',
              width: '0.25em',
              height: '70%',
              bg: 'grey',
              ml: '2',
              visibility: 'hidden',
              _groupHover: {
                visibility: 'visible',
                animation: 'typing 1s infinite',
              },
            },
          })}
        >
          {`<Developer/>`}
        </div>
      </div>
      <p>
        {`Hey there 👋 I'm `}
        <span
          className={css({
            backgroundImage: 'linear-gradient(to right, #e68765, #f0b7a3)',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
          })}
        >
          XYXC
        </span>
        , a front-end developer from China.
      </p>
      <p>I love creating useful stuff and plan to be a full stack.</p>
      <p>What I love to use:</p>
      <div className={hstack()}>
        {skills.map(
          (skill) =>
            skill.Icon && (
              <skill.Icon
                key={skill.name}
                className={css({
                  width: '2rem',
                  height: '2rem',
                })}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Profile;
