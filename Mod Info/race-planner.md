# RoomianRealms Race Planner

## Overview

This document serves as a comprehensive guide for differentiating the eight playable races in the RoomianRealms mod. Each race should have distinct gameplay advantages, disadvantages, and specializations that make them feel unique both in lore and mechanics.

## Game Mechanics Analysis

Songs of Syx provides several key areas where races can be differentiated:

### 1. BOOST Parameters
- **Battle Stats**: Offense, defense, morale, speed, weapon types
- **Room Efficiency**: Production multipliers for different room types
- **Behavior Traits**: Lawfulness, submission, sanity, etc.
- **Physical Attributes**: Stamina, resistance to elements, etc.
- **Special Abilities**: Race-specific abilities (martial arts, blood magic, etc.)

### 2. PREFERRED Parameters
- **Climate & Terrain**: Where races thrive or struggle
- **Food & Drink**: Dietary preferences and restrictions
- **Work Types**: What jobs they excel at or avoid
- **Structure Types**: Building preferences

### 3. BEHAVIOUR Parameters
- **Social Traits**: Loyalty, discipline, cruelty, etc.
- **Cultural Traits**: Hedonism, spirituality, etc.

### 4. Religious Preferences
- **Temple Affiliations**: Which gods they worship

## Race Specialization Plan

### Children of Light (Good Races)

#### 1. Satyrs (ARGONOSH) - "The Wild Hunt"

**Core Identity**: Forest-dwelling archers with lunar-cycle powers

**Gameplay Strengths:**
- Superior archery (+30-40% BATTLE_ARCHERY)
- Exceptional forest management (+50% ROOM_WOODCUTTER)
- Herbalism specialists (+40% ROOM_FARM_HERB)
- Night vision and stealth (+30% night operations)

**Gameplay Weaknesses:**
- Struggle in urban environments (-30% happiness in high-density areas)
- Poor miners (-50% ROOM_MINE)
- Weak in direct combat (-20% BATTLE_OFFENCE in melee)
- Require more personal space (-30% housing density)

**Unique Mechanics:**
- Full moon transformation: Combat bonuses during full moon phases
- Herbal medicine: Special healing capabilities
- Forest bond: Forests within territory grow faster and yield more resources

**Religious Connection:**
- Strong Athuri worship (1.0)

#### 2. Froggians (Q_AMEVIA) - "The Dreaming Pools"

**Core Identity**: Amphibious scholars and diplomats

**Gameplay Strengths:**
- Research powerhouse (+50% ROOM_UNIVERSITY, ROOM_LIBRARY, ROOM_LABORATORY)
- Water management (+40% efficiency with water-related structures)
- Diplomatic advantage (+30% relations with other factions)
- Disease resistance (+50% resistance to illness)

**Gameplay Weaknesses:**
- Pacifist nature (-30% BATTLE_OFFENCE, -20% BATTLE_MORALE)
- Require water proximity (happiness penalty when far from water)
- Physically weak (-20% PHYSICS_STAMINA)
- Poor in dry climates (-40% efficiency in desert/dry regions)

**Unique Mechanics:**
- Knowledge Pool: Research buildings provide happiness bonuses
- Amphibious: Can traverse water tiles without bridges
- Collective consciousness: Information spreads faster among population

**Religious Connection:**
- Strong Athuri worship (1.0)

### Heirs of Balance (Neutral Races)

#### 3. Finestorians (DONDORIAN) - "The Forge-Bound Soul"

**Core Identity**: Master craftsmen with soul-binding crafting

**Gameplay Strengths:**
- Crafting excellence (+40% ROOM_WORKSHOP_SMITHY, ROOM_WORKSHOP_CARPENTER, ROOM_WORKSHOP_JEWELER)
- Resource efficiency (+30% resource yield from processing)
- Quality production (+50% chance of high-quality items)
- Defensive capabilities (+30% BATTLE_DEFENCE)

**Gameplay Weaknesses:**
- Slow workers (-20% work speed)
- Rigid society (-20% happiness with rapid changes)
- Resource intensive (-30% more resources needed for buildings)
- Poor farmers (-20% ROOM_FARM, ROOM_ORCHARD)

**Unique Mechanics:**
- Soul-Bound Items: Masterwork items provide special bonuses
- Quality over quantity: Smaller population but higher individual output
- Structural integrity: Buildings last longer and provide better bonuses

**Religious Connection:**
- Strong Crator worship (1.0)

