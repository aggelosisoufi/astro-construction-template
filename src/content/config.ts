// src/content/config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const home = defineCollection({
  loader: glob({ base: './src/content/home', pattern: '*.yaml' }),
  schema: ({ image }) =>
    z.object({
      locale: z.string(),

      hero: z.object({
        title: z.string(),
        description: z.string(),
        image: image(),
        buttonLabel: z.string(),
        buttonHref: z.string(),
        logoText: z.string(),
        navLinks: z.array(z.object({ label: z.string(), href: z.string() })),
      }),

      about: z.object({
        badge: z.string(),
        title: z.string(),
        description: z.string(),
      }),

      sliderImages: z.array(
        z.object({ image: image(), alt: z.string() })
      ),

      stats: z.array(
        z.object({
          value: z.string(),
          label: z.string(),
          description: z.string(),
        })
      ),

      workSection: z.object({
        badge: z.string(),
        headline: z.string(),
        description: z.string(),
        works: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            image: image(),
            theme: z.enum(['light', 'dark']),
          })
        ),
      }),

      servicesSection: z.object({
        header: z.object({
          badge: z.string(),
          heading: z.string(),
          paragraph: z.string(),
        }),
        services: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            image: image(),
            icon: image(),
          })
        ),
      }),

      contact: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        contactInfo: z.array(
          z.object({
            label: z.string(),
            value: z.string(),
            type: z.enum(['address', 'email', 'phone']),
          })
        ),
        socialLinks: z.array(
          z.object({
            ariaLabel: z.string(),
            href: z.string(),
            icon: z.string(),
          })
        ),
        socialTitle: z.string(),
      }),

      footer: z.object({
        logoText: z.string(),
        year: z.number(),
        companyName: z.string(),
        header: z.object({ quickLinksTitle: z.string() }),
        leftLinks: z.array(z.object({ label: z.string(), href: z.string() })),
        rightLinks: z.array(z.object({ label: z.string(), href: z.string() })),
        designerName: z.string(),
        designerUrl: z.string(),
      }),

      seo: z.object({
        title: z.string(),
        description: z.string(),
        canonical: z.string().optional(),
        openGraphImage: image().optional(),
        robots: z.object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        }),
      }),
    }),
});

export const collections = { home };
