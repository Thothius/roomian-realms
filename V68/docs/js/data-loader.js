/**
 * Roomian Realms Data Loader
 * This script loads data from data.json and makes it available for use in the documentation
 */

// Global data object
let roomianData = null;

/**
 * Loads the data from data.json
 * @returns {Promise} A promise that resolves with the data
 */
async function loadRoomianData() {
    if (roomianData !== null) {
        return roomianData;
    }
    
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`Failed to load data: ${response.status} ${response.statusText}`);
        }
        
        roomianData = await response.json();
        console.log('Roomian Realms data loaded successfully');
        return roomianData;
    } catch (error) {
        console.error('Error loading Roomian Realms data:', error);
        throw error;
    }
}

/**
 * Gets a specific race by name
 * @param {string} raceName - The name of the race to get
 * @returns {Object|null} The race object or null if not found
 */
function getRace(raceName) {
    if (!roomianData || !roomianData.races) {
        console.error('Data not loaded yet. Call loadRoomianData() first.');
        return null;
    }
    
    return roomianData.races.find(race => race.name.toLowerCase() === raceName.toLowerCase()) || null;
}

/**
 * Gets a specific deity by name
 * @param {string} deityName - The name of the deity to get
 * @returns {Object|null} The deity object or null if not found
 */
function getDeity(deityName) {
    if (!roomianData || !roomianData.deities) {
        console.error('Data not loaded yet. Call loadRoomianData() first.');
        return null;
    }
    
    return roomianData.deities.find(deity => deity.name.toLowerCase() === deityName.toLowerCase()) || null;
}

/**
 * Gets all races that worship a specific deity
 * @param {string} deityName - The name of the deity
 * @returns {Array} Array of race objects that worship the deity
 */
function getRacesByDeity(deityName) {
    if (!roomianData || !roomianData.races) {
        console.error('Data not loaded yet. Call loadRoomianData() first.');
        return [];
    }
    
    return roomianData.races.filter(race => 
        race.primary_deities && 
        race.primary_deities.some(deity => deity.toLowerCase() === deityName.toLowerCase())
    );
}

/**
 * Populates HTML elements with data attributes
 * Example: <div data-roomian-race="Wormlings"></div> will be populated with Wormlings data
 */
async function populateDataElements() {
    try {
        await loadRoomianData();
        
        // Populate race elements
        document.querySelectorAll('[data-roomian-race]').forEach(element => {
            const raceName = element.getAttribute('data-roomian-race');
            const race = getRace(raceName);
            
            if (race) {
                // Create content based on element type and data attributes
                if (element.hasAttribute('data-display-traits')) {
                    let traitsHtml = '<div class="race-traits">';
                    
                    traitsHtml += '<h4>Positive Traits</h4><ul>';
                    race.traits.positive.forEach(trait => {
                        traitsHtml += `<li>${trait}</li>`;
                    });
                    traitsHtml += '</ul>';
                    
                    traitsHtml += '<h4>Negative Traits</h4><ul>';
                    race.traits.negative.forEach(trait => {
                        traitsHtml += `<li>${trait}</li>`;
                    });
                    traitsHtml += '</ul></div>';
                    
                    element.innerHTML = traitsHtml;
                } else {
                    // Default display
                    element.innerHTML = `
                        <h3>${race.name}</h3>
                        <p><strong>Origin:</strong> ${race.origin}</p>
                        <p>${race.description}</p>
                    `;
                }
            }
        });
        
        // Populate deity elements
        document.querySelectorAll('[data-roomian-deity]').forEach(element => {
            const deityName = element.getAttribute('data-roomian-deity');
            const deity = getDeity(deityName);
            
            if (deity) {
                if (element.hasAttribute('data-display-full')) {
                    element.innerHTML = `
                        <h3>${deity.name}, ${deity.title}</h3>
                        <p class="deity-description">${deity.full_description}</p>
                        <p><strong>Preferred by:</strong> ${deity.preferred_by.join(', ')}</p>
                    `;
                } else {
                    // Default display
                    element.innerHTML = `
                        <h3>${deity.name}</h3>
                        <p>${deity.description}</p>
                    `;
                }
            }
        });
        
    } catch (error) {
        console.error('Error populating data elements:', error);
    }
}

// Export functions for use in other scripts
window.RoomianRealms = {
    loadData: loadRoomianData,
    getRace: getRace,
    getDeity: getDeity,
    getRacesByDeity: getRacesByDeity,
    populateDataElements: populateDataElements
};

// Auto-populate elements when the DOM is loaded
document.addEventListener('DOMContentLoaded', populateDataElements);