#### 4. Northmen (HUMAN) - "The Glory Hoard"

**Core Identity**: Trophy-collecting warriors and traders

**Gameplay Strengths:**
- Combat prowess (+30% BATTLE_OFFENCE, +20% BATTLE_MORALE)
- Trading expertise (+30% trade income)
- Metalworking (+30% ROOM_WORKSHOP_SMITHY)
- Cold resistance (+30% efficiency in cold climates)

**Gameplay Weaknesses:**
- Heat vulnerability (-30% efficiency in hot climates)
- Lower intellectual pursuits (-20% ROOM_UNIVERSITY, ROOM_LIBRARY)
- Resource consumption (+20% food consumption)
- Require status symbols (happiness penalty without luxury goods)

**Unique Mechanics:**
- Trophy Collection: Combat victories provide happiness bonuses
- Saga Walls: Special decorative structures that boost morale
- Raiding expertise: Better loot from raids

**Religious Connection:**
- Strong Crator worship (1.0)

### Servants of Shadow (Evil Races)

#### 5. Bloodelves (CANTOR) - "The Crimson Covenant"

**Core Identity**: Blood-drinking immortals with arcane archery

**Gameplay Strengths:**
- Superior archery (+30% BATTLE_ARCHERY)
- Stealth operations (+40% success in covert actions)
- Blood magic healing (+30% healing rate)
- Extended lifespan (+50% PHYSICS_DEATH_AGE)

**Gameplay Weaknesses:**
- Blood dependency (require special "blood" resource from prisoners/slaves)
- Sunlight vulnerability (-30% efficiency during day)
- Low reproduction rate (-50% population growth)
- Poor miners (-30% ROOM_MINE)

**Unique Mechanics:**
- Blood Consumption: Special resource system for maintaining immortality
- Night Hunters: Combat and work bonuses at night
- Blood Magic: Special abilities powered by blood resource

**Religious Connection:**
- Strong Aminion worship (1.0)
- Secondary Shmalor worship (0.6)

#### 6. Hellspawns (TILAPI) - "Pain's Embrace"

**Core Identity**: Demonic entities that feed on suffering

**Gameplay Strengths:**
- Torture specialists (+50% efficiency in slave management)
- Fire manipulation (+40% with fire-based weapons)
- Demonic strength (+30% BATTLE_OFFENCE)
- Heat resistance (+40% efficiency in hot climates)

**Gameplay Weaknesses:**
- Cold vulnerability (-40% efficiency in cold climates)
- Chaotic nature (-30% BEHAVIOUR_LAWFULNESS)
- Resource inefficiency (-20% resource yield)
- Poor farmers (-30% ROOM_FARM, ROOM_ORCHARD)

**Unique Mechanics:**
- Pain Harvesting: Gain special resources from torture
- Ritual Scarification: Combat bonuses from self-harm
- Demonic Summoning: Special military units

**Religious Connection:**
- Strong Aminion worship (1.0)

### The Outsiders (Beyond Morality)

#### 7. Wormlings (GARTHIMI) - "The Breach"

**Core Identity**: Parasitic hive mind from beyond reality

**Gameplay Strengths:**
- Rapid reproduction (+100% population growth)
- Exceptional farmers (+50% ROOM_FARM, ROOM_ORCHARD)
- Disease and decay resistant (+50% resistance to negative environments)
- Regeneration (+50% healing rate)

**Gameplay Weaknesses:**
- Physically weak (-30% BATTLE_BLUNT, BATTLE_SLASH, BATTLE_PIERCE)
- Poor crafters (-55% ROOM_WORKSHOP, ROOM_REFINER)
- Poor miners (-75% ROOM_MINE)
- Alien psychology (-55% BEHAVIOUR_LAWFULNESS)

**Unique Mechanics:**
- Host Infestation: Special method of converting other races
- Hivemind: Special communication benefits
- Dimensional Manipulation: Unique military tactics

**Religious Connection:**
- Strong Shmalor worship (1.0)

#### 8. Pasunkas (CRETONIAN) - "Push-up Taijutsu"

**Core Identity**: Spiritual martial artists with horn resonance

**Gameplay Strengths:**
- Martial arts mastery (+50% MARTIAL_ARTS)
- Discipline and meditation (+50% MEDITATION)
- Physical training (+30% PHYSICS_STAMINA, PHYSICS_SPEED)
- Adaptability (+30% efficiency in all environments)

