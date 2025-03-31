# RoomianRealms (v0.52)

## Overview

*"Eight extraordinary civilizations emerge from the ashes of a shattered world. From mystical forest guardians to technological amphibians, each society has forged its own path through the chaos of divine conflict."*

When ancient powers clashed, they left behind a tapestry of diverse cultures—each shaped by their connection to forgotten deities. Now these inheritors of divine wisdom and arcane knowledge vie for supremacy across fractured lands. The future belongs to those who can unite these disparate peoples or bend their unique strengths to their will.

## Documentation

- **[Online Documentation](https://thothius.github.io/roomian-realms/)** - View our comprehensive documentation website
- **In-Game Documentation** - Access the HTML documentation in the mod folder

## What's New in Version 0.52

### Race Enhancement Patch v1
- Standardized race sizes into three distinct groups for better gameplay balance:
  - **Small Races**: Wormlings and Froggians (Height 5, Width 5)
  - **Medium Races**: Satyrs, Bloodelves, Pasunkas, and Northmen (Height 7, Width 7)
  - **Large Races**: Finestorians and Hellspawn (Height 9, Width 9)
- Rebalanced adult maturation ages based on race size:
  - Smaller races reach adulthood faster (Froggians: 60 days)
  - Medium races have moderate maturation periods (80-90 days)
  - Larger races develop more slowly (110-120 days)
  - Wormlings remain unique with extremely rapid maturation (15 days) reflecting their alien biology

### Enhanced Character Trait System
- Added comprehensive race-specific traits for all 8 playable races
- Each race now has 8 unique traits reflecting their culture and biology
- Implemented the God Emperor Devotee trait for Wormlings and other followers
- Added elite traits that reflect connections to all five deities
- Balanced trait distribution and improved exclusivity rules

### Comprehensive Religious Framework
- Expanded lore for all five deities (Athuri, Aminion, Crator, Shmalor, God Emperor)
- Detailed connections between races and their patron deities
- Enhanced temple descriptions and religious practices
- Sacred rituals and ceremonies for each faith
- Revealed the true nature of the God Emperor and its relationship with Shmalor

### Streamlined Building System
- Removed complex religious buildings (PANTHEON_TEMPLE_RG2, PAIN_EMBRACE_RG2, BLOOD_RITUAL_RG2, DREAMING_POOL_RG2)
- Removed void-related structures (VOID_AMPLIFIER_RG2, VOID_CRYSTAL_REFINERY_RG2, VOID_GATEWAY_RG2, VOID_NEXUS_RG2, BREACH_PORTAL_RG2)
- Removed additional military buildings (GLORY_HOARD_RG2, WILD_HUNT_LODGE_RG2)
- Removed resource-focused facilities (FORGE_BOUND_RG2, MINE_VOID_ORE_RG2, CORPSE_PROCESSOR_RG2, EMBASSY_RG2)
- Retained essential buildings: race-specific nurseries (8), military/training buildings (3), production buildings (2), and religious shrines (4)

### Enhanced Military Buildings
- Added **Mercenary Expedition Post** that sends mercenaries on expeditions to find luxury resources
- Updated **Cretonian Dojo** to focus on unarmed combat and training with pushup gloves
- Maintained the **Advanced Armory** for production of specialized weapons including pushup gloves

## Features

### Unique Races

| ![Satyrs](docs/assets/race_backgrounds/satyrs.png) | ![Froggians](docs/assets/race_backgrounds/froggians.png) |
|:---:|:---:|
| **Satyrs** | **Froggians** |
| **Category**: Children of Light | **Category**: Children of Light |
| **Deity**: Athuri | **Deity**: Athuri |
| **Size**: Medium (Adult: 80 Days) | **Size**: Small (Adult: 60 Days) |
| Forest-dwelling, nature-oriented beings with strong spiritual connections. They excel in archery and hunting, with a deep understanding of herbal wisdom. | Amphibious race renowned for their innovation, diplomacy, and harmonious lifestyles. They live in perfect balance with nature, while developing remarkable technologies. |

| ![Northmen](docs/assets/race_backgrounds/northmen.png) | ![Pasunkas](docs/assets/race_backgrounds/pasunkas.png) |
|:---:|:---:|
| **Northmen** | **Pasunkas** |
| **Category**: Heirs of Balance | **Category**: Heirs of Balance |
| **Deity**: Crator/Shmalor | **Deity**: Crator |
| **Size**: Medium (Adult: 80 Days) | **Size**: Medium (Adult: 90 Days) |
| Hardy humans with Norse-inspired society, skilled in battle and craftsmanship. They value honor and practical knowledge, forming the backbone of many trade networks. | Disciplined engineers with a deep connection to geometric patterns and architecture. Their society thrives on order and structured social hierarchies. |

| ![Wormlings](docs/assets/race_backgrounds/wormlings.png) | ![Bloodelves](docs/assets/race_backgrounds/bloodelves.png) |
|:---:|:---:|
| **Wormlings** | **Bloodelves** |
| **Category**: Breakers of Reality | **Category**: Breakers of Reality |
| **Deity**: Shmalor/God Emperor | **Deity**: Aminion/Shmalor |
| **Size**: Small (Adult: 15 Days) | **Size**: Medium (Adult: 85 Days) |
| Alien hive-minded entities from beyond reality with a unique connection to the void. They communicate telepathically and possess an otherworldly understanding of dimensional physics. | Fallen elves corrupted by blood magic and chaos, embracing pain as enlightenment. Their society values personal transformation through suffering. |

| ![Finestorians](docs/assets/race_backgrounds/finestorians.png) | ![Hellspawn](docs/assets/race_backgrounds/hellspawn.png) |
|:---:|:---:|
| **Finestorians** | **Hellspawn** |
| **Category**: Arbiters of Order | **Category**: Arbiters of Order |
| **Deity**: Crator | **Deity**: Aminion |
| **Size**: Large (Adult: 120 Days) | **Size**: Large (Adult: 110 Days) |
| Technologically advanced beings with a deep respect for order and perfection. Their society emphasizes intellectual achievement and architectural grandeur. | Monstrous beings born of chaos and fire with an insatiable bloodlust. Their society thrives on conquest and dominance, with a harsh survival-of-the-strongest hierarchy. |

- **Children of Light** (Good Races)
  - Satyrs (ARGONOSH) - Female-dominated forest dwellers who value nature and defense
  - Froggians (Q_AMEVIA) - Amphibious beings who embody wisdom and technology

- **Heirs of Balance** (Neutral Races)
  - Finestorians (DONDORIAN) - Craftsmen who value skill and honest labor
  - Northmen (HUMAN) - Pragmatic traders and warriors driven by ambition

- **Servants of Shadow** (Evil Races)
  - Hellspawns (TILAPI) - Demonic entities that embody chaos and destruction
  - Bloodelves (CANTOR) - Vampire-like beings who maintain slaves for blood consumption

- **The Outsiders** (Beyond Morality)
  - Wormlings (GARTHIMI) - Parasitic entities that infest hosts
  - Pasunkas (CRETONIAN) - Spiritual martial artists who value discipline

### Divine Powers

- **The Fallen One (Aminion)** - Lord of chaos who rebelled against the cosmic order. Once a powerful Astari, Aminion sought to remake reality in his own image. Primarily worshipped by Hellspawns and Bloodelves.

- **The Leader (Athuri)** - Greatest of the Astari, who embodies wisdom, harmony, and the natural order. Defeated his brother Bardok in both cosmic wars, establishing balance in the world. Primarily worshipped by Satyrs and Froggians.

- **The Creator (Crator)** - Divine Architect and foremost creator among the Astari, who shaped the physical world and its many creatures. His temples celebrate craftsmanship, discipline, and the perfection of form. Primarily worshipped by Pasunkas and Finestorians.

- **The Slain Queen (Shmalor)** - Queen of the Agonosh, who represents the cosmic void and the spaces between realities. Slain during the first war of the gods, her death tore the veil between dimensions. Primarily worshipped by Wormlings.

- **The God Emperor** - An alien entity from beyond reality that entered Roomia through The Breach created by Shmalor's death. Unlike the other deities who were once gods of Roomia, the God Emperor is an extradimensional presence whose consciousness exists primarily in the void between dimensions. The Wormlings contain fragments of its essence, allowing them to perceive multiple realities simultaneously. The ultimate goal of its worship is transcendence - preparing Roomia for the God Emperor's eventual return.

### Character Traits System

The mod features a comprehensive trait system with:

- **Race-Specific Traits**: Each race has 8 unique traits that reflect their cultural and biological characteristics
- **Elite Traits**: Rare and powerful traits with very low occurrence rates (0.5-1.5%)
- **Religious Devotee Traits**: Special traits for devoted followers of each of the five deities
- **Balanced Distribution**: Traits are distributed appropriately based on race population sizes
- **Mutual Exclusivity**: Thematically opposite traits cannot be possessed simultaneously

### Custom Music

Immerse yourself in the world of Roomian Realms with a custom soundtrack that enhances the atmosphere of your empire.

## Installation

1. Download the latest release from the [Releases page](https://github.com/Thothius/roomian-realms/releases)
2. Extract the contents to your Songs of Syx mods folder (usually located at `C:\Users\[YourUsername]\AppData\Roaming\songsofsyx\mods\`)
3. Launch Songs of Syx and enable the mod in the Mods menu
4. Start a new game to experience all features

## Compatibility

- Compatible with Songs of Syx version 68
- Not compatible with previous versions

## Changelog

### Version 0.52 (April 15, 2025)
- Added Race Enhancement Patch v1, standardizing race sizes and rebalancing adult maturation ages
- Updated documentation to reflect changes in version 0.52

### Version 0.51 (March 31, 2025)
- Added 41 race-specific trait files for all 8 races
- Implemented the God Emperor as the fifth deity in the religious framework
- Fixed references to deities in documentation
- Updated trait system to reflect the expanded religious framework

### Version 0.5 (Previous Release)
- Streamlined building system by removing complex and redundant structures
- Enhanced military buildings with new functionality
- Expanded religious framework and lore
- Added custom music

## Credits

- Mod created by Ted
- Special thanks to the Songs of Syx modding community

## License

This project is licensed under the MIT License - see the LICENSE file for details.
