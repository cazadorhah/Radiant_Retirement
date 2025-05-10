import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if the resource page files exist at their expected paths
function checkResourceFiles() {
  const staticSitePath = path.join(__dirname, 'static-site');
  const resourcesPath = path.join(staticSitePath, 'resources');
  
  console.log('Checking static site directory:', staticSitePath);
  console.log('Exists:', fs.existsSync(staticSitePath));
  
  console.log('\nChecking resources directory:', resourcesPath);
  console.log('Exists:', fs.existsSync(resourcesPath));
  
  if (fs.existsSync(resourcesPath)) {
    console.log('\nResource files in resources directory:');
    const files = fs.readdirSync(resourcesPath);
    files.forEach(file => {
      const filePath = path.join(resourcesPath, file);
      console.log(`- ${file} (${fs.statSync(filePath).size} bytes)`);
    });
  }
  
  // Check each resource page file
  const resourcePages = [
    'senior-living-guide.html',
    'financial-assistance.html',
    'healthcare-resources.html',
    'retirement-planning.html',
    'caregiver-support.html'
  ];
  
  console.log('\nChecking each resource page file:');
  resourcePages.forEach(page => {
    const filePath = path.join(resourcesPath, page);
    console.log(`- ${page}: ${fs.existsSync(filePath) ? 'Found' : 'Not found'}`);
  });
  
  // Check if paths from resources.html are correct
  console.log('\nChecking if resources.html exists:');
  const resourcesHtmlPath = path.join(staticSitePath, 'resources.html');
  console.log(`- resources.html: ${fs.existsSync(resourcesHtmlPath) ? 'Found' : 'Not found'}`);
  
  if (fs.existsSync(resourcesHtmlPath)) {
    const resourcesHtml = fs.readFileSync(resourcesHtmlPath, 'utf8');
    
    // Extract href attributes pointing to resource pages
    const hrefRegex = /href="(resources\/[^"]+\.html)"/g;
    let match;
    const links = [];
    
    while ((match = hrefRegex.exec(resourcesHtml)) !== null) {
      links.push(match[1]);
    }
    
    console.log('\nLinks to resource pages found in resources.html:');
    links.forEach(link => {
      const linkPath = path.join(staticSitePath, link);
      console.log(`- ${link}: ${fs.existsSync(linkPath) ? 'Valid path' : 'Invalid path'}`);
    });
  }
}

checkResourceFiles();