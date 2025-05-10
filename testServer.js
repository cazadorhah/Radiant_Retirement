import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3002;

// List files in the static-site directory
const staticSitePath = path.join(__dirname, 'static-site');
console.log('Contents of static-site directory:');
fs.readdir(staticSitePath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  
  files.forEach(file => {
    const filePath = path.join(staticSitePath, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      console.log(`${file}/ (directory)`);
    } else {
      console.log(`${file} (${stats.size} bytes)`);
    }
  });
});

// Directly serve resources.html on a specific route to test
app.get('/test-resources', (req, res) => {
  const resourcesPath = path.join(__dirname, 'static-site', 'resources.html');
  console.log(`Serving resources.html from: ${resourcesPath}`);
  
  // Check if the file exists
  if (fs.existsSync(resourcesPath)) {
    console.log('File exists, sending it...');
    res.sendFile(resourcesPath);
  } else {
    console.log('File does not exist!');
    res.status(404).send('File not found');
  }
});

// Basic static file server
app.use(express.static(path.join(__dirname, 'static-site')));

app.listen(PORT, () => {
  console.log(`Test server running at http://localhost:${PORT}`);
  console.log(`To test resources.html directly, visit http://localhost:${PORT}/test-resources`);
});