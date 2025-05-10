// Simple Express server to serve static files
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;

const staticPath = path.join(__dirname, 'static-site');
console.log(`Serving static files from: ${staticPath}`);

// Serve static files
app.use(express.static(staticPath));

// Serve HTML files directly when requested
app.get('*.html', (req, res) => {
  const htmlFile = path.join(staticPath, req.path);
  console.log(`HTML request for: ${req.path} -> ${htmlFile}`);
  res.sendFile(htmlFile);
});

// For directory/section routes that don't end with .html
app.get('*', (req, res) => {
  // Check if this is a request to a directory (like /resources/ or /resources)
  const urlPath = req.path.endsWith('/') ? 
    req.path.slice(0, -1) : 
    req.path;
  
  if (urlPath === '') {
    // For the root URL
    res.sendFile(path.join(staticPath, 'index.html'));
    return;
  }
  
  // Try to find an index.html file in that directory first
  const dirIndexPath = path.join(staticPath, urlPath, 'index.html');
  const htmlPath = path.join(staticPath, `${urlPath}.html`);
  
  console.log(`Checking for: ${dirIndexPath} or ${htmlPath}`);
  
  // Try the directory index.html first, then urlPath.html, then fall back to main index
  res.sendFile(dirIndexPath, (err) => {
    if (err) {
      res.sendFile(htmlPath, (err) => {
        if (err) {
          res.sendFile(path.join(staticPath, 'index.html'));
        }
      });
    }
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Simple static server running at http://0.0.0.0:${PORT}`);
});