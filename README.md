# Aurora Trade

A modern trading and commerce website built with **React, TypeScript, and Vite**. Aurora Trade provides a professional interface for presenting products, trading categories, business services, analytics, AI solutions, and company information.

## Overview

Aurora Trade is a frontend trading platform designed to showcase products and business services through a modern, responsive website.

The project uses a structured component architecture with separate pages, reusable layout components, product data, service data, and TypeScript types.

The website includes product-focused sections alongside company information, service presentation, analytics, and AI-related solutions.

## Features

- Modern trading and commerce interface
- Fully responsive design
- Hero section
- Featured product categories
- Trending products
- Product showcase sections
- Electronics category
- Fashion category
- Home-related products
- Industrial products
- Business services presentation
- Analytics section
- AI solutions page
- About Us page
- Services page
- Service detail pages
- Contact page
- Contact form and company information
- Responsive navigation and footer
- Scroll-to-top functionality
- Reusable React components
- TypeScript data models
- Client-side routing

## Technologies Used

- **React 19** — Component-based frontend development
- **TypeScript** — Static typing and maintainable application code
- **Vite** — Fast development server and production build system
- **React Router DOM** — Client-side routing
- **Lucide React** — Modern interface icons
- **CSS** — Responsive custom styling
- **ESLint** — Code quality and linting

## Project Structure

```text
src/
│
├── assets/
│   ├── category-electronics.jpg
│   ├── category-fashion.jpg
│   ├── category-home.jpg
│   ├── category-industrial.jpg
│   ├── hero.jpg
│   ├── hero-2.jpg
│   ├── hero-3.jpg
│   └── product images
│
├── components/
│   │
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   └── ContactInfo.tsx
│   │
│   ├── home/
│   │   ├── AboutSection.tsx
│   │   ├── AnalyticsSection.tsx
│   │   ├── FeaturedCategories.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServiceShowcase.tsx
│   │   └── TrendingProducts.tsx
│   │
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── PageShell.tsx
│   │   └── ScrollToTop.tsx
│   │
│   └── services/
│       └── ServiceCards.tsx
│
├── data/
│   ├── contact.ts
│   ├── navigation.ts
│   ├── products.ts
│   └── services.ts
│
├── pages/
│   ├── AISolutions.tsx
│   ├── AboutUs.tsx
│   ├── ContactUs.tsx
│   ├── Home.tsx
│   ├── ServiceDetail.tsx
│   └── Services.tsx
│
├── types/
│   └── contact.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

## Main Website Sections

### Home

The home page combines several reusable sections, including:

- Hero presentation
- Featured categories
- Trending products
- Business services
- Analytics
- Company introduction

### Product Categories

The website visually presents multiple trading categories including:

- Electronics
- Fashion
- Home products
- Industrial products

### Services

The services section presents the company's business offerings through reusable service cards and dedicated service detail pages.

### AI Solutions

A dedicated AI Solutions page presents technology-focused services and demonstrates how modern digital solutions can complement trading and business operations.

### About Us

Provides information about the company, its purpose, and its business identity.

### Contact Us

Includes reusable contact information and contact form components to provide a clear communication channel for potential customers and business partners.

## Getting Started

### Prerequisites

Install:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/gaaferali/static-website-trading-.git
```

Navigate into the project:

```bash
cd static-website-trading-
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Production Build

Create the production build:

```bash
npm run build
```

Preview the generated build:

```bash
npm run preview
```

## Linting

Check the project for code-quality issues:

```bash
npm run lint
```

## Architecture

The project follows a modular frontend structure:

- **Pages** define the main application routes.
- **Components** provide reusable interface elements.
- **Data** separates product, navigation, service, and contact information from UI code.
- **Types** define TypeScript interfaces for structured data.
- **Assets** contain the visual resources used throughout the application.

This structure makes the website easier to maintain, extend, and scale as additional products, services, and pages are introduced.

## Purpose

Aurora Trade demonstrates the development of a modern trading and corporate website using React and TypeScript.

The project focuses on responsive web design, reusable component architecture, structured data management, client-side routing, product presentation, and maintainable frontend development.

