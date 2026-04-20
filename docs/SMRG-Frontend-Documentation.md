# SMRG Frontend Documentation (Notion / PDF Ready)

## Project Overview

**Project Name:** SMRG
**Type:** Academic Research Platform (Frontend Only)
**Tech Stack:** Next.js
**UI Generation Tool:** Google Stitch
**Reference Website:**
https://smrg-next.vercel.app/

## Objective

Recreate the reference website:
- Same UI/UX
- Same content
- Same navigation structure

Exception:
- If a page is missing in the reference, show "Coming Soon"

## Scope

### Included
- Full UI development
- Static pages
- Responsive design
- Journals API integration
- Reusable components

### Not Included
- Backend
- Authentication logic
- Database
- CMS

## Navigation Structure

Home
About Us
Open Access
Journals
Explore
Submission
Dashboard
Guidelines
Services
Publisher Policies
Careers
Contact Us
User Account (Login/Register)

## Page Requirements

### Home Page
Goal: Match the reference layout and spacing. Content below is placeholder and can be replaced later.

#### Section 1: Top Bar + Navbar
- Logo (left)
- Main nav links (center)
- Auth buttons (right): Login, Sign Up

#### Section 2: Hero
- Badge: "Trusted by 10,000+ readers worldwide"
- Headline: "Explore Books & Journals That Inspire Minds"
- Subtext: short paragraph describing SMRG publications
- Primary CTA: "Browse Publications"
- Secondary CTA: "Learn More"
- Right side: Stats cards grid (4 cards)
  - 1,200+ Publications
  - 340+ Authors
  - 48 Journals
  - 10K+ Readers

#### Section 3: Benefits Strip
- Horizontal bar with 4 short highlights
  - Free Worldwide Shipping
  - 25+ Years of Publishing
  - Expert Peer-Reviewed Content
  - 48 Active Journals

#### Section 4: Featured Publications
- Title: "Featured Publications"
- Subtext: "Hand-picked by our editorial team"
- Right-side link: "View all"
- Grid: 3 columns desktop, 2 tablet, 1 mobile
- Card content:
  - Cover image
  - Journal title
  - Publisher name
  - Optional tags: "Reviewer", "Editor"

#### Section 5: About Preview
- Title: "25 Years of Sharing Knowledge with the World"
- Description paragraph
- CTA: "Learn About Us"
- Right side: 4 stats cards
  - 25+ Years of publishing
  - 48 Active journals
  - 340+ Expert authors
  - Global distribution reach

#### Section 6: Footer
- Left: SMRG Publications
- Right: Privacy, Terms, Contact

### About Us
- Organization info
- Mission / Vision

### Journals (Dynamic)
**API:**
https://smrg.arditsonline.com/api/home/journals

**UI Requirements:**
- Page header: "Journals" with short subtext
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Journal cards:
  - Cover image (use API image)
  - Title
  - Publisher name
  - Optional action pills: "Reviewer", "Editor" (static)
- Card spacing, rounded corners, soft shadow
- Loading state: skeleton cards
- Error state: short message + retry button

**Sample Response:**
```
{
  "status": true,
  "message": "Home page journals fetched successfully.",
  "data": [
    {
      "id": 1,
      "title": "The Journal of advanced Pharmacy Education & Research",
      "slug": "the-journal-of-advanced-pharmacy-education-research",
      "image": "https://smrg.arditsonline.com/public/admin/Journal_Images/3601767783787.jpeg",
      "publisher_name": "SMRG"
    },
    {
      "id": 2,
      "title": "Innovations in Intelligent Medicine and Healthcare Systems",
      "slug": "innovations-in-intelligent-medicine-and-healthcare-systems",
      "image": "https://smrg.arditsonline.com/public/admin/Journal_Images/4531768295389.jpeg",
      "publisher_name": "SMRG"
    }
  ]
}
```

### Open Access
- If exists in reference, replicate
- Else show Coming Soon

### Explore Pages
- Articles
- Hypotheses
- Lab Tours
- Videos
- Discussions
- Slides
- Missing pages: show Coming Soon

### Submission
- Article
- Hypothesis
- Lab Tour
- Video
- Discussion
- Slides
- UI only

### Dashboard
- Sidebar layout
- Placeholder data
- Missing pages: show Coming Soon

### Guidelines
- Author
- Editor
- Reviewer
- Hypothesis
- Media Annex
- Use accordion

### Services
- Membership
- Advertisement
- Writing Support
- Video Production
- Graphics Design

### Policies
- Static content page

### Careers
- Job cards with roles

### Contact
- Form UI
- Contact info
- Map placeholder

### Auth Pages
- Login
- Register

## Design System

### Colors
Primary: #0B5ED7
Secondary: #FFFFFF
Background: Light Blue
Text: #1A1A1A

### Typography
- Font: Inter / Poppins
- Clean hierarchy

### UI Style
- Card-based layout
- Rounded corners
- Soft shadows
- Minimal design

## Components
- Navbar (dropdown)
- Footer
- Cards
- Buttons
- Forms
- Sidebar

## Responsiveness

### Breakpoints
- Mobile
- Tablet
- Desktop

### Behavior
- Navbar -> hamburger
- Grid -> responsive
- Cards -> stacked

## API Integration

GET https://smrg.arditsonline.com/api/home/journals

### Rules
- Server-side fetch
- Handle loading + error

## Routing (Next.js)

/
/about
/journals
/open-access
/explore/*
/submission/*
/dashboard/*
/guidelines/*
/services
/policies
/careers
/contact
/login
/register

## Google Stitch Workflow

1. Paste master prompt
2. Generate UI per page
3. Export code
4. Integrate into Next.js

## Missing Pages Rule

Show:
```
Coming Soon
This page is under development.
```

## Development Workflow

1. Setup Next.js project
2. Generate UI (Google Stitch)
3. Build components
4. Create pages
5. Integrate API
6. Make responsive
7. Deploy

## Deployment

Recommended: Vercel

## Rules
- Match reference closely
- Keep UI consistent
- Avoid over-design
- Focus on clarity

## How To Use In Notion

1. Open Notion
2. Create new page
3. Paste this document
4. Convert sections into headings and toggles
5. Export -> PDF
