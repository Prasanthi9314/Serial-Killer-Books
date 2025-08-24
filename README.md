# Serial Killer Books Web App

This project is a simple static website for exploring books by and about serial killers, as well as information about famous serial killers themselves.

## Features
- Browse a list of authors and their books (with cover images, ratings, and descriptions)
- View details about each author and their works
- Explore a gallery of infamous serial killers, with photos and case details

## Folder Structure
- `index.html` - Home page
- `authors.html` - List of authors
- `author.html` - Author detail page
- `serial-killers.html` - Serial killer gallery
- `app.js` - Main JavaScript file containing all data and rendering logic
- `styles.css` - Main stylesheet

## How to Use
1. Open `index.html` in your browser to start exploring.
2. Navigate using the menu to view authors, books, or serial killers.
3. All data and images are loaded from the `app.js` file and external image URLs.

## Customization
- To add or update authors, books, or serial killers, edit the `AUTHORS` and `SERIAL_KILLERS` arrays in `app.js`.
- To change styles, edit `styles.css`.
- To update book or killer images, use direct image URLs or host your own images and update the `cover` or `photo` fields.

## Notes
- For best results, use direct image URLs that allow hotlinking, or host images locally.
- This project is static and does not require a server or build process.

---
Created by [Your Name].