**Gameplay Weaknesses:**
- Resource intensive training (-20% population available for work)
- Spiritual requirements (need temples and meditation spaces)
- Poor with technology (-20% with advanced technology)
- Individualistic (-20% efficiency in crowded spaces)

**Unique Mechanics:**
- Push-up Training: Special combat bonuses from training
- Horn Resonance: Sound-based abilities
- Chi Manipulation: Special abilities in combat

**Religious Connection:**
- Strong Crator worship (1.0)

## Implementation Guidelines

### BOOST Parameter Ranges
- Minor bonus/penalty: 10-20%
- Significant bonus/penalty: 30-40%
- Major bonus/penalty: 50%+

### Balance Considerations
- Each race should have 3-4 major strengths
- Each race should have 3-4 significant weaknesses
- Strengths and weaknesses should be thematically consistent with lore
- Races should have distinct playstyles that encourage different strategies

### Testing Methodology
1. Create a new game with each race
2. Play through early, mid, and late game phases
3. Document how the race's strengths and weaknesses manifest
4. Adjust parameters based on gameplay experience
5. Repeat until each race feels unique and balanced

## Resource & Job Specialization Matrix

| Race | Primary Resources | Secondary Resources | Avoided Resources | Primary Jobs | Secondary Jobs | Avoided Jobs |
|------|-------------------|---------------------|-------------------|--------------|----------------|-------------|
| Satyrs | Wood, Herbs | Game meat, Fruit | Stone, Ore | Foresters, Archers, Herbalists | Hunters, Guards | Miners, Crafters |
| Froggians | Knowledge, Water | Fish, Herbs | Metals, Stone | Scholars, Diplomats, Fishers | Healers, Farmers | Soldiers, Miners |
| Finestorians | Metals, Stone | Gems, Wood | Food crops | Smiths, Masons, Jewelers | Carpenters, Engineers | Farmers, Hunters |
| Northmen | Metals, Trophies | Meat, Alcohol | Luxury goods | Warriors, Traders, Smiths | Hunters, Brewers | Scholars, Artists |
| Bloodelves | Blood, Archery | Stealth, Hunting | Daylight work | Archers, Hunters, Assassins | Blood mages, Night guards | Miners, Farmers |
| Hellspawns | Fire, Torture | Slaves, Combat | Cold regions | Slavers, Warriors, Torturers | Miners, Guards | Farmers, Scholars |
| Wormlings | Food crops, Hosts | Parasitism, Breeding | Mining, Crafting | Farmers, Breeders, Infiltrators | Biologists, Swarm fighters | Miners, Crafters |
| Pasunkas | Training, Discipline | Meditation, Combat | Technology | Martial artists, Trainers, Guards | Spiritual leaders, Warriors | Scholars, Miners |

## Religious Affinity Matrix

| Race | Aminion | Athuri | Crator | Shmalor |
|------|---------|--------|--------|--------|
| Satyrs | 0.1 | 1.0 | 0.3 | 0.2 |
| Froggians | 0.1 | 1.0 | 0.3 | 0.2 |
| Finestorians | 0.3 | 0.3 | 1.0 | 0.3 |
| Northmen | 0.3 | 0.3 | 1.0 | 0.3 |
| Bloodelves | 1.0 | 0.3 | 0.3 | 0.6 |
| Hellspawns | 1.0 | 0.1 | 0.3 | 0.3 |
| Wormlings | 0.3 | 0.1 | 0.3 | 1.0 |
| Pasunkas | 0.3 | 0.5 | 1.0 | 0.2 |

## Climate & Terrain Preferences

| Race | Preferred Climate | Avoided Climate | Preferred Terrain | Avoided Terrain |
|------|-------------------|-----------------|-------------------|----------------|
| Satyrs | Temperate | Desert | Forest | Mountain |
| Froggians | Wet, Temperate | Desert, Dry | Wetlands | Desert |
| Finestorians | Mountain, Temperate | Extreme heat/cold | Mountains | Wetlands |
| Northmen | Cold, Temperate | Hot | Plains | Wetlands |
| Bloodelves | Temperate, Forest | Desert | Forest | Open plains |
| Hellspawns | Hot, Dry | Cold | Volcanic, Barren | Forest, Wet |
| Wormlings | Wet, Temperate | Extreme cold | Swamp, Farmland | Mountains |
| Pasunkas | Adaptable | None | Adaptable | None |
