import { exec } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

// Search for files that might be generating the static site
async function findStaticSiteGenerator() {
  console.log("Searching for files that generate the static site...");
  
  // Search for files containing "generateStaticSite" function
  exec('grep -r "generateStaticSite" --include="*.js" --include="*.mjs" --include="*.ts" .', async (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    
    console.log("Files that reference generateStaticSite:");
    console.log(stdout);
    
    // Check for files that might contain unsplash image links
    exec('grep -r "unsplash.com" --include="*.js" --include="*.mjs" --include="*.ts" .', async (error, stdout, stderr) => {
      if (error && error.code !== 1) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
      }
      
      console.log("\nFiles that reference unsplash.com:");
      console.log(stdout || "No files found");
      
      // Search for files that might contain our facility card html generation
      exec('grep -r "facility-card card h-100 shadow-sm" --include="*.js" --include="*.mjs" --include="*.ts" .', async (error, stdout, stderr) => {
        if (error && error.code !== 1) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Stderr: ${stderr}`);
          return;
        }
        
        console.log("\nFiles that contain facility card HTML generation:");
        console.log(stdout || "No files found");
      });
    });
  });
}

findStaticSiteGenerator();