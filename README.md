# Radiant Retirement - Senior Living Directory

A comprehensive static website generator for creating a directory of senior living facilities across the top 1000 U.S. cities. The site includes detailed city pages, facility listings, search functionality, and informational resources.

## Features

- **Comprehensive Directory**: Browse senior living facilities across 1000 U.S. cities
- **Search Functionality**: Find facilities by city, state, or care type (Independent Living, Assisted Living, Memory Care, etc.)
- **Detailed City Pages**: Each city has a dedicated page with local statistics and facility listings
- **Facility Filtering**: Filter facilities by care type and rating
- **Interactive Maps**: Visual representation of facility locations (placeholder for implementation)
- **Contact Forms**: Forms with validation for inquiring about specific facilities
- **Responsive Design**: Fully responsive design using Bootstrap 5
- **SEO Optimized**: Proper meta tags, structured data, and SEO-friendly URLs
- **Accessibility Compliant**: Follows WCAG 2.1 AA standards

## Technical Implementation

- **Backend**: Node.js for generating static HTML files
- **Frontend**: Bootstrap 5 for responsive design
- **Data Source**: CSV file containing city data
- **Deployment**: Ready for static hosting on Netlify or similar platforms

## Directory Structure

The static site generator creates the following structure:

```
static-site/
│
├── index.html               # Homepage
├── about.html               # About Us page
├── contact.html             # Contact page
├── resources.html           # Resources page
├── robots.txt               # Search engine instructions
├── sitemap.xml              # XML sitemap for search engines
│
├── css/
│   └── styles.css           # Custom CSS styles
│
├── js/
│   └── scripts.js           # JavaScript functionality
│
├── img/
│   └── logo.svg             # Site logo (generated)
│
├── downloads/
│   └── ...                  # Downloadable resources (placeholder)
│
├── browse/
│   ├── index.html           # Browse by state listing
│   └── [state-code].html    # Individual state pages
│
└── city/
    └── [city-slug].html     # Individual city pages
```

## How to Generate the Static Site

1. Make sure Node.js is installed on your system
2. Install the required dependencies with `npm install`
3. Run the generator script:

```bash
node generateSite.js
```

4. The static site will be generated in the `static-site` directory
5. Deploy the contents of this directory to your web hosting platform

## Data Structure

The generator uses a CSV file (`data/cities.csv`) with the following structure:

- `city`: City name
- `state`: State abbreviation
- `population`: City population
- `state_name`: Full state name
- `slug`: URL-friendly version of city name

## Customization

You can customize the site appearance and content by modifying the templates in the `staticSiteGenerator.ts` file:

- `htmlTemplates`: Contains all the HTML templates for different page types
- `cssStyles`: Contains all the CSS styles for the site
- `jsScripts`: Contains JavaScript functionality

## Deployment

The generated static site can be deployed to any static hosting platform:

1. **Netlify**:
   - Create a new site from the Netlify dashboard
   - Upload the contents of the `static-site` directory
   - Set the build command to `node generateSite.js` if deploying from a Git repository

2. **GitHub Pages**:
   - Push the contents of the `static-site` directory to a GitHub repository
   - Enable GitHub Pages in the repository settings

3. **Other Hosting Services**:
   - Upload the contents of the `static-site` directory to your web server

## License

This project is licensed under the MIT License - see the LICENSE file for details.