// Main JavaScript file for Roomian Realms documentation
document.addEventListener('DOMContentLoaded', function() {
    // Fetch the YAML data file
    fetch('data.yaml')
        .then(response => response.text())
        .then(yamlText => {
            // Parse the YAML data using js-yaml (loaded from CDN)
            const data = jsyaml.load(yamlText);
            
            // Populate the page with data
            populatePage(data);
        })
        .catch(error => {
            console.error('Error loading YAML data:', error);
            document.body.innerHTML = `<div class="error">Error loading data: ${error.message}</div>`;
        });
});

function populatePage(data) {
    // Set page title and header
    document.title = data.title + ' - ' + data.subtitle;
    document.getElementById('page-title').textContent = data.title;
    document.getElementById('page-subtitle').textContent = data.subtitle;
    
    // Set quote and intro text
    document.getElementById('quote-text').textContent = data.quote;
    document.getElementById('intro-text').textContent = data.intro_text;
    
    // Populate navigation links
    const navLinksContainer = document.getElementById('nav-links');
    data.links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.name;
        navLinksContainer.appendChild(linkElement);
        
        // Add separator except for the last item
        if (link !== data.links[data.links.length - 1]) {
            const separator = document.createElement('span');
            separator.textContent = ' | ';
            navLinksContainer.appendChild(separator);
        }
    });
    
    // Populate features
    const featuresContainer = document.getElementById('features-container');
    data.features.forEach(feature => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const title = document.createElement('h3');
        title.className = 'card-title';
        title.textContent = feature.title;
        
        const description = document.createElement('p');
        description.textContent = feature.description;
        
        card.appendChild(title);
        card.appendChild(description);
        
        if (feature.link && feature.link_text) {
            const link = document.createElement('a');
            link.href = feature.link;
            link.className = 'button';
            link.textContent = feature.link_text;
            card.appendChild(link);
        }
        
        featuresContainer.appendChild(card);
    });
    
    // Populate traits
    const traitsContainer = document.getElementById('traits-container');
    data.traits.forEach(trait => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const title = document.createElement('h3');
        title.className = 'card-title';
        title.textContent = trait.title;
        
        const description = document.createElement('p');
        description.textContent = trait.description;
        
        card.appendChild(title);
        card.appendChild(description);
        
        if (trait.link && trait.link_text) {
            const link = document.createElement('a');
            link.href = trait.link;
            link.className = 'button';
            link.textContent = trait.link_text;
            card.appendChild(link);
        }
        
        traitsContainer.appendChild(card);
    });
    
    // Populate deities
    const deitiesContainer = document.getElementById('deities-container');
    data.deities.forEach(deity => {
        const card = document.createElement('div');
        card.className = `card card-${deity.class}`;
        
        const title = document.createElement('h3');
        title.className = 'card-title';
        title.textContent = deity.name;
        
        const description = document.createElement('p');
        description.textContent = deity.description;
        
        const preferred = document.createElement('p');
        preferred.innerHTML = `<strong>Strongly preferred by:</strong> ${deity.preferred_by.join(', ')}`;
        
        const link = document.createElement('a');
        link.href = `docs/religious_section.html#${deity.anchor}`;
        link.className = 'button';
        link.textContent = 'Learn More';
        
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(preferred);
        card.appendChild(link);
        
        deitiesContainer.appendChild(card);
    });
    
    // Populate installation steps
    const installationContainer = document.getElementById('installation-list');
    data.installation.forEach(step => {
        const item = document.createElement('li');
        item.textContent = step;
        installationContainer.appendChild(item);
    });
    
    // Populate footer
    document.getElementById('footer-text').textContent = data.footer.text;
    document.getElementById('footer-disclaimer').textContent = data.footer.disclaimer;
}
