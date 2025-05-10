import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3003;

// Add middleware to log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  next();
});

// Serve all HTML files with debugging header
app.use((req, res, next) => {
  const originalSend = res.send;
  res.send = function(body) {
    if (typeof body === 'string' && req.url.endsWith('.html')) {
      // Add debugging banner at the top of HTML pages
      const debugBanner = `
        <div style="background-color: #f8d7da; color: #721c24; padding: 10px; margin: 0; position: sticky; top: 0; z-index: 9999; text-align: center;">
          <strong>DEBUG INFO:</strong> Page loaded from ${req.url} at ${new Date().toISOString()}
        </div>
      `;
      body = body.replace('<body>', `<body>${debugBanner}`);
    }
    return originalSend.call(this, body);
  };
  next();
});

// Directly serve resources.html on a specific route to test
app.get('/test-resources', (req, res) => {
  const resourcesPath = path.join(__dirname, 'static-site', 'resources.html');
  console.log(`Serving resources.html from: ${resourcesPath}`);
  res.sendFile(resourcesPath);
});

// Serve static files
app.use(express.static(path.join(__dirname, 'static-site'), {
  setHeaders: (res, filePath) => {
    // Disable caching for HTML files during development
    if (path.extname(filePath) === '.html') {
      res.setHeader('Cache-Control', 'no-store, max-age=0');
    }
  }
}));

// For any other route, check if HTML file exists
app.get('*', (req, res) => {
  // If this is a direct .html request, it should have been caught by the static middleware
  if (req.url.endsWith('.html')) {
    console.log(`HTML file not found: ${req.url}`);
    res.status(404).send(`
      <html>
        <head><title>404 - Not Found</title></head>
        <body>
          <h1>404 - File Not Found</h1>
          <p>The requested file ${req.url} could not be found.</p>
          <p><a href="/">Return to Home</a></p>
        </body>
      </html>
    `);
    return;
  }
  
  // For paths without extensions, try mapping to html
  const htmlPath = path.join(__dirname, 'static-site', req.url === '/' ? 'index.html' : `${req.url}.html`);
  if (fs.existsSync(htmlPath)) {
    console.log(`Serving HTML file for path ${req.url}: ${htmlPath}`);
    res.sendFile(htmlPath);
  } else {
    // Fallback to index.html for SPA-like navigation
    console.log(`Falling back to index.html for: ${req.url}`);
    res.sendFile(path.join(__dirname, 'static-site', 'index.html'));
  }
});

app.listen(PORT, () => {
  console.log(`Debug server running at http://localhost:${PORT}`);
  console.log(`To test resources.html directly, visit http://localhost:${PORT}/test-resources`);
});