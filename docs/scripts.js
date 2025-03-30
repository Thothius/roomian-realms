// Load JSON data
document.addEventListener('DOMContentLoaded', () => {
  fetch('rr_data.json')
    .then(response => response.json())
    .then(data => {
      // Update metadata
      updateMetadata(data.metadata);
      
      // Populate categories and races
      populateCategories(data.categories, data.races);
      
      // Populate deities
      populateDeities(data.deities);
      
      // Populate comparison tables
      populateComparisonTables(data.races);
      
      // Set up accordion functionality
      setupAccordion();
    })
    .catch(error => {
      console.error('Error loading data:', error);
      document.querySelector('main').innerHTML = `
        <div class="error-message">
          <h2>Error Loading Data</h2>
          <p>There was a problem loading the Roomian Realms data. Please try refreshing the page.</p>
          <p>Technical details: ${error.message}</p>
        </div>
      `;
    });
});

// Update metadata in the page
function updateMetadata(metadata) {
  document.getElementById('mod-title').textContent = metadata.title;
  document.getElementById('mod-version').textContent = `Version ${metadata.version}`;
  document.getElementById('mod-description').textContent = metadata.description;
  document.getElementById('last-updated').textContent = metadata.lastUpdated;
  document.title = `${metadata.title} - Race & Deity Information`;
}

// Populate categories and race cards
function populateCategories(categories, races) {
  const categoriesContainer = document.querySelector('.categories-container');
  
  categories.forEach(category => {
    // Create category card
    const categoryCard = document.createElement('div');
    categoryCard.className = `category-card ${category.id.toLowerCase()}`;
    
    // Set alignment class
    let alignmentClass = '';
    switch(category.alignment) {
      case 'Good': alignmentClass = 'good'; break;
      case 'Neutral': alignmentClass = 'neutral'; break;
      case 'Evil': alignmentClass = 'evil'; break;
      case 'Beyond Morality': alignmentClass = 'beyond'; break;
    }
    
    // Filter races that belong to this category
    const categoryRaces = races.filter(race => 
      category.members.includes(`${race.name} (${race.id})`)
    );
    
    // Create race cards HTML
    const raceCardsHTML = categoryRaces.map(race => {
      const traitBadges = race.traitHighlights.map(trait => 
        `<span class="race-trait">${trait}</span>`
      ).join('');
      
      return `
        <div class="race-card">
          <div class="race-card-banner" style="background-color: var(--${category.id.toLowerCase()})"></div>
          <div class="race-card-content">
            <h4>${race.name} (${race.id})</h4>
            <div class="race-deity">Primary Deity: ${race.primaryDeity}</div>
            <p>${race.shortDescription}</p>
            <div class="race-traits">
              ${traitBadges}
            </div>
          </div>
        </div>
      `;
    }).join('');
    
    // Populate category card
    categoryCard.innerHTML = `
      <h3>${category.name}</h3>
      <span class="alignment ${alignmentClass}">${category.alignment}</span>
      <p>${category.description}</p>
      <div class="race-cards">
        ${raceCardsHTML}
      </div>
    `;
    
    categoriesContainer.appendChild(categoryCard);
  });
}

// Populate deity cards
function populateDeities(deities) {
  const deityCardsContainer = document.querySelector('.deity-cards');
  
  deities.forEach(deity => {
    const deityDomains = deity.domains.map(domain => 
      `<span class="deity-domain">${domain}</span>`
    ).join('');
    
    const deityFollowers = deity.primaryFollowers.join(', ');
    
    const deityCard = document.createElement('div');
    deityCard.className = `deity-card deity-card-${deity.id.toLowerCase()}`;
    
    deityCard.innerHTML = `
      <div class="deity-card-content">
        <h3>${deity.name}</h3>
        <div class="deity-title">${deity.title}</div>
        <p>${deity.description}</p>
        <div class="deity-domains">
          ${deityDomains}
        </div>
        <div class="followers">
          <strong>Primary Followers:</strong> ${deityFollowers}
        </div>
        <div class="ritual">
          <div>Sacred Ritual: ${deity.sacredRitual}</div>
        </div>
      </div>
    `;
    
    deityCardsContainer.appendChild(deityCard);
  });
}

// Populate comparison tables
function populateComparisonTables(races) {
  // Physical Properties Table
  const physicalTable = document.getElementById('physical-properties-table').querySelector('tbody');
  races.forEach(race => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${race.name} (${race.id})</td>
      <td>${race.physicalProperties.height}</td>
      <td>${race.physicalProperties.width}</td>
      <td>${race.physicalProperties.adultAgeDays}</td>
      <td>
        ${race.physicalProperties.raidMercenary}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${race.physicalProperties.raidMercenary * 100}%"></div>
        </div>
      </td>
    `;
    physicalTable.appendChild(row);
  });
  
  // Social Behaviors Table
  const socialTable = document.getElementById('social-behaviors-table').querySelector('tbody');
  races.forEach(race => {
    const sb = race.socialBehaviors;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${race.name} (${race.id})</td>
      <td>
        ${sb.skinnyDips}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${sb.skinnyDips * 100}%"></div>
        </div>
      </td>
      <td>
        ${sb.slaveDriver}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${sb.slaveDriver * 100}%"></div>
        </div>
      </td>
      <td>
        ${sb.slaver}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${sb.slaver * 100}%"></div>
        </div>
      </td>
      <td>
        ${sb.execution}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${sb.execution * 100}%"></div>
        </div>
      </td>
      <td>
        ${sb.forestLover}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${sb.forestLover * 100}%"></div>
        </div>
      </td>
      <td>
        ${sb.bloodlust}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${sb.bloodlust * 100}%"></div>
        </div>
      </td>
      <td>
        ${sb.cruelty}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${sb.cruelty * 100}%"></div>
        </div>
      </td>
    `;
    socialTable.appendChild(row);
  });
  
  // Personality Traits Table
  const personalityTable = document.getElementById('personality-traits-table').querySelector('tbody');
  races.forEach(race => {
    const pt = race.personalityTraits;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${race.name} (${race.id})</td>
      <td>
        ${pt.discipline}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${pt.discipline * 100}%"></div>
        </div>
      </td>
      <td>
        ${pt.loyalty}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${pt.loyalty * 100}%"></div>
        </div>
      </td>
      <td>
        ${pt.pacifism}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${pt.pacifism * 100}%"></div>
        </div>
      </td>
      <td>
        ${pt.hedonism}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${pt.hedonism * 100}%"></div>
        </div>
      </td>
      <td>
        ${pt.ritualistic}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${pt.ritualistic * 100}%"></div>
        </div>
      </td>
      <td>
        ${pt.spiritual}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${pt.spiritual * 100}%"></div>
        </div>
      </td>
      <td>
        ${pt.intellectual}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${pt.intellectual * 100}%"></div>
        </div>
      </td>
    `;
    personalityTable.appendChild(row);
  });
  
  // Work & Combat Table
  const workCombatTable = document.getElementById('work-combat-table').querySelector('tbody');
  races.forEach(race => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${race.name} (${race.id})</td>
      <td>${race.workPreferences.military}</td>
      <td>${race.workPreferences.crafting}</td>
      <td>${race.workPreferences.farming}</td>
      <td>${race.workPreferences.administration}</td>
      <td>
        ${race.combat.archery}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${race.combat.archery * 100}%"></div>
        </div>
      </td>
      <td>
        ${race.combat.battleProwess}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${race.combat.battleProwess * 100}%"></div>
        </div>
      </td>
      <td>${race.combat.preferredArmor}</td>
      <td>${race.combat.preferredWeapons}</td>
    `;
    workCombatTable.appendChild(row);
  });
  
  // Preferences Table
  const preferencesTable = document.getElementById('preferences-table').querySelector('tbody');
  races.forEach(race => {
    const ep = race.preferences.environmentalPreferences;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${race.name} (${race.id})</td>
      <td>${race.preferences.foods.join(', ')}</td>
      <td>${race.preferences.favoriteDrink}</td>
      <td>
        ${ep.cold}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${ep.cold * 100}%"></div>
        </div>
      </td>
      <td>
        ${ep.temperate}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${ep.temperate * 100}%"></div>
        </div>
      </td>
      <td>
        ${ep.hot}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${ep.hot * 100}%"></div>
        </div>
      </td>
      <td>
        ${ep.mountain}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${ep.mountain * 100}%"></div>
        </div>
      </td>
      <td>
        ${ep.forest}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${ep.forest * 100}%"></div>
        </div>
      </td>
    `;
    preferencesTable.appendChild(row);
  });
  
  // Population & Relations Table
  const populationTable = document.getElementById('population-relations-table').querySelector('tbody');
  races.forEach(race => {
    const pop = race.population;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${race.name} (${race.id})</td>
      <td>
        ${pop.maxPopulation}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${pop.maxPopulation * 100}%"></div>
        </div>
      </td>
      <td>
        ${pop.growthRate}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${pop.growthRate * 100 * 10}%"></div>
        </div>
      </td>
      <td>
        ${pop.immigrationRate}
        <div class="value-bar">
          <div class="value-bar-fill" style="width: ${pop.immigrationRate * 100}%"></div>
        </div>
      </td>
      <td>${race.relations.mostFriendlyWith}</td>
      <td>${race.relations.mostHostileTo}</td>
    `;
    populationTable.appendChild(row);
  });
}

// Set up accordion functionality
function setupAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    
    header.addEventListener('click', () => {
      // Close all other accordion items
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-content').style.maxHeight = '0';
        }
      });
      
      // Toggle the clicked item
      item.classList.toggle('active');
      
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });
  
  // Open the first accordion by default
  if (accordionItems.length > 0) {
    accordionItems[0].classList.add('active');
    accordionItems[0].querySelector('.accordion-content').style.maxHeight = 
      accordionItems[0].querySelector('.accordion-content').scrollHeight + 'px';
  }
}
