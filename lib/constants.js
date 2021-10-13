// Storyblok
export const STORYBLOK_API_KEY = process.env.NEXT_PUBLIC_STORYBLOK_API_KEY;

export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT || "development";
export const VERSION = ENVIRONMENT === "development" ? "draft" : "published";
