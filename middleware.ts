import { localePrefix, pathnames } from '@config';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  defaultLocale: 'en',
  locales: ['en', 'zh-CN'],
  pathnames: pathnames,
  localePrefix: localePrefix,
});

export const config = {
  matcher: ['/', '/(en|zh-CN)/:path*'],
};
