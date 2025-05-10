import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Serve the static site from the static-site directory
console.log(`Static files directory: ${path.join(__dirname, 'static-site')}`);
app.use(express.static(path.join(__dirname, 'static-site'), {
  // Set Cache-Control header to no-cache during development
  setHeaders: (res, filePath) => {
    if (path.extname(filePath) === '.html') {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

// Check if the file exists, and if it doesn't, serve index.html
app.get('*', (req, res) => {
  console.log(`Received request for: ${req.url}`);
  
  // Handle root request
  if (req.url === '/') {
    console.log('Serving index.html for root request');
    res.sendFile(path.join(__dirname, 'static-site', 'index.html'));
    return;
  }
  
  // If the request doesn't include an extension, check if it's a direct HTML file
  if (!req.url.includes('.')) {
    const htmlPath = path.join(__dirname, 'static-site', `${req.url}.html`);
    console.log(`Checking for HTML file at: ${htmlPath}`);
    
    // Try to send the HTML file
    res.sendFile(htmlPath, (err) => {
      if (err) {
        console.log(`File not found: ${htmlPath}`);
        res.sendFile(path.join(__dirname, 'static-site', 'index.html'));
      }
    });
    return;
  }
  
  // For direct file requests
  const filePath = path.join(__dirname, 'static-site', req.url);
  console.log(`Checking for file at: ${filePath}`);
  
  // Try to send the file
  res.sendFile(filePath, (err) => {
    if (err) {
      console.log(`File not found: ${filePath}`);
      res.sendFile(path.join(__dirname, 'static-site', 'index.html'));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Static site server running at http://localhost:${PORT}`);
});