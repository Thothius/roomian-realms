# Roomian Realms Race Enhancement Plan

This document outlines specific changes to make each race more unique according to their core identities while maintaining game balance.

## 1. Evil Slavers

### Hellspawn (TILAPI)

**Current Identity**: Heat-resistant warriors with mining expertise and cruel tendencies.

**Enhancement Goals**:
- Strengthen slave management capabilities
- Emphasize demonic/infernal nature
- Enhance mining and heat resistance

**Specific Changes**:
1. **BOOST Section**:
   ```
   SLAVE_PRODUCTIVITY>MUL: 1.3,
   SLAVE_LOYALTY>MUL: 0.7,
   SLAVE_DEATH_RATE>MUL: 1.2,
   MINING_PRODUCTIVITY>MUL: 1.2,
   WORLD_BUILDING_MINE>MUL: 1.3,
   ```

2. **TRAITS Section**:
   - Add new traits:
     ```
     TILAPI_SLAVE_MASTER_RR: 0.3,
     TILAPI_INFERNAL_RESILIENCE_RR: 0.3,
     TILAPI_DEMONIC_STRENGTH_RR: 0.2,
     TILAPI_HELLFIRE_AFFINITY_RR: 0.2,
     ```
   - Reduce HONORABLE to 0.3 (currently 0.7)
   - Increase INTIMIDATING to 1.0

3. **New Trait Files**:
   - Create `TILAPI_SLAVE_MASTER_RR.txt` with bonuses to slave management
   - Create `TILAPI_INFERNAL_RESILIENCE_RR.txt` with heat and work bonuses
   - Create `TILAPI_DEMONIC_STRENGTH_RR.txt` with mining and combat bonuses
   - Create `TILAPI_HELLFIRE_AFFINITY_RR.txt` with fire-related bonuses

### Bloodelves (CANTOR)

**Current Identity**: Cruel, efficient killers with assassination skills and opportunistic nature.

**Enhancement Goals**:
- Enhance exploitation mechanics
- Emphasize blood magic and nocturnal abilities
- Refine aristocratic cruelty

**Specific Changes**:
1. **BOOST Section**:
   ```
   SLAVE_PRODUCTIVITY>MUL: 1.2,
   SLAVE_LOYALTY>MUL: 0.8,
   TAX_EFFICIENCY>MUL: 1.2,
   CRIME_RATE>MUL: 1.1,
   NIGHT_VISION>ADD: 0.5,
   ```

2. **TRAITS Section**:
   - Add new traits:
     ```
     CANTOR_BLOOD_MAGIC_RR: 0.3,
     CANTOR_NIGHT_HUNTER_RR: 0.3,
     CANTOR_ARISTOCRATIC_CRUELTY_RR: 0.2,
     CANTOR_EXPLOITATION_MASTERY_RR: 0.2,
     ```

3. **New Trait Files**:
   - Create `CANTOR_BLOOD_MAGIC_RR.txt` with combat and health-stealing bonuses
   - Create `CANTOR_NIGHT_HUNTER_RR.txt` with night vision and stealth bonuses
   - Create `CANTOR_ARISTOCRATIC_CRUELTY_RR.txt` with tax and exploitation bonuses
   - Create `CANTOR_EXPLOITATION_MASTERY_RR.txt` with slave and resource extraction bonuses

## 2. Peaceful Researchers

### Froggians (Q_AMEVIA)

**Current Identity**: Peaceful, water-dwelling farmers and healers with intellectual pursuits.

**Enhancement Goals**:
- Strengthen research capabilities
- Enhance water affinity and farming
- Emphasize peaceful coexistence and healing

**Specific Changes**:
1. **BOOST Section**:
   ```
   PHYSICS_INTELLIGENCE>MUL: 1.2,
   RESEARCH_SPEED>MUL: 1.2,
   FARMING_PRODUCTIVITY>MUL: 1.2,
   WORLD_BUILDING_AGRICULTURE>MUL: 1.3,
   HEALING_RATE>MUL: 1.2,
   ```

2. **TRAITS Section**:
   - Add new traits:
     ```
     Q_AMEVIA_WATER_AFFINITY_RR: 0.4,
     Q_AMEVIA_SCHOLARLY_MIND_RR: 0.3,
     Q_AMEVIA_NATURAL_HEALER_RR: 0.3,
     Q_AMEVIA_AGRICULTURAL_INSIGHT_RR: 0.2,
     ```
   - Reduce FIGHTER to 0.3 (currently 0.4)
   - Increase INTELLECTUAL to 1.0

3. **New Trait Files**:
   - Create `Q_AMEVIA_WATER_AFFINITY_RR.txt` with swimming and water-related bonuses
   - Create `Q_AMEVIA_SCHOLARLY_MIND_RR.txt` with research and intelligence bonuses
   - Create `Q_AMEVIA_NATURAL_HEALER_RR.txt` with healing and medicine bonuses
   - Create `Q_AMEVIA_AGRICULTURAL_INSIGHT_RR.txt` with farming bonuses

## 3. Neutral Specialists

### Finestorians (DONDORIAN)

**Current Identity**: Master builders and craftspeople with architectural expertise.

**Enhancement Goals**:
- Strengthen production and refining capabilities
- Enhance architectural and engineering skills
- Emphasize quality over quantity

**Specific Changes**:
1. **BOOST Section**:
   ```
   CRAFTSMANSHIP>ADD: 0.8,
   QUALITY_PRODUCTION>ADD: 0.7,
   REFINING_EFFICIENCY>MUL: 1.2,
   CONSTRUCTION_SPEED>MUL: 1.1,
   BUILDING_DURABILITY>MUL: 1.2,
   ```

2. **TRAITS Section**:
   - Already implemented with appropriate traits
   - Consider adding:
     ```
     FINESTORIAN_QUALITY_REFINER_RR: 0.2,
     ```

3. **New Trait Files**:
   - Create `FINESTORIAN_QUALITY_REFINER_RR.txt` with bonuses to refining and production quality

### Pasunkas (CRETONIAN)

**Current Identity**: Religious scholars and builders with focus on piety and knowledge.

**Enhancement Goals**:
- Strengthen farming and pasture capabilities
- Enhance religious devotion
- Emphasize community and harmony

**Specific Changes**:
1. **BOOST Section**:
   ```
   FARMING_PRODUCTIVITY>MUL: 1.2,
   PASTURE_PRODUCTIVITY>MUL: 1.2,
   WORLD_BUILDING_AGRICULTURE>MUL: 1.2,
   WORLD_BUILDING_PASTURE>MUL: 1.2,
   RELIGION_SATISFACTION>MUL: 1.2,
   ```

2. **TRAITS Section**:
   - Add new traits:
     ```
     PASUNKA_AGRICULTURAL_WISDOM_RR: 0.3,
     PASUNKA_PASTORAL_HARMONY_RR: 0.3,
     PASUNKA_COMMUNITY_BUILDER_RR: 0.2,
     PASUNKA_DIVINE_FARMER_RR: 0.2,
     ```

3. **New Trait Files**:
   - Create `PASUNKA_AGRICULTURAL_WISDOM_RR.txt` with farming bonuses
   - Create `PASUNKA_PASTORAL_HARMONY_RR.txt` with pasture and animal bonuses
   - Create `PASUNKA_COMMUNITY_BUILDER_RR.txt` with happiness and community bonuses
   - Create `PASUNKA_DIVINE_FARMER_RR.txt` with religious and farming bonuses

### Northmen (HUMAN)

**Current Identity**: Hardy traders and warriors with good combat abilities and trading skills.

**Enhancement Goals**:
- Strengthen war and trading capabilities
- Enhance exploration and seafaring
- Emphasize glory-seeking and ambition

**Specific Changes**:
1. **BOOST Section**:
   ```
   TRADING_EFFICIENCY>MUL: 1.2,
   MILITARY_TRAINING_SPEED>MUL: 1.1,
   EXPLORATION_SPEED>MUL: 1.2,
   NAVAL_COMBAT>MUL: 1.2,
   COLD_RESISTANCE>ADD: 0.5,
   ```

2. **TRAITS Section**:
   - Already implemented with appropriate traits
   - Consider adding:
     ```
     NORTHMAN_NAVAL_COMMANDER_RR: 0.2,
     ```

3. **New Trait Files**:
   - Create `NORTHMAN_NAVAL_COMMANDER_RR.txt` with naval and leadership bonuses

## 4. Nature-Connected

### Satyrs (ARGONOSH)

**Current Identity**: Forest-dwelling archers with focus on hunting and agility.

**Enhancement Goals**:
- Strengthen forest and hunting capabilities
- Enhance moon-cycle connection
- Emphasize natural harmony and archery

**Specific Changes**:
1. **BOOST Section**:
   ```
   HUNTING_PRODUCTIVITY>MUL: 1.3,
   FORESTING_PRODUCTIVITY>MUL: 1.2,
   ARCHERY_SKILL>MUL: 1.2,
   STEALTH>ADD: 0.3,
   NIGHT_VISION>ADD: 0.2,
   ```

2. **TRAITS Section**:
   - Add new traits:
     ```
     ARGONOSH_FOREST_HARMONY_RR: 0.3,
     ARGONOSH_MOONLIGHT_HUNTER_RR: 0.3,
     ARGONOSH_NATURAL_ARCHER_RR: 0.3,
     ARGONOSH_WILD_INSTINCT_RR: 0.2,
     ```

3. **New Trait Files**:
   - Create `ARGONOSH_FOREST_HARMONY_RR.txt` with forest and nature bonuses
   - Create `ARGONOSH_MOONLIGHT_HUNTER_RR.txt` with night and hunting bonuses
   - Create `ARGONOSH_NATURAL_ARCHER_RR.txt` with archery bonuses
   - Create `ARGONOSH_WILD_INSTINCT_RR.txt` with survival and instinct bonuses

### Wormlings (GARTHIMI)

**Current Identity**: Parasitic, alien entities with farming expertise and cosmic horror themes.

**Enhancement Goals**:
- Strengthen parasitic and alien nature
- Enhance farming and adaptation capabilities
- Emphasize collective consciousness and cosmic horror

**Specific Changes**:
1. **BOOST Section**:
   ```
   FARMING_PRODUCTIVITY>MUL: 1.3,
   PHYSICS_HEALTH_REGENERATION>MUL: 1.2,
   DISEASE_RESISTANCE>ADD: 0.4,
   REPRODUCTION_RATE>MUL: 1.3,
   LIFESPAN>MUL: 0.7,
   ```

2. **TRAITS Section**:
   - Add new traits:
     ```
     WORMLING_HIVE_MIND_RR: 0.3,
     WORMLING_PARASITIC_EVOLUTION_RR: 0.3,
     WORMLING_COSMIC_MEMORY_RR: 0.2,
     WORMLING_ADAPTIVE_PHYSIOLOGY_RR: 0.2,
     ```

3. **New Trait Files**:
   - Create `WORMLING_HIVE_MIND_RR.txt` with collective bonuses
   - Create `WORMLING_PARASITIC_EVOLUTION_RR.txt` with adaptation bonuses
   - Create `WORMLING_COSMIC_MEMORY_RR.txt` with knowledge retention bonuses
   - Create `WORMLING_ADAPTIVE_PHYSIOLOGY_RR.txt` with physical adaptation bonuses

### Cretonians (CRETONIAN)

**Current Identity**: Physically powerful warriors with focus on honor and combat.

**Enhancement Goals**:
- Strengthen honor-based combat
- Enhance physical training
- Emphasize discipline and martial prowess

**Specific Changes**:
1. **BOOST Section**:
   ```
   MILITARY_TRAINING_SPEED>MUL: 1.2,
   MELEE_COMBAT>MUL: 1.2,
   PHYSICS_STRENGTH>MUL: 1.1,
   DISCIPLINE>ADD: 0.3,
   MORALE_IN_BATTLE>ADD: 0.2,
   ```

2. **TRAITS Section**:
   - Add new traits:
     ```
     CRETONIAN_HONORABLE_WARRIOR_RR: 0.3,
     CRETONIAN_DISCIPLINED_MIND_RR: 0.3,
     CRETONIAN_MARTIAL_MASTER_RR: 0.2,
     CRETONIAN_PHYSICAL_PERFECTION_RR: 0.2,
     ```

3. **New Trait Files**:
   - Create `CRETONIAN_HONORABLE_WARRIOR_RR.txt` with honor and combat bonuses
   - Create `CRETONIAN_DISCIPLINED_MIND_RR.txt` with discipline and focus bonuses
   - Create `CRETONIAN_MARTIAL_MASTER_RR.txt` with combat training bonuses
   - Create `CRETONIAN_PHYSICAL_PERFECTION_RR.txt` with physical attribute bonuses

## Implementation Plan

1. **Phase 1**: Create all new trait files
2. **Phase 2**: Update BOOST sections for each race
3. **Phase 3**: Update TRAITS sections for each race
4. **Phase 4**: Update race comparison document
5. **Phase 5**: Test in-game and balance as needed

## Diet and Environment Considerations

| Race | Primary Diet | Preferred Environment | Resource Focus |
|------|-------------|----------------------|----------------|
| Hellspawn (TILAPI) | Meat-heavy | Hot, volcanic | Mining, slaves |
| Bloodelves (CANTOR) | Blood, meat | Dark, forested | Exploitation, luxury |
| Froggians (Q_AMEVIA) | Vegetarian, fish | Wet, marshy | Farming, research |
| Finestorians (DONDORIAN) | Balanced | Temperate, urban | Crafting, refining |
| Wormlings (GARTHIMI) | Omnivorous | Varied, adaptable | Farming, adaptation |
| Pasunkas (CRETONIAN) | Vegetarian | Plains, grasslands | Farming, pasture |
| Northmen (HUMAN) | Meat, fish | Cold, coastal | Trading, exploration |
| Satyrs (ARGONOSH) | Fruits, game | Forest, wilderness | Hunting, forestry |
| Cretonians (CRETONIAN) | Protein-rich | Varied, training grounds | Military, honor |

These dietary and environmental preferences should be reflected in their BOOST sections and trait bonuses to create a more immersive and unique experience for each race.
