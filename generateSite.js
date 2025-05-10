const { generateStaticSite } = import('./server/staticSiteGenerator');

// Run the generator
generateStaticSite()
  .then(outputDir => {
    console.log(`Static site generated successfully in ${outputDir}`);
    console.log('You can now deploy these files to Netlify or any static hosting service.');
  })
  .catch(error => {
    console.error('Error generating static site:', error);
    process.exit(1);
  });
