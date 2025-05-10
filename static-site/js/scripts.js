/**
 * Radiant Retirement - Senior Living Directory
 * Main JavaScript functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Enable Bootstrap tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  // Enable Bootstrap popovers
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
  
  // Form validation
  const forms = document.querySelectorAll('.needs-validation');
  
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        
        // Simulate form submission - in a real implementation this would send data to a server
        const formSuccessMessage = document.getElementById('form-success');
        const formErrorMessage = document.getElementById('form-error');
        
        if (formSuccessMessage && formErrorMessage) {
          // Simulate a slight delay and 90% success rate for demo purposes
          const success = Math.random() > 0.1;
          
          setTimeout(function() {
            if (success) {
              formSuccessMessage.classList.remove('d-none');
              form.reset();
            } else {
              formErrorMessage.classList.remove('d-none');
            }
            
            // Hide alert after 5 seconds
            setTimeout(function() {
              formSuccessMessage.classList.add('d-none');
              formErrorMessage.classList.add('d-none');
            }, 5000);
          }, 1000);
        }
      }
      
      form.classList.add('was-validated');
    }, false);
  });
  
  // Handle search form in header
  const searchForm = document.getElementById('search-facilities-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const city = document.getElementById('city-input').value.trim();
      const state = document.getElementById('state-select').value;
      
      if (!city && !state) {
        alert('Please enter a city name or select a state to search.');
        return;
      }
      
      // In a real implementation, this would redirect to search results
      // For this static site generator demo, we'll redirect to specific pages if possible
      
      if (city && state) {
        // Try to construct a city slug and redirect to city page
        const citySlug = city.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const stateSlug = state.toLowerCase();
        window.location.href = `/city/${citySlug}-${stateSlug}.html`;
      } else if (state) {
        // Just state provided, go to state browse page
        window.location.href = `/browse/${state.toLowerCase()}.html`;
      } else {
        // Just city, would go to search results in real implementation
        alert('Search functionality would filter results for: ' + city);
      }
    });
  }
  
  // Handle facility filtering
  const filterForm = document.getElementById('filter-form');
  if (filterForm) {
    filterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get all selected care types
      const selectedCareTypes = Array.from(filterForm.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
      
      // Get minimum rating value
      const minRating = parseFloat(document.getElementById('rating-filter').value) || 0;
      
      // Get all facility items
      const facilityItems = document.querySelectorAll('.facility-item');
      
      // For a static demo, we'll randomly hide/show facilities based on filter
      // In a real implementation, this would use actual facility data attributes
      
      let visibleCount = 0;
      
      facilityItems.forEach(facilityItem => {
        // Get facility data (in a real implementation, these would be data attributes)
        // For demo, we'll determine visibility semi-randomly
        
        const facilityVisible = (selectedCareTypes.length === 0 || Math.random() < 0.7) && 
                               (minRating === 0 || Math.random() < (5 - minRating) / 2);
        
        if (facilityVisible) {
          facilityItem.style.display = '';
          visibleCount++;
        } else {
          facilityItem.style.display = 'none';
        }
      });
      
      // Show a message if no facilities match the filter
      const noResultsMessage = document.getElementById('no-results-message');
      if (noResultsMessage) {
        if (visibleCount === 0) {
          noResultsMessage.classList.remove('d-none');
        } else {
          noResultsMessage.classList.add('d-none');
        }
      }
    });
  }
  
  // State page city filtering
  const citySearchForm = document.querySelector('.search-sidebar form');
  if (citySearchForm && window.location.pathname.includes('/browse/')) {
    citySearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const citySearch = document.getElementById('city-search').value.trim().toLowerCase();
      const populationFilter = parseInt(document.getElementById('population-filter').value) || 0;
      
      const cityCards = document.querySelectorAll('.city-card');
      let visibleCount = 0;
      
      cityCards.forEach(cityCard => {
        const cityName = cityCard.querySelector('.card-title').textContent.toLowerCase();
        const populationText = cityCard.querySelector('.text-muted').textContent;
        const population = parseInt(populationText.replace(/\D/g, '')) || 0;
        
        const matchesName = !citySearch || cityName.includes(citySearch);
        const matchesPopulation = population >= populationFilter;
        
        if (matchesName && matchesPopulation) {
          cityCard.closest('.col').style.display = '';
          visibleCount++;
        } else {
          cityCard.closest('.col').style.display = 'none';
        }
      });
      
      // Display message if no cities match
      const noResultsMessage = document.getElementById('no-cities-results');
      if (noResultsMessage) {
        if (visibleCount === 0) {
          noResultsMessage.classList.remove('d-none');
        } else {
          noResultsMessage.classList.add('d-none');
        }
      }
    });
  }
  
  // Auto-populate state dropdown options
  const stateSelect = document.getElementById('state-select');
  if (stateSelect && !stateSelect.options.length) {
    const states = [
      { code: 'AL', name: 'Alabama' },
      { code: 'AK', name: 'Alaska' },
      { code: 'AZ', name: 'Arizona' },
      { code: 'AR', name: 'Arkansas' },
      { code: 'CA', name: 'California' },
      { code: 'CO', name: 'Colorado' },
      { code: 'CT', name: 'Connecticut' },
      { code: 'DE', name: 'Delaware' },
      { code: 'FL', name: 'Florida' },
      { code: 'GA', name: 'Georgia' },
      { code: 'HI', name: 'Hawaii' },
      { code: 'ID', name: 'Idaho' },
      { code: 'IL', name: 'Illinois' },
      { code: 'IN', name: 'Indiana' },
      { code: 'IA', name: 'Iowa' },
      { code: 'KS', name: 'Kansas' },
      { code: 'KY', name: 'Kentucky' },
      { code: 'LA', name: 'Louisiana' },
      { code: 'ME', name: 'Maine' },
      { code: 'MD', name: 'Maryland' },
      { code: 'MA', name: 'Massachusetts' },
      { code: 'MI', name: 'Michigan' },
      { code: 'MN', name: 'Minnesota' },
      { code: 'MS', name: 'Mississippi' },
      { code: 'MO', name: 'Missouri' },
      { code: 'MT', name: 'Montana' },
      { code: 'NE', name: 'Nebraska' },
      { code: 'NV', name: 'Nevada' },
      { code: 'NH', name: 'New Hampshire' },
      { code: 'NJ', name: 'New Jersey' },
      { code: 'NM', name: 'New Mexico' },
      { code: 'NY', name: 'New York' },
      { code: 'NC', name: 'North Carolina' },
      { code: 'ND', name: 'North Dakota' },
      { code: 'OH', name: 'Ohio' },
      { code: 'OK', name: 'Oklahoma' },
      { code: 'OR', name: 'Oregon' },
      { code: 'PA', name: 'Pennsylvania' },
      { code: 'RI', name: 'Rhode Island' },
      { code: 'SC', name: 'South Carolina' },
      { code: 'SD', name: 'South Dakota' },
      { code: 'TN', name: 'Tennessee' },
      { code: 'TX', name: 'Texas' },
      { code: 'UT', name: 'Utah' },
      { code: 'VT', name: 'Vermont' },
      { code: 'VA', name: 'Virginia' },
      { code: 'WA', name: 'Washington' },
      { code: 'WV', name: 'West Virginia' },
      { code: 'WI', name: 'Wisconsin' },
      { code: 'WY', name: 'Wyoming' },
      { code: 'DC', name: 'District of Columbia' }
    ];
    
    // First option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select state...';
    stateSelect.appendChild(defaultOption);
    
    // Add all states
    states.forEach(state => {
      const option = document.createElement('option');
      option.value = state.code;
      option.textContent = state.name;
      stateSelect.appendChild(option);
    });
  }
  
  // Initialize maps if available (would use actual mapping library in production)
  const mapElements = document.querySelectorAll('.city-map, #contact-map');
  if (mapElements.length) {
    mapElements.forEach(mapElement => {
      // In a real implementation, this would initialize a map
      // For our static site demo, we'll just show a message
      const mapMessage = document.createElement('div');
      mapMessage.className = 'd-flex justify-content-center align-items-center h-100';
      mapMessage.innerHTML = '<p class="text-center p-4">Interactive map would be displayed here.<br>This placeholder represents where the map would be rendered using a JavaScript mapping library.</p>';
      
      mapElement.innerHTML = '';
      mapElement.appendChild(mapMessage);
    });
  }
});