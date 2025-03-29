# Race Editing Rules for Roomian Realms

This document establishes the guidelines and workflow for making changes to race files in the Roomian Realms mod. The goal is to ensure consistency, balance, and unique identities for each race.

## Workflow for Race Edits

1. **Reference the Comparison Table**: Always consult the [race_comparison.md](./race_comparison.md) document before making changes to understand the current state of all races.

2. **Document Proposed Changes**: Create a new section in this document to outline proposed changes before implementing them.

3. **Update Race Files**: Make the changes to the race files in the `V68/assets/init/race/` directory.

4. **Update Comparison Table**: After implementing changes, update the race_comparison.md file to reflect the new values.

5. **Commit Changes**: Commit both the race files and the updated comparison table together.

## Race Design Principles

### Uniqueness
- Each race should have at least 2-3 unique strengths that no other race excels at
- Each race should have at least 1-2 unique weaknesses

### Balance
- No race should be strictly better than another in all aspects
- Powerful traits should be balanced with meaningful weaknesses
- Combat-focused races should have some non-combat disadvantages
- Non-combat races should have unique utility advantages

### Thematic Consistency
- Race attributes should align with their lore and backstory
- Environmental preferences should match their origin story
- Religious preferences should reflect their cultural values

## Planned Race Adjustments

### Version 0.6 Planned Changes

#### Satyr (ARGONOSH)
- Increase FOREST_LOVER to 1.0 (currently already at 1.0)
- Increase ARCHER trait to 0.9 (currently 0.8)
- Add moon cycle effects - stronger during full moon, weaker during new moon

#### Bloodelf (CANTOR)
- Increase NOCTURNAL to 1.0 (currently already at 1.0)
- Decrease POPULATION.GROWTH to 0.01 (currently already at 0.01)
- Increase INTELLECTUAL to 1.0 (currently already at 1.0)

#### Cretonian (CRETONIAN)
- Increase BATTLE_PROWESS to 1.0 (currently already at 1.0)
- Increase FIGHTER trait to 1.0 (currently already at 1.0)
- Decrease PACIFISM to 0.1 (currently already at 0.1)

#### Northman (DONDORIAN)
- Increase CLIMATE.COLD preference to 0.9 (currently already at 0.9)
- Increase TRADER trait to 0.9 (currently 0.8)
- Add SAILOR trait at 1.0 (currently 0.9)

#### Pasunka (GARTHIMI)
- Increase PIOUS to 1.0 (currently already at 1.0)
- Increase SPIRITUAL to 1.0 (currently already at 1.0)
- Increase MASON trait to 1.0 (currently 0.9)

#### Finestorian (HUMAN)
- Increase ARTISAN trait to 1.0 (currently 0.9)
- Increase STRUCTURE.GRAND preference to 1.0 (currently 0.9)
- Increase INTELLECTUAL to 1.0 (currently 0.9)

#### Froggian (Q_AMEVIA)
- Increase PACIFISM to 1.0 (currently 0.9)
- Add SWIMMER trait at 1.0 (currently already at 1.0)
- Increase HEALER trait to 0.9 (currently 0.8)

#### Hellspawn (TILAPI)
- Increase CLIMATE.HOT preference to 1.0 (currently already at 1.0)
- Increase BLOODLUST to 1.0 (currently already at 1.0)
- Add HEAT_RESISTANT trait at 1.0 (currently already at 1.0)

## Implementation Status

| Version | Changes | Status | Date |
|---------|---------|--------|------|
| 0.5 | Initial race streamlining | Completed | 2025-03-29 |
| 0.6 | Race balance adjustments | Planned | TBD |

## Custom Trait Implementation Plan

The Roomian Realms mod includes a variety of custom traits that need to be properly connected to each race. These traits are defined in the `V68/assets/init/race/trait/` directory and have the suffix `_RR.txt`.

### Trait Categories

1. **Race-Specific Traits**:
   - Finestorian (HUMAN): ARCHITECTURAL_VISION, ARTISAN_LEGACY, EFFICIENT_BUILDER, GEOMETRIC_MIND, MASTER_CRAFTSMAN, MATERIAL_INSIGHT, OBSESSIVE_PERFECTIONIST, SACRED_GEOMETRY
   - Northman (DONDORIAN): ADAPTABLE_MIND, AMBITIOUS_GREED, DIPLOMATIC_SAVVY, RESOURCEFUL_SURVIVOR
   - Pasunka (GARTHIMI): EXCESSIVE_DEVOTION, GEOMETRIC_MIND, HONORABLE_MEDIATOR, MARTIAL_INSTRUCTOR, PERFECT_FORM, RIGID_THINKING
   - Wormling: ADAPTIVE_PARASITE, COLONY_MIND, HIVE_CONNECTED, HOST_DEPENDENCY, INDEPENDENT_MIND, METAMORPHIC_FLESH, PARASITIC_ADAPTATION

