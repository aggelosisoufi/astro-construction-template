import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro'

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

export default defineConfig({
  site: "https://yourwebsite.gr",

  i18n: {
    locales: ["en", "el"],              
    defaultLocale: "en",                
    routing: {
      prefixDefaultLocale: true,
      fallbackType: "rewrite"
    },
  },

  integrations: [react(), markdoc(), keystatic(), sitemap({
    filter: (page) => page !== 'https://yourwebsite.gr/keystatic',
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: "en-US",
        el: "el-GR"
      }
    }
  }), robotsTxt({
    sitemap: true, 
    policy: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/keystatic"], // Block CMS admin
      },
    ],
  }), icon()],

  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});