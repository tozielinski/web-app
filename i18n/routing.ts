import { Locale } from "next-intl";
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'de', 'it'],

    // Used when no locale matches
    defaultLocale: 'en' satisfies Locale,
    localePrefix: 'never',
});