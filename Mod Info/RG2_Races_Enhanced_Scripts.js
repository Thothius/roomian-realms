// RG2 Race Documentation Enhanced Scripts - RPG Edition

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize search and filter functionality
    initializeSearchAndFilter();
    
    // Add scroll effects
    initializeScrollEffects();
    
    // Initialize view toggle
    initializeViewToggle();
    
    // Load race content from external files
    loadRaceContent();
});

// Function to toggle between grid and list views
function toggleView(viewType) {
    const raceContainer = document.querySelector('.race-grid');
    const gridBtn = document.getElementById('grid-view');
    const listBtn = document.getElementById('list-view');
    
    if (viewType === 'grid') {
        raceContainer.classList.remove('race-list');
        raceContainer.classList.add('race-grid');
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
        localStorage.setItem('raceView', 'grid');
    } else {
        raceContainer.classList.remove('race-grid');
        raceContainer.classList.add('race-list');
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
        localStorage.setItem('raceView', 'list');
    }
}

// Initialize view toggle based on saved preference
function initializeViewToggle() {
    const savedView = localStorage.getItem('raceView') || 'grid';
    toggleView(savedView);
}

// Function to handle tab switching
function openTab(evt, tabName, raceId) {
    // Get all tab content elements for this race
    const tabContents = document.querySelectorAll(`#${raceId} .tab-content`);
    
    // Hide all tab contents
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll(`#${raceId} .race-tab`);
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show the selected tab content and mark the button as active
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
    
    // Add parchment animation effect
    document.getElementById(tabName).style.animation = 'none';
    setTimeout(() => {
        document.getElementById(tabName).style.animation = 'fadeIn 0.5s';
    }, 10);
}

// Function to toggle section visibility
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const button = section.previousElementSibling.querySelector('.toggle-btn');
    
    if (section.style.display === 'none') {
        section.style.display = 'block';
        button.innerHTML = '−';
        section.style.animation = 'fadeIn 0.5s';
    } else {
        section.style.display = 'none';
        button.innerHTML = '+';
    }
}

// Initialize search and filter functionality
function initializeSearchAndFilter() {
    const searchInput = document.getElementById('race-search');
    const religionFilter = document.getElementById('religion-filter');
    
    // Add event listeners
    searchInput.addEventListener('input', filterRaces);
    religionFilter.addEventListener('change', filterRaces);
    
    // Initial filtering
    filterRaces();
}

// Filter races based on search input and religion filter
function filterRaces() {
    const searchInput = document.getElementById('race-search');
    const religionFilter = document.getElementById('religion-filter');
    const searchTerm = searchInput.value.toLowerCase();
    const religionValue = religionFilter.value;
    
    // Get all race cards
    const raceCards = document.querySelectorAll('.race-card');
    
    // Filter race cards
    raceCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        const cardReligion = card.getAttribute('data-religion');
        const matchesSearch = cardText.includes(searchTerm);
        const matchesReligion = religionValue === 'all' || cardReligion === religionValue;
        
        // Show or hide based on filters
        if (matchesSearch && matchesReligion) {
            card.parentElement.style.display = 'block';
            // Add a subtle fade-in effect
            card.style.animation = 'fadeIn 0.5s';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
    
    // Show message if no results
    const raceGrid = document.querySelector('.race-grid');
    const noResultsMsg = document.getElementById('no-results-message');
    
    // Count visible cards
    const visibleCards = document.querySelectorAll('.race-card[style="display: block"]').length;
    
    if (visibleCards === 0) {
        // Create message if it doesn't exist
        if (!noResultsMsg) {
            const message = document.createElement('div');
            message.id = 'no-results-message';
            message.className = 'no-results';
            message.innerHTML = `<i class="fas fa-scroll"></i><p>No races found in the ancient texts. Try different search terms or filters.</p>`;
            raceGrid.parentNode.insertBefore(message, raceGrid.nextSibling);
        } else {
            noResultsMsg.style.display = 'block';
        }
    } else if (noResultsMsg) {
        noResultsMsg.style.display = 'none';
    }
}

// Add scroll effects
function initializeScrollEffects() {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Add parallax effect to header
        const header = document.querySelector('.header');
        if (header) {
            header.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
        }
        
        // Add fade-in effect to race cards as they come into view
        const raceCards = document.querySelectorAll('.race-card');
        raceCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.classList.add('visible');
            }
        });
    });
}

// Load race content from external files
function loadRaceContent() {
    // Load Bloodelves content
    fetch('RG2_Races_Bloodelves.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('cantor').innerHTML = html;
        });
    
    // Load Northmen content
    fetch('RG2_Races_Northmen.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('human').innerHTML = html;
        });
    
    // Load Finestorians content
    fetch('RG2_Races_Finestorians.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('dondorian').innerHTML = html;
        });
    
    // Load Froggians content
    fetch('RG2_Races_Froggians.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('q_amevia').innerHTML = html;
        });
    
    // Load Pasunkas content
    fetch('RG2_Races_Pasunkas.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('cretonian').innerHTML = html;
        });
    
    // Load Hellspawns content
    fetch('RG2_Races_Hellspawns.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('tilapi').innerHTML = html;
        });
    
    // Load Wormlings content
    fetch('RG2_Races_Wormlings.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('garthimi').innerHTML = html;
        });
    
    // Load Satyrs content
    fetch('RG2_Races_Satyrs.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('argonosh').innerHTML = html;
        });
}

// Add tooltip functionality
function showTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip-content';
    tooltip.textContent = text;
    
    element.appendChild(tooltip);
    
    // Position the tooltip
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.width / 2 + 'px';
    tooltip.style.top = '100%';
    
    // Remove tooltip on mouseout
    element.addEventListener('mouseout', function() {
        element.removeChild(tooltip);
    });
}

// Tab functionality
function openTab(evt, tabName, raceId) {
    // Hide all tab content
    var tabcontent = document.querySelectorAll(`#${raceId} .tab-content`);
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('active');
    }

    // Remove active class from all tab buttons
    var tablinks = document.querySelectorAll(`#${raceId} .race-tab`);
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }

    // Show the current tab and add active class to the button
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Toggle section visibility
function toggleSection(btn) {
    var content = btn.parentElement.nextElementSibling;
    if (content.style.display === 'block') {
        content.style.display = 'none';
        btn.textContent = '+';
    } else {
        content.style.display = 'block';
        btn.textContent = '-';
    }
}

// Full view mode toggle
function toggleFullView(raceId) {
    var raceCard = document.getElementById(raceId);
    var overlay = document.getElementById('overlay');
    
    // If overlay doesn't exist, create it
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.className = 'overlay';
        overlay.onclick = function() {
            document.body.classList.remove('full-view-mode');
            overlay.style.display = 'none';
        };
        document.body.appendChild(overlay);
    }
    
    // Toggle full view mode
    if (document.body.classList.contains('full-view-mode')) {
        document.body.classList.remove('full-view-mode');
        overlay.style.display = 'none';
    } else {
        document.body.classList.add('full-view-mode');
        overlay.style.display = 'block';
    }
}

// Search and filter functionality
document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.getElementById('race-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterRaces();
        });
    }
    
    // Religion filter
    const religionFilter = document.getElementById('religion-filter');
    if (religionFilter) {
        religionFilter.addEventListener('change', function() {
            filterRaces();
        });
    }
    
    // Initialize all collapsible sections
    setTimeout(() => {
        const toggleBtns = document.querySelectorAll('.section-title .toggle-btn');
        toggleBtns.forEach(btn => {
            // Initialize all sections as collapsed
            if (btn.textContent !== '-') {
                toggleSection(btn);
            }
        });
    }, 1000); // Small delay to ensure content is loaded
});

