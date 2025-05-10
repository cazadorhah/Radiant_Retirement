import fs from 'fs/promises';

async function checkFacilityCards() {
  console.log("Checking facility cards in the static site HTML...");
  
  // Read a city page HTML
  const cityHtml = await fs.readFile('./static-site/city/philadelphia-pa.html', 'utf8');
  
  // Extract a facility card
  const facilityCardRegex = /<div class="facility-card card h-100 shadow-sm">([\s\S]*?)<\/div>\s*<\/div>/g;
  const facilityCards = [];
  let match;
  
  while ((match = facilityCardRegex.exec(cityHtml)) !== null) {
    facilityCards.push(match[0]);
  }
  
  if (facilityCards.length === 0) {
    console.log("No facility cards found in the HTML");
    return;
  }
  
  console.log(`Found ${facilityCards.length} facility cards`);
  console.log("\nHere's the first facility card:");
  console.log("==================================");
  console.log(facilityCards[0].substring(0, 500) + "...");
  
  // Now let's check if it has an image tag
  const imgRegex = /<img.*?src="(.*?)".*?>/;
  const imgMatch = imgRegex.exec(facilityCards[0]);
  
  if (imgMatch) {
    console.log("\nImage found in facility card:");
    console.log(imgMatch[0]);
    console.log("Source:", imgMatch[1]);
  } else {
    console.log("\nNo image found in facility card");
  }
  
  // Let's also check the structure versus the template in staticSiteGenerator.js
  // Read the staticSiteGenerator.js file
  try {
    const staticSiteGeneratorContent = await fs.readFile('./server/staticSiteGenerator.js', 'utf8');
    
    // Find the facilityCard template
    const templateRegex = /facilityCard: \(facility\) => {([\s\S]*?)return `([\s\S]*?)`\s*,/;
    const templateMatch = templateRegex.exec(staticSiteGeneratorContent);
    
    if (templateMatch) {
      console.log("\nFound facility card template in staticSiteGenerator.js:");
      console.log("==================================");
      console.log(templateMatch[2].substring(0, 500) + "...");
      
      // Check if the template has an img tag
      const templateImgMatch = imgRegex.exec(templateMatch[2]);
      if (templateImgMatch) {
        console.log("\nImage found in template:");
        console.log(templateImgMatch[0]);
      } else {
        console.log("\nNo image found in template");
      }
    } else {
      console.log("\nCould not find facility card template in staticSiteGenerator.js");
    }
  } catch (error) {
    console.error("Error reading staticSiteGenerator.js:", error);
  }
}

checkFacilityCards().catch(console.error);