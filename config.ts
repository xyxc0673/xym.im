import { LocalePrefix } from '@node_modules/next-intl/dist/types/src/shared/types';
import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'zh-CN'] as const;

export const pathnames = {
  '/': {
    en: '/',
    'zh-CN': '/',
  },
  '/about': {
    en: '/about',
    'zh-CN': '/about',
  },
  '/posts/[slug]': {
    en: '/posts/[slug]',
    'zh-CN': '/posts/[slug]',
  },
} satisfies Pathnames<typeof locales>;

export const localePrefix: LocalePrefix = 'as-needed';

export type AppPathnames = keyof typeof pathnames;
