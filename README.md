# Dishari Academy — School Website + Management System

This ZIP contains a ready-to-preview static school website and a browser-based demo Admin Dashboard using the supplied Dishari Academy photos.

## Included
- `index.html` — public school website
- `admin.html` — Admin Dashboard
- `style.css`, `script.js` — public website styling/logic
- `admin.css`, `admin.js` — management dashboard styling/logic
- `assets/` — supplied school logo, posters and activity photos
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest`

## Demo Admin Login
Email: `admin@dishariacademy.local`
Password: `admin123`

The demo stores student/teacher/notice changes in the browser's localStorage. It is NOT a production multi-user backend yet.

## Run
Open `index.html` in a browser, or upload the whole folder to Netlify/GitHub Pages.

## Before real school use
1. Replace demo student/teacher data with the school's real data.
2. Connect a secure backend/database (Supabase/PostgreSQL/Firebase or PHP/MySQL).
3. Implement server-side authentication and role permissions.
4. Store student documents/photos securely.
5. Add the school's approved official content, fees, policies, affiliations and academic claims.
6. Replace `example.com` in canonical URL, `robots.txt` and `sitemap.xml` with the real domain.
7. Verify the domain in Google Search Console and submit `sitemap.xml`.
8. Do not publish student personal data/photos without the school's required permissions.

## Important
The website uses only information visible in the supplied images for school-specific facts. Any demo counts, sample names, fees and notices are clearly illustrative and should be replaced with official data.
