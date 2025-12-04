# 🏗️ Astro Construction Template

A modern, multilingual, SEO‑optimized construction website template built with **Astro 5**, **React 19**, **Tailwind CSS 4**, and **Keystatic CMS**.

This template is ideal for:
- Construction & renovation companies  
- Freelancers building small business sites  
- Agencies needing a multilingual starter  
- Developers who want a clean Astro + CMS architecture

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge)](https://astro-construction-template.vercel.app/)

---

## ✨ Features

### 🌍 Multilingual (i18n)
- English (`/en`) & Greek (`/el`)
- Automatic locale detection  
- Locale-aware routing  
- Footer language switcher  
- SEO metadata per locale

---

### 📝 Keystatic CMS
Manage all content visually through:

```
/keystatic
```

Editable content:
- Hero  
- Slider images  
- About  
- Services  
- Work/Projects  
- Contact info  
- Footer  
- SEO metadata  

Supports **Local Mode** (default) or **GitHub Mode**.

---

### ⚛ React + Radix + Embla
- Embla Carousel (with autoplay)
- Radix Accordion
- Sticky work showcase (scroll‑based gallery)
- React 19 islands where needed

---

### 🎨 TailwindCSS 4 + Custom Theme
A handcrafted construction design system:
- Responsive typography (H1–H4)
- Modern paragraph system  
- Badge UI components  
- Section wrappers  
- Utility presets  
- Color tokens

Defined in:

```
src/styles/construction-theme.css
```

---

### 📸 Image Optimization
Using `astro:assets` for:
- WebP conversion  
- Automatic resizing  
- Lazy loading  
- Improved performance  

---

### 🔍 SEO Ready
Includes:
- `@astrolib/seo`  
- Canonical URLs  
- `astro:sitemap`  
- `astro-robots-txt`  
- OG images (configurable via CMS)

---

### 🚀 Vercel Deployment
- Official Vercel adapter  
- Zero‑config deploy  
- Compatible with environment variables  
- Fast builds

---

## 📦 Tech Stack

- Astro 5  
- React 19  
- Tailwind CSS 4  
- Keystatic CMS  
- Embla Carousel  
- Radix UI  
- Iconify  
- TypeScript  

---

## 🗂️ Folder Structure

```
src/
  assets/
  components/
  content/
  layouts/
  pages/
  styles/
  types/
astro.config.mjs
keystatic.config.ts
```

---

## ⚙️ Setup

### Install
```
npm install
```

### Run dev server
```
npm run dev
```

Local CMS:
```
http://localhost:4321/keystatic
```

---

## 🌍 Internationalization
Astro i18n configuration provides localized URLs:

```
/en
/el
```

Localized SEO metadata is stored in YAML content files.

---

## 📁 Content Management
All editable content lives in:

```
src/content/home/*.yaml
```

Images stored in:

```
src/assets/images/construction/...
```

## 📝 License
MIT License — free to use in personal and commercial projects.

---

## 🤝 Contributing
If you build something with this template, feel free to share it.

