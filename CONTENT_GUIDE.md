# Content Guide: Updating Portfolio

This guide explains how to update your portfolio content by modifying JSON files or replacing files in the `public/` directory.

## 1. JSON Data Files (Located in `src/data/`)

You can edit these files to update text, links, or lists of items. **Do not modify the structure** of the JSON (don't add or remove fields unless you also update `src/types/content.ts`).

### Content Breakdown
*   **`personal.json`**: Update name, bio, job title, and statistics.
*   **`education.json`**: Add/edit education entries.
*   **`experience.json`**: Add/edit professional experience.
*   **`skills.json`**: Update skill categories and items.
*   **`projects.json`**: Add/edit projects.
*   **`certificates.json`**: Add/edit certificates.
*   **`achievements.json`**: Add/edit achievements.
*   **`contact.json`**: Update contact info.
*   **`social.json`**: Update social media links.
*   **`seo.json`**: Update meta tags for SEO.

## 2. Replacing Assets (Located in `public/`)

Simply replace the existing file with a new one of the same name and format.

*   **Profile Images:** Replace images in `/public/profile/`.
*   **Logo:** Replace images in `/public/logo/` (ensure naming conventions `logo.png`, `logo-dark.png`, `logo-light.png` are maintained).
*   **Resume:** Replace `/public/resume/Anandhu_Jayan_Resume.pdf`.
*   **Certificates/Projects:** Add or replace images in `/public/certificates/` or `/public/projects/`.

## 3. Favicon
*   Replace `/public/favicon.ico`.
