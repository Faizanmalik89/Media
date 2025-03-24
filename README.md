# MediaHub - Static Streaming Platform Template

A responsive, modern static website template for a streaming platform called MediaHub. This project is designed to be easily deployed on GitHub Pages.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Modern UI with hero sections, media cards, and interactive elements
- Multiple page templates: Home, Movies, TV Shows, and My List
- Interactive components including dropdowns, hover effects, and navigation
- Clean, well-organized CSS with CSS variables for easy customization

## Pages

- **Home**: Main landing page with featured content and content rows
- **Movies**: Page showcasing movie categories and selections
- **TV Shows**: Page displaying TV show categories and selections
- **My List**: Personal saved content page with empty and populated states

## Technologies Used

- HTML5
- CSS3 (with variables and responsive design)
- JavaScript (ES6)
- Font Awesome for icons
- Google Fonts (Roboto)

## How to Use

1. Clone this repository
2. Open any of the HTML files in your browser to view the static pages
3. Customize the content, images, and styling as needed
4. Deploy to GitHub Pages or any static web hosting platform (see DEPLOYMENT.md for detailed instructions)

## GitHub Pages Integration

This template includes a special GitHub Pages helper script (`js/github-pages.js`) that:

- Automatically detects when the site is running on GitHub Pages
- Adjusts resource paths as needed for GitHub Pages compatibility
- Provides fallback behaviors for GitHub Pages-specific issues
- Includes a custom 404 error page to improve user experience when pages aren't found

The script is already included in all HTML pages, so no additional setup is required for GitHub Pages deployment.

## Customization

The site uses CSS variables (in `css/styles.css`) for easy customization:

```css
:root {
  --primary: #E50914;
  --secondary: #000000;
  --background: #121212;
  --surface: #1E1E1E;
  --text-primary: #FFFFFF;
  --text-secondary: #E5E5E5;
  --accent: #4CAF50;
  --border-color: rgba(255, 255, 255, 0.1);
  --transition: 0.3s ease;
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
```

Change these values to update the color scheme across the entire site.

## License

This project is released as open source. Feel free to use, modify, and distribute as needed.