import { css } from '@styled-system/css';
import { RichTranslationValues } from 'next-intl';

export const defaultTranslationValues: RichTranslationValues = {
  p: (children) => <p>{children}</p>,
  gradient: (children) => (
    <span
      className={css({
        backgroundImage: 'linear-gradient(to right, #e68765, #f0b7a3)',
        backgroundClip: 'text',
        color: 'transparent',
        fontWeight: 'bold',
      })}
    >
      {children}
    </span>
  ),
};
