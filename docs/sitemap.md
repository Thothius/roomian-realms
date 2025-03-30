# Roomian Realms Documentation Site Structure

## Overview

The Roomian Realms documentation site is a simple, JSON-driven single-page application that provides comprehensive information about the races and deities in the Roomian Realms mod for Songs of Syx.

## Directory Structure

```
docs/
├── index.html               # Main HTML file
├── styles.css               # CSS styles
├── scripts.js               # JavaScript functionality
├── rr_data.json             # Data file containing all race and deity information
├── sitemap.md               # This documentation file
├── assets/                  # Asset directory
│   ├── race_backgrounds/    # Race-specific background images
│   ├── backgrounds/         # General background images
│   └── icons/               # Icon images
└── data/                    # Additional data files (if needed)
```

## Key Components

### 1. Data Structure (rr_data.json)

The `rr_data.json` file contains structured data for:
- Metadata (title, version, description)
- Races (8 playable races with detailed attributes)
- Deities (5 deities with domains and followers)
- Categories (racial categories and alignments)

### 2. HTML Structure (index.html)

The main HTML file provides a responsive layout with:
- Header with mod title and description
- Navigation menu
- Race overview section with category cards
- Deity overview section with deity cards
- Race comparison section with interactive tables
- Footer with links and metadata

### 3. Styling (styles.css)

The CSS file provides:
- Modern, responsive design
- Race-specific color schemes
- Interactive elements (accordions, cards)
- Visualization for race attributes (value bars)
- Mobile-friendly layouts

### 4. Functionality (scripts.js)

The JavaScript file handles:
- Loading data from rr_data.json
- Populating HTML elements with data
- Interactive features (accordions)
- Visual representations of numeric values
- Error handling

## Content Organization

### Race Information

Races are organized in four categories:
1. Children of Light (Satyrs, Froggians)
2. Heirs of Balance (Finestorians, Northmen)
3. Servants of Shadow (Hellspawns, Bloodelves)
4. The Outsiders (Wormlings, Pasunkas)

Each race has detailed information on:
- Physical properties
- Social behaviors
- Personality traits
- Work preferences
- Combat abilities
- Environmental preferences
- Population characteristics
- Relations with other races

### Deity Information

The five deities (Athuri, Aminion, Crator, Shmalor, and God Emperor) each have:
- Title and description
- Domains
- Primary followers
- Sacred ritual
- Temple description

### Data Visualization

Race attributes are visualized using:
- Value bars for numeric attributes
- Color-coding for race categories
- Interactive tables for comparison

## Maintenance

To update the documentation:

1. Modify the `rr_data.json` file with new information
2. Add new images to the appropriate assets folders if needed
3. Update HTML, CSS, or JavaScript if the structure or functionality needs to change

This approach allows for easy updates without requiring changes to multiple files - most updates can be done by simply modifying the JSON data.
