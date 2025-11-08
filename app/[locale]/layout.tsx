import type {Metadata} from "next";
import "./globals.css";
import {NextIntlClientProvider, hasLocale} from "next-intl";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";
import {Inter, Merriweather, Courier_Prime} from "next/font/google";
import {AuroraBackground} from "@/components/ui/aurora-background";
import {ThemeProvider} from "@/components/theme/theme-provider";
import {Suspense} from "react";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import {SpeedInsights} from "@vercel/speed-insights/next";

const inter = Inter({
    variable: '--font-inter',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

const merriweather = Merriweather({
    variable: '--font-merriweather',
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

const courierprime = Courier_Prime({
    variable: '--font-courier-prime',
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

const siteUrl = `${process.env.NEXT_PUBLIC_SITE_URL!}`;
const canonicalUrl = siteUrl+'/';

export const metadata: Metadata = {
    title: "Web App",
    description: "Next.js + TypeScript + Tailwind CSS + Shadcn UI + Next Intl + Vercel based responsive Website Teamplate",
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: canonicalUrl,
    },
    authors: [
        {
            name: "Torsten Zielinski",
        }
    ],
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function RootLayout({
                                             children, params
                                         }: Props
                                         //                                    Readonly<{
                                         //     children: React.ReactNode;
                                         // }>
) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} suppressHydrationWarning>
        <body
            className={`${inter.variable} ${merriweather.variable} ${courierprime.variable} antialiased flex min-h-screen flex-col font-inter`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Suspense fallback={<div>Lade Seite ...</div>}>
                <NextIntlClientProvider>
                    <Navigation/>
                    <main className={'flex-grow w-full pt-16'}>
                        <AuroraBackground>
                            {children}
                            <SpeedInsights />
                        </AuroraBackground>
                    </main>
                    <Footer/>
                </NextIntlClientProvider>
            </Suspense>

        </ThemeProvider>
        </body>
        </html>
    );
}