// Function to filter races based on search and religion filter
function filterRaces() {
    const searchTerm = document.getElementById('race-search').value.toLowerCase();
    const religionFilter = document.getElementById('religion-filter').value;
    
    // Get all race cards
    const raceCards = document.querySelectorAll('.race-grid > div');
    
    raceCards.forEach(card => {
        let shouldShow = true;
        
        // Check if card contains the search term
        if (searchTerm) {
            const cardContent = card.textContent.toLowerCase();
            shouldShow = cardContent.includes(searchTerm);
        }
        
        // Apply religion filter if not set to 'all'
        if (shouldShow && religionFilter !== 'all') {
            const cardReligion = card.querySelector('.race-card')?.getAttribute('data-religion');
            shouldShow = cardReligion === religionFilter;
        }
        
        // Show or hide the card
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

// Toggle between grid and list view
function toggleView(viewType) {
    const container = document.querySelector('.races-container');
    const gridButton = document.getElementById('grid-view-btn');
    const listButton = document.getElementById('list-view-btn');
    
    if (viewType === 'grid') {
        container.classList.remove('list-view');
        gridButton.classList.add('active');
        listButton.classList.remove('active');
    } else {
        container.classList.add('list-view');
        listButton.classList.add('active');
        gridButton.classList.remove('active');
    }
}

// Toggle full view of a race card
function toggleFullView(raceId) {
    const raceCard = document.querySelector(`.race-card.${raceId}`);
    raceCard.classList.toggle('full-view');
    
    // If we're in list view, temporarily switch to grid view for better display
    if (raceCard.classList.contains('full-view') && document.querySelector('.races-container').classList.contains('list-view')) {
        document.querySelector('.races-container').classList.remove('list-view');
        document.querySelector('.races-container').dataset.previousView = 'list';
    } else if (!raceCard.classList.contains('full-view') && document.querySelector('.races-container').dataset.previousView === 'list') {
        document.querySelector('.races-container').classList.add('list-view');
        document.querySelector('.races-container').dataset.previousView = '';
    }
}

// Search functionality
function searchRaces() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const raceCards = document.querySelectorAll('.race-card');
    
    raceCards.forEach(card => {
        const raceContent = card.textContent.toLowerCase();
        if (raceContent.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Filter by religion
function filterByReligion(religion) {
    const religionButtons = document.querySelectorAll('.filter-button');
    const raceCards = document.querySelectorAll('.race-card');
    
    // Check if the button is already active
    const button = document.querySelector(`.filter-button.${religion}`);
    const isActive = button.classList.contains('active');
    
    // Clear all active filters
    religionButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // If the button was already active, show all races (toggle off)
    if (isActive) {
        raceCards.forEach(card => {
            card.style.display = 'block';
        });
        return;
    }
    
    // Otherwise, activate this filter
    button.classList.add('active');
    
    // Filter races
    raceCards.forEach(card => {
        if (card.dataset.religion && card.dataset.religion.includes(religion)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Show all races (clear filters)
function showAllRaces() {
    const religionButtons = document.querySelectorAll('.filter-button');
    const raceCards = document.querySelectorAll('.race-card');
    
    // Clear all active filters
    religionButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show all races
    raceCards.forEach(card => {
        card.style.display = 'block';
    });
    
    // Clear search input
    document.getElementById('search-input').value = '';
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all collapsible sections as closed
    const collapsibleContents = document.querySelectorAll('.collapsible-content');
    collapsibleContents.forEach(content => {
        content.style.display = 'none';
    });
    
    // Add smooth scrolling to all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed header
                    behavior: 'smooth'
                });
                
                // Update active nav link
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Set default view to grid
    toggleView('grid');
});

// Add event listener for search input
document.getElementById('search-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchRaces();
    }
});

// Highlight active section in navigation based on scroll position
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const targetId = section.getAttribute('id');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${targetId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
