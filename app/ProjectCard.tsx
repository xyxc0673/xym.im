import { GrommetIconsGithub } from '@/assets';
import { Project } from '@/config/projects';
import { css } from '@/styled-system/css';
import { vstack, hstack } from '@/styled-system/patterns';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ name, description, url, images, icon }: Project) => {
  return (
    <div
      className={vstack({
        gap: '6',
        p: '6',
        color: 'slate.900',
        bgGradient: 'to-br',
        alignItems: 'flex-start',
        gradientFrom: 'zinc.200',
        gradientTo: 'zinc.100',
        rounded: '2xl',
        transition: 'all 0.2s ease-in-out',
        _hover: {
          shadow: 'md',
        },
      })}
    >
      <div className={hstack({ gap: '4' })}>
        <Image src={icon} alt={name} width={48} height={48} />
        <h1
          className={css({
            fontSize: 'xl',
            fontWeight: 'bold',
          })}
        >
          {name}
        </h1>
      </div>
      <p>{description}</p>
      <div className={hstack({ gap: '8' })}>
        {images.map((image) => (
          <Image
            key={image}
            src={image}
            alt={name}
            width={150}
            height={333.5}
            className={css({
              objectFit: 'contain',
            })}
          />
        ))}
      </div>
      <Link
        href={url}
        className={hstack({
          _hover: {
            textDecoration: 'underline',
          },
        })}
      >
        <GrommetIconsGithub width={24} height={24} />
        <span
          className={css({
            fontSize: 'md',
            fontWeight: 'semibold',
          })}
        >
          {url}
        </span>
      </Link>
    </div>
  );
};

export default ProjectCard;