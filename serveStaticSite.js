import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Serve the static site from the static-site directory
app.use(express.static(path.join(__dirname, 'static-site')));

// For any other route, serve the index.html to support SPA-like navigation
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'static-site', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Static site server running at http://localhost:${PORT}`);
});