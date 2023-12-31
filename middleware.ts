import createMiddleware from "next-intl/middleware";
import { locales } from './navegación';


export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: "es",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', "/(en|es|pt)/:path*"],
};
