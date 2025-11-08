import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const siteUrl = `${process.env.NEXT_PUBLIC_SITE_URL!}`;

    return {
        rules: [
            {
                userAgent: "*",
                allow: ["/"],
                disallow: ["/api/", "/admin", "/private"],
            },
            {
                userAgent: "Googlebot",
                allow: ["/"],
                disallow: ["/api/", "/admin", "/private"],
            },
            {
                userAgent: "GPTBot",
                disallow: ["/"],
            }
        ],
        sitemap: siteUrl+"/sitemap.xml",
        host: siteUrl,
    };
}