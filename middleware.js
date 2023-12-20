import { match } from '@formatjs/intl-localematcher'

let locales = ['en', 'fr']
let defaultLocale = 'en-US'

/*
    Get the accept-language in the Header and return
*/
function getLocale(request) {
    const acceptLanguageHeader = request.headers.get('accept-language') || '';
    const acceptedLanguages = acceptLanguageHeader.split(',').map(lang => lang.split(';')[0]);
    return match(acceptedLanguages, locales, defaultLocale);
}

/*
    Modify the url by adding the language at the beginning
*/
export function middleware(request) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    let locale = getLocale(request);
    console.log(locale.split('-')[0])
    locale = locale.split('-')[0]
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return Response.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        '/((?!_next).*)',
    ],
};
