# Frozen Empires — Force Builder

A complete online force builder for **Frozen Empires: An Unofficial Blood & Plunder Module** by Dan Carlson, covering the Great Northern War (1700–1721).

## Features

- **All 5 nationalities**: Denmark-Norway, Saxony & Polish-Lithuanian Commonwealth, Russia, Sweden, and Unaligned Cossacks
- **15 factions** with full special rules and force options
- **All commanders**: Standard (Untested/Experienced/Seasoned), Historic, and Legendary
- **All units** with full stat blocks, weapons, equipment, and unit options
- **Live points tracking** — total updates as you add/remove units and change model counts
- **Unit library** with search — browse all available units for your chosen faction
- **Force summary** panel with breakdown by unit type
- **Rules reference** tab — faction rules, force options, and new special rules glossary
- **Export/Import** — save forces as text (with embedded JSON for re-importing)

## Usage

1. Open `index.html` in a browser (works offline — no server needed)
2. Select a **Nationality** in the left panel
3. Choose a **Faction**
4. Pick a **Commander**
5. Add **Core** and **Support** units using the selector or the **Unit Library** (right panel, click any unit to add)
6. Adjust **model counts** using the +/− buttons or click a unit card to open the editor
7. Use **Export** to save your force list as text or download it

## Project Structure

```
frozen-empires-force-builder/
├── index.html      # Main application
├── style.css       # Styling (historical military aesthetic)
├── app.js          # Application logic
├── data.js         # All game data (factions, commanders, units)
└── README.md       # This file
```

## No Build Step Required

Pure HTML + CSS + JavaScript. Open `index.html` directly in any modern browser.

For VS Code: install the **Live Server** extension for instant refresh as you develop.

## Data Coverage

### Denmark-Norway
- Army of Denmark-Norway 1700–1721
- Danish Royal Navy 1700–1721
- Danish Privateers 1700–1721
- **Commanders**: Untested/Experienced/Seasoned, Jens Rostgaard, Tordenskiold, Frederick IV

### Saxony & Polish-Lithuanian Commonwealth
- Army of Saxony 1682–1716
- Polish-Lithuanian Army 1700–1721
- **Commanders**: Saxon & Polish-Lithuanian standard, Heinrich von Steinau, Johann Matthias von der Schulenburg, Augustus II

### Russia
- Old Russian Army 1686–1705
- Peter's New Model Army 1705–1721
- Semyonovsky Lifeguard Regiment 1700–1721
- Russian Imperial Navy (1700–1755)
- Russian Privateers (1700–1721)
- **Commanders**: Standard, Count Sheremetev, Prince Menshikov, Matija Zmajević, Peter I

### Sweden
- Swedish Army 1700–1721
- Drabant Corps 1700–1721
- Swedish Royal Navy 1700–1721
- Swedish Privateers
- **Commanders**: Standard, Magnus Stenbock, Carl Gustav Rehnskiold, Olof Stromstierna, Carl Georg Sioblad, John Norcross, Charles XII

### Unaligned (Cossack)
- Cossack Raiding Party 1700–1721
- Zaporozhian Sich 1700–1721
- **Commanders**: Standard, Ivan Skoropadsky, Ivan Mazepa

## Credits

Game module by **Dan Carlson** (Frozen Empires: An Unofficial Blood & Plunder Module).  
Blood & Plunder is created by **Firelock Games**.

This force builder is a fan tool and is not affiliated with or endorsed by Firelock Games or Dan Carlson.

## License

This tool is unofficial and for personal/community use only. All game content belongs to their respective owners.
