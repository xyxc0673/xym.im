import { css } from '@/styled-system/css';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div
        className={css({
          fontSize: '2xl',
          fontWeight: 'bold',
        })}
      >
        Hello World！
      </div>
    </main>
  );
}
