import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages } from "@/app/lib/i18n/setting";

acceptLanguage.languages(languages);

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next|images|svg|assets|favicon.ico).*)",
  ],
};

export async function middleware(req: any) {
  const cookieName = "lang";
  if (req.nextUrl.pathname.startsWith("/_next")) return NextResponse.next();
  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName).value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  if (!languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`))) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  const lngInReferer = languages.find((l) =>
    req.nextUrl.pathname.startsWith(`/${l}`)
  );
  const response = NextResponse.next();
  if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
  return response;
}
