// keystatic.config.ts
import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local'
    // kind: 'github',
    // repo: {
    //   owner: '',
    //   name: '',
    // },
  },

  collections: {
    home: collection({
      label: 'Home',
      entryLayout: 'content',
      slugField: 'locale',
      path: 'src/content/home/*',
      schema: {
        locale: fields.slug({ name: { label: 'Locale (en or el)' } }),

        // HERO
        hero: fields.object({
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
          image: fields.image({
            label: 'Hero Image',
            directory: 'src/assets/images/construction',
            publicPath: '@assets/images/construction/',
          }),
          buttonLabel: fields.text({ label: 'Button label' }),
          buttonHref: fields.text({ label: 'Button href', defaultValue: '#contact' }),
          logoText: fields.text({ label: 'Logo text', defaultValue: 'Logo' }),
          navLinks: fields.array(
            fields.object({
              label: fields.text({ label: 'Label' }),
              href: fields.text({ label: 'Href' }),
            }),
            {
              label: 'Navigation Links',
              itemLabel: ({ fields }) => fields.label.value || 'Link',
            }
          ),
        }, { label: 'Hero' }),

        // ABOUT
        about: fields.object({
          badge: fields.text({ label: 'Badge', defaultValue: 'About us' }),
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
        }, { label: 'About' }),

        // IMAGE STRIP
        sliderImages: fields.array(
          fields.object({
            image: fields.image({
              label: 'Image',
              directory: 'src/assets/images/construction',
              publicPath: '@assets/images/construction/',
            }),
            alt: fields.text({ label: 'Alt' }),
          }),
          {
            label: 'Infinite Slider Images',
            itemLabel: ({ fields }) => fields.alt.value || 'Image',
          }
        ),

        // STATS
        stats: fields.array(
          fields.object({
            value: fields.text({ label: 'Value' }),
            label: fields.text({ label: 'Label' }),
            description: fields.text({ label: 'Description', multiline: true }),
          }),
          {
            label: 'Stats',
            itemLabel: ({ fields }) => fields.label.value || 'Stat',
          }
        ),

        // WORK SECTION
        workSection: fields.object({
          badge: fields.text({ label: 'Badge', defaultValue: 'Our work' }),
          headline: fields.text({ label: 'Headline' }),
          description: fields.text({ label: 'Description', multiline: true }),
          works: fields.array(
            fields.object({
              title: fields.text({ label: 'Title' }),
              description: fields.text({ label: 'Description', multiline: true }),
              image: fields.image({
                label: 'Image',
                directory: 'src/assets/images/construction/services',
                publicPath: '@assets/images/construction/services/',
              }),
              theme: fields.select({
                label: 'Theme',
                options: [
                  { label: 'Light', value: 'light' },
                  { label: 'Dark', value: 'dark' },
                ],
                defaultValue: 'light',
              }),
            }),
            {
              label: 'Works',
              itemLabel: ({ fields }) => fields.title.value || 'Work item',
            }
          ),
        }, { label: 'Work Section' }),

        // SERVICES
        servicesSection: fields.object({
          header: fields.object({
            badge: fields.text({ label: 'Badge', defaultValue: 'Services' }),
            heading: fields.text({ label: 'Heading', defaultValue: 'What we do' }),
            paragraph: fields.text({ label: 'Paragraph', multiline: true }),
          }),
          services: fields.array(
            fields.object({
              title: fields.text({ label: 'Title' }),
              description: fields.text({ label: 'Description', multiline: true }),
              image: fields.image({
                label: 'Image',
                directory: 'src/assets/images/construction/services',
                publicPath: '@assets/images/construction/services/',
              }),
              icon: fields.image({
                label: 'Icon (SVG or PNG)',
                directory: 'src/assets/icons/construction',
                publicPath: '@assets/icons/construction/',
              }),
            }),
            {
              label: 'Services',
              itemLabel: ({ fields }) => fields.title.value || 'Service',
            }
          ),
        }, { label: 'Services Section' }),

        // CONTACT
        contact: fields.object({
          title: fields.text({ label: 'Title', defaultValue: 'Contact' }),
          subtitle: fields.text({ label: 'Subtitle', defaultValue: 'Get in touch' }),
          description: fields.text({ label: 'Description', multiline: true }),
          contactInfo: fields.array(
            fields.object({
              label: fields.text({ label: 'Label' }),
              value: fields.text({ label: 'Value' }),
              type: fields.select({
                label: 'Type',
                options: [
                  { label: 'Address', value: 'address' },
                  { label: 'Email', value: 'email' },
                  { label: 'Phone', value: 'phone' },
                ],
                defaultValue: 'phone',
              }),
            }),
            {
              label: 'Contact Info',
              itemLabel: ({ fields }) => fields.label.value || 'Contact',
            }
          ),
          socialLinks: fields.array(
            fields.object({
              ariaLabel: fields.text({ label: 'Aria Label' }),
              href: fields.text({ label: 'URL' }),
              icon: fields.text({ label: 'Icon (e.g., mdi:instagram)' }),
            }),
            {
              label: 'Social Links',
              itemLabel: ({ fields }) => fields.ariaLabel.value || 'Social',
            }
          ),
          socialTitle: fields.text({ label: 'Social title', defaultValue: 'Follow us' }),
        }, { label: 'Contact' }),

        // FOOTER
        footer: fields.object({
          logoText: fields.text({ label: 'Logo text', defaultValue: 'Logo' }),
          year: fields.number({ label: 'Year', defaultValue: new Date().getFullYear() }),
          companyName: fields.text({ label: 'Company name' }),
          header: fields.object({
            quickLinksTitle: fields.text({ label: 'Quick links title', defaultValue: 'Quick links' }),
          }),
          leftLinks: fields.array(
            fields.object({
              label: fields.text({ label: 'Label' }),
              href: fields.text({ label: 'Href' }),
            }),
            {
              label: 'Left Links',
              itemLabel: ({ fields }) => fields.label.value || 'Link',
            }
          ),
          rightLinks: fields.array(
            fields.object({
              label: fields.text({ label: 'Label' }),
              href: fields.text({ label: 'Href' }),
            }),
            {
              label: 'Right Links',
              itemLabel: ({ fields }) => fields.label.value || 'Link',
            }
          ),
          designerName: fields.text({ label: 'Designer name' }),
          designerUrl: fields.text({ label: 'Designer URL' }),
        }, { label: 'Footer' }),

        seo: fields.object({
          title: fields.text({ label: "SEO Title" }),
          description: fields.text({ label: "SEO Description", multiline: true }),
          canonical: fields.text({ label: "Canonical URL", description: "Optional, leave empty to auto-generate" }),
          openGraphImage: fields.image({
            label: "Open Graph Image",
            directory: "src/assets/images/seo",
            publicPath: "@assets/images/seo/",
          }),
          robots: fields.object({
            index: fields.checkbox({ label: "Allow indexing", defaultValue: true }),
            follow: fields.checkbox({ label: "Allow following links", defaultValue: true }),
          }),
        }, { label: "SEO Metadata" }),
      },
    }),
  },
});