2. **General Traits** (available to all races):
   - BATTLE_MASTER, CORRUPT_HEART, FRACTURED_MIND, FRAIL_BODY, IRON_MIND, LONE_WOLF, NATURAL_LEADER, PEACEFUL_SOUL, QUICK_LEARNER, RESILIENT_BODY, TRADITION_BOUND, VIRTUOUS_SOUL

### Implementation Steps

1. **Update TRAITS Section**: Add a new section to each race file that references the appropriate custom traits:
   ```
   TRAITS: {
       // Existing vanilla traits
       FIGHTER: 0.6,
       SCHOLAR: 0.7,
       
       // Custom traits with appropriate probabilities
       FINESTORIAN_ARCHITECTURAL_VISION_RR: 0.2,
       FINESTORIAN_ARTISAN_LEGACY_RR: 0.2,
       // etc.
   },
   ```

2. **Balance Trait Probabilities**: Ensure that:
   - Race-specific traits have higher probabilities for their intended races
   - General traits have appropriate probabilities based on each race's characteristics
   - No race has too many powerful traits without balancing weaknesses

3. **Update Race Comparison Document**: Add a new section to the race comparison table that shows which custom traits each race has access to and at what probabilities.

### Priority Traits for Each Race

| Race | Primary Custom Traits | Secondary Custom Traits |
|------|----------------------|------------------------|
| HUMAN (Finestorian) | ARCHITECTURAL_VISION, ARTISAN_LEGACY, MASTER_CRAFTSMAN | QUICK_LEARNER, VIRTUOUS_SOUL |
| DONDORIAN (Northman) | ADAPTABLE_MIND, DIPLOMATIC_SAVVY, RESOURCEFUL_SURVIVOR | BATTLE_MASTER, NATURAL_LEADER |
| GARTHIMI (Pasunka) | EXCESSIVE_DEVOTION, PERFECT_FORM, HONORABLE_MEDIATOR | IRON_MIND, TRADITION_BOUND |
| ARGONOSH (Satyr) | (Need to create Satyr-specific traits) | NIMBLE, QUICK_LEARNER, LONE_WOLF |
| CANTOR (Bloodelf) | (Need to create Bloodelf-specific traits) | CORRUPT_HEART, FRACTURED_MIND |
| CRETONIAN | (Need to create Cretonian-specific traits) | BATTLE_MASTER, RESILIENT_BODY |
| Q_AMEVIA (Froggian) | (Need to create Froggian-specific traits) | PEACEFUL_SOUL, VIRTUOUS_SOUL |
| TILAPI (Hellspawn) | (Need to create Hellspawn-specific traits) | CORRUPT_HEART, FRAIL_BODY |

### Version 0.6 Implementation Timeline

1. Create missing race-specific traits for Satyr, Bloodelf, Cretonian, Froggian, and Hellspawn
2. Update each race file to include appropriate trait probabilities
3. Test in-game to ensure traits are appearing correctly
4. Update documentation to reflect the new trait system

## Current Implementation Tasks

### Human (Finestorian) Trait Implementation - In Progress

The HUMAN race file currently doesn't have a TRAITS section. We'll add one with the following traits:

```
TRAITS: {
    // Vanilla traits
    FIGHTER: 0.6,
    SCHOLAR: 0.7,
    MASON: 0.8,
    ARTISAN: 0.9,
    TRADER: 0.7,
    
    // Custom race-specific traits
    FINESTORIAN_ARCHITECTURAL_VISION_RR: 0.3,
    FINESTORIAN_ARTISAN_LEGACY_RR: 0.3,
    FINESTORIAN_EFFICIENT_BUILDER_RR: 0.2,
    FINESTORIAN_GEOMETRIC_MIND_RR: 0.2,
    FINESTORIAN_MASTER_CRAFTSMAN_RR: 0.3,
    FINESTORIAN_MATERIAL_INSIGHT_RR: 0.2,
    FINESTORIAN_OBSESSIVE_PERFECTIONIST_RR: 0.1,
    FINESTORIAN_SACRED_GEOMETRY_RR: 0.1,
    
    // General traits
    GENERAL_QUICK_LEARNER_RR: 0.2,
    GENERAL_VIRTUOUS_SOUL_RR: 0.2,
    GENERAL_NATURAL_LEADER_RR: 0.1,
    GENERAL_IRON_MIND_RR: 0.1,
},
```

This implementation will give Finestorians access to all their race-specific traits with appropriate probabilities, plus a selection of general traits that match their lore as intelligent, virtuous craftspeople.
