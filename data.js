// Frozen Empires: Great Northern War — Force Builder Data
// Based on the unofficial Blood & Plunder module by Dan Carlson

const NATIONALITIES = {
  DENMARK: 'Denmark-Norway',
  SAXONY: 'Saxony & Polish-Lithuanian Commonwealth',
  RUSSIA: 'Russia',
  SWEDEN: 'Sweden',
  UNALIGNED: 'Unaligned (Cossack)',
};

// ─────────────────────────────────────────────────────────────────
// COMMANDERS
// ─────────────────────────────────────────────────────────────────

const COMMANDERS = {

  // DENMARK-NORWAY
  dn_untested: {
    id: 'dn_untested', name: 'Untested Commander', nationality: NATIONALITIES.DENMARK,
    pts: 0, commandRange: 4, commandPoints: 1, specialRules: [],
    canLead: ['Army of Denmark-Norway 1700-1721', 'Danish Royal Navy 1700-1721', 'Danish Privateers 1700-1721'],
    tier: 'standard'
  },
  dn_experienced: {
    id: 'dn_experienced', name: 'Experienced Commander', nationality: NATIONALITIES.DENMARK,
    pts: 10, commandRange: 8, commandPoints: 2, specialRules: ['1 from Danish Commander List'],
    canLead: ['Army of Denmark-Norway 1700-1721', 'Danish Royal Navy 1700-1721', 'Danish Privateers 1700-1721'],
    tier: 'standard'
  },
  dn_seasoned: {
    id: 'dn_seasoned', name: 'Seasoned Commander', nationality: NATIONALITIES.DENMARK,
    pts: 20, commandRange: 12, commandPoints: 2, specialRules: ['2 from Danish Commander List'],
    canLead: ['Army of Denmark-Norway 1700-1721', 'Danish Royal Navy 1700-1721', 'Danish Privateers 1700-1721'],
    tier: 'standard'
  },
  jens_rostgaard: {
    id: 'jens_rostgaard', name: 'Jens Rostgaard', nationality: NATIONALITIES.DENMARK,
    pts: 14, commandRange: 12, commandPoints: 2, specialRules: ['Strict'],
    mainWeapons: 'Pistol and Standard Melee Weapon',
    canLead: ['Army of Denmark-Norway 1700-1721'],
    tier: 'historic',
    bio: 'From a peasant family, commanded militia at the Landing at Humlebæk. Also known for compiling Copenhagen\'s history.'
  },
  tordenskiold: {
    id: 'tordenskiold', name: 'Peder Jansen Wessel "Tordenskiold"', nationality: NATIONALITIES.DENMARK,
    pts: 32, commandRange: 16, commandPoints: 3, specialRules: ['Commodore', 'Sailing Master', 'Unwavering', 'Broadside!', 'Gunnery Captain'],
    mainWeapons: 'Brace of Pistols, Standard Melee Weapon',
    canLead: ['Danish Royal Navy 1700-1721'],
    tier: 'legendary',
    bio: 'One of the finest naval commanders ever produced by Denmark-Norway. Famous for a 14-hour duel with a Swedish frigate.'
  },
  frederick_iv: {
    id: 'frederick_iv', name: 'Frederick IV', nationality: NATIONALITIES.DENMARK,
    pts: 32, commandRange: 20, commandPoints: 3,
    specialRules: ['Autocrat', 'Inspiring', 'Careful Planning', 'Field Gun', 'Expert Artillery Crew', 'God\'s Blessing or the Devil\'s Luck', 'Evade (only while mounted)'],
    mainWeapons: 'Pistol and Standard Melee Weapon',
    canLead: ['Army of Denmark-Norway 1700-1721'],
    tier: 'legendary',
    notes: 'May join support unit only if mounted at start and is a Danish-Norwegian unit.',
    bio: 'King of Denmark during the GNW. Commanded troops at the Battle of Gadebusch. Abolished serfdom in 1702.'
  },

  // SAXONY / POLISH-LITHUANIAN
  sax_untested: {
    id: 'sax_untested', name: 'Untested Saxon Commander', nationality: NATIONALITIES.SAXONY,
    pts: 0, commandRange: 4, commandPoints: 1, specialRules: [],
    canLead: ['Army of Saxony 1682-1716', 'Polish-Lithuanian Army 1700-1721'],
    tier: 'standard'
  },
  sax_experienced: {
    id: 'sax_experienced', name: 'Experienced Saxon Commander', nationality: NATIONALITIES.SAXONY,
    pts: 10, commandRange: 8, commandPoints: 2, specialRules: ['1 from Saxon Commander List'],
    canLead: ['Army of Saxony 1682-1716', 'Polish-Lithuanian Army 1700-1721'],
    tier: 'standard'
  },
  sax_seasoned: {
    id: 'sax_seasoned', name: 'Seasoned Saxon Commander', nationality: NATIONALITIES.SAXONY,
    pts: 20, commandRange: 12, commandPoints: 2, specialRules: ['2 from Saxon Commander List'],
    canLead: ['Army of Saxony 1682-1716', 'Polish-Lithuanian Army 1700-1721'],
    tier: 'standard'
  },
  pol_untested: {
    id: 'pol_untested', name: 'Untested Polish-Lithuanian Commander', nationality: NATIONALITIES.SAXONY,
    pts: 0, commandRange: 4, commandPoints: 1, specialRules: [],
    canLead: ['Polish-Lithuanian Army 1700-1721'],
    tier: 'standard'
  },
  pol_experienced: {
    id: 'pol_experienced', name: 'Experienced Polish-Lithuanian Commander', nationality: NATIONALITIES.SAXONY,
    pts: 10, commandRange: 8, commandPoints: 2, specialRules: ['1 from Polish Commander List'],
    canLead: ['Polish-Lithuanian Army 1700-1721'],
    tier: 'standard'
  },
  pol_seasoned: {
    id: 'pol_seasoned', name: 'Seasoned Polish-Lithuanian Commander', nationality: NATIONALITIES.SAXONY,
    pts: 20, commandRange: 12, commandPoints: 2, specialRules: ['2 from Polish Commander List'],
    canLead: ['Polish-Lithuanian Army 1700-1721'],
    tier: 'standard'
  },
  heinrich_steinau: {
    id: 'heinrich_steinau', name: 'Heinrich von Steinau', nationality: NATIONALITIES.SAXONY,
    pts: 15, commandRange: 12, commandPoints: 2, specialRules: ['Careful Planning'],
    mainWeapons: 'Pistol and Standard Melee Weapon',
    canLead: ['Army of Saxony 1682-1716'],
    tier: 'historic',
    bio: 'Veteran of the War of the Grand Alliance. Won at Jungfernhof but was captured after the battle at Pułtusk.'
  },
  schulenburg: {
    id: 'schulenburg', name: 'Johann Matthias von der Schulenburg', nationality: NATIONALITIES.SAXONY,
    pts: 20, commandRange: 16, commandPoints: 2, specialRules: ['Vast Experience', 'Inspiring'],
    mainWeapons: 'Pistol and Standard Melee Weapon',
    canLead: ['Army of Saxony 1682-1716'],
    tier: 'historic',
    bio: 'Eccentric art collector and lifetime mercenary. Fought in the GNW, War of Spanish Succession, and the Seventh Ottoman-Venetian War.'
  },
  augustus_ii: {
    id: 'augustus_ii', name: 'Augustus II "the Strong"', nationality: NATIONALITIES.SAXONY,
    pts: 32, commandRange: 16, commandPoints: 3,
    specialRules: ['Autocrat', 'Very Inspiring', 'Tough', 'Motivated', 'Resilient'],
    mainWeapons: 'Pistol and Standard Melee Weapon',
    canLead: ['Army of Saxony 1682-1716', 'Polish-Lithuanian Army 1700-1721'],
    tier: 'legendary',
    notes: 'May join support unit only if mounted at start and is a Saxon unit.',
    bio: 'Elector of Saxony and King of Poland. Famous for bending horseshoes with his bare hands. His harassment of Sweden gave Russia time to reorganize.'
  },

  // RUSSIA
  rus_untested: {
    id: 'rus_untested', name: 'Untested Russian Commander', nationality: NATIONALITIES.RUSSIA,
    pts: 0, commandRange: 4, commandPoints: 1, specialRules: [],
    canLead: ['Old Russian Army 1686-1705', "Peter's New Model Army 1705-1721", 'Semyonovsky Lifeguard Regiment 1700-1721', 'Russian Imperial Navy (1700-1755)', 'Russian Privateers (1700-1721)'],
    tier: 'standard'
  },
  rus_experienced: {
    id: 'rus_experienced', name: 'Experienced Russian Commander', nationality: NATIONALITIES.RUSSIA,
    pts: 10, commandRange: 8, commandPoints: 2, specialRules: ['1 from Russian Commander List'],
    canLead: ['Old Russian Army 1686-1705', "Peter's New Model Army 1705-1721", 'Semyonovsky Lifeguard Regiment 1700-1721', 'Russian Imperial Navy (1700-1755)', 'Russian Privateers (1700-1721)'],
    tier: 'standard'
  },
  rus_seasoned: {
    id: 'rus_seasoned', name: 'Seasoned Russian Commander', nationality: NATIONALITIES.RUSSIA,
    pts: 20, commandRange: 12, commandPoints: 2, specialRules: ['2 from Russian Commander List'],
    canLead: ['Old Russian Army 1686-1705', "Peter's New Model Army 1705-1721", 'Semyonovsky Lifeguard Regiment 1700-1721', 'Russian Imperial Navy (1700-1755)', 'Russian Privateers (1700-1721)'],
    tier: 'standard'
  },
  sheremetev: {
    id: 'sheremetev', name: 'Count Boris Sheremetev', nationality: NATIONALITIES.RUSSIA,
    pts: 15, commandRange: 12, commandPoints: 2, specialRules: ['Inspiring', 'Reactive Commander'],
    mainWeapons: 'Pistol and Standard Melee Weapon',
    canLead: ['Old Russian Army 1686-1705', "Peter's New Model Army 1705-1721"],
    tier: 'historic',
    bio: 'Most senior Russian officer in the GNW. Often sluggish in command but commanded at Poltava. Known for reacting to the enemy rather than planning ahead.'
  },
  menshikov: {
    id: 'menshikov', name: 'Prince Aleksander Menshikov', nationality: NATIONALITIES.RUSSIA,
    pts: 9, commandRange: 12, commandPoints: 1, specialRules: ['Aggressive Commander', 'Impulsive', 'High Standing'],
    mainWeapons: 'Brace of Pistols and Standard Melee Weapon',
    canLead: ['Old Russian Army 1686-1705', "Peter's New Model Army 1705-1721"],
    tier: 'historic',
    bio: 'Witty, charming, inexperienced, and hilariously corrupt. Defrauded the Tsar out of 100,000 rubles and was eventually exiled to Siberia.'
  },
  zmajevic: {
    id: 'zmajevic', name: 'Matija Zmajević', nationality: NATIONALITIES.RUSSIA,
    pts: 25, commandRange: 16, commandPoints: 2, specialRules: ['Commodore', 'Broadside!', 'Sailing Master', 'Shipwright'],
    mainWeapons: 'Brace of Pistols and Standard Melee Weapon',
    canLead: ['Russian Imperial Navy (1700-1755)'],
    tier: 'historic',
    bio: 'Shipbuilder turned admiral who led the Russian navy to victory at Gangut. Praised as a naval tactician and key in creating the Russian navy.'
  },
  peter_i: {
    id: 'peter_i', name: 'Peter I "the Great"', nationality: NATIONALITIES.RUSSIA,
    pts: 32, commandRange: 20, commandPoints: 3,
    specialRules: ['Very Inspiring', 'Commodore', "God's Blessing or Devil's Luck", 'Strict', 'Autocrat'],
    mainWeapons: 'Brace of Pistols and Standard Melee Weapon',
    canLead: ['Old Russian Army 1686-1705', "Peter's New Model Army 1705-1721", 'Semyonovsky Lifeguard Regiment 1700-1721', 'Russian Imperial Navy (1700-1755)'],
    tier: 'legendary',
    notes: 'May join support unit only if mounted at start and is a Russian unit.',
    bio: 'The 6\'9" Tsar who dragged Russia into the modern era. Obsessed with ships, built the Russian navy, and learned from every defeat. Died after swimming into icy water to save drowning soldiers.'
  },

  // SWEDEN
  swe_untested: {
    id: 'swe_untested', name: 'Untested Swedish Commander', nationality: NATIONALITIES.SWEDEN,
    pts: 0, commandRange: 4, commandPoints: 1, specialRules: [],
    canLead: ['Swedish Army 1700-1721', 'Drabant Corps 1700-1721', 'Swedish Royal Navy 1700-1721', 'Swedish Privateers'],
    tier: 'standard'
  },
  swe_experienced: {
    id: 'swe_experienced', name: 'Experienced Swedish Commander', nationality: NATIONALITIES.SWEDEN,
    pts: 10, commandRange: 8, commandPoints: 2, specialRules: ['1 from Swedish Commander List'],
    canLead: ['Swedish Army 1700-1721', 'Drabant Corps 1700-1721', 'Swedish Royal Navy 1700-1721', 'Swedish Privateers'],
    tier: 'standard'
  },
  swe_seasoned: {
    id: 'swe_seasoned', name: 'Seasoned Swedish Commander', nationality: NATIONALITIES.SWEDEN,
    pts: 20, commandRange: 12, commandPoints: 2, specialRules: ['2 from Swedish Commander List'],
    canLead: ['Swedish Army 1700-1721', 'Drabant Corps 1700-1721', 'Swedish Royal Navy 1700-1721', 'Swedish Privateers'],
    tier: 'standard'
  },
  stenbock: {
    id: 'stenbock', name: 'Magnus Stenbock', nationality: NATIONALITIES.SWEDEN,
    pts: 15, commandRange: 8, commandPoints: 1, specialRules: ['Elan', 'Resilient'],
    mainWeapons: 'Pistol and Standard Melee Weapon',
    canLead: ['Swedish Army 1700-1721'],
    tier: 'historic',
    bio: 'Field marshal and director of the General War Commissariat. Defeated a Saxon-Danish army at Gadebusch but was captured at the Siege of Tönning.'
  },
  rehnskiold: {
    id: 'rehnskiold', name: 'Carl Gustav Rehnskiold', nationality: NATIONALITIES.SWEDEN,
    pts: 25, commandRange: 16, commandPoints: 2, specialRules: ['Vast Experience', 'Very Inspiring'],
    mainWeapons: 'Pistol and Standard Melee Weapon',
    canLead: ['Swedish Army 1700-1721'],
    tier: 'historic',
    bio: 'Advisor, mentor, and commander-in-chief under Charles XII. Captured at Poltava, spent the war caring for Swedish prisoners.'
  },
  stromstierna: {
    id: 'stromstierna', name: 'Olof Stromstierna', nationality: NATIONALITIES.SWEDEN,
    pts: 15, commandRange: 8, commandPoints: 2, specialRules: ['Expert Sailors', 'Broadside!', 'Strict'],
    mainWeapons: 'Brace of Pistols and Standard Melee Weapon',
    canLead: ['Swedish Royal Navy 1700-1721'],
    tier: 'historic',
    bio: 'First served in the Netherlands and traveled to the New World. Made his name in the Swedish navy but was defeated by Tordenskjold at Dynekilen.'
  },
  sioblad: {
    id: 'sioblad', name: 'Carl Georg Sioblad', nationality: NATIONALITIES.SWEDEN,
    pts: 28, commandRange: 12, commandPoints: 3, specialRules: ['Commodore', 'Cold Blooded', 'Broadside!', 'Impulsive'],
    canLead: ['Swedish Royal Navy 1700-1721'],
    tier: 'historic',
    bio: 'Governor of Malmö post-war. Foolishly attacked 61 Russian galleys with 5 ships at Grengam; four frigates ran aground and were captured.'
  },
  norcross: {
    id: 'norcross', name: 'John Norcross', nationality: NATIONALITIES.SWEDEN,
    pts: 10, commandRange: 8, commandPoints: 1, specialRules: ['Aggressive Commander', 'Wanted'],
    canLead: ['Swedish Privateers'],
    tier: 'historic',
    bio: 'Liverpool-born Jacobite exile turned Swedish privateer. Captured, escaped, recaptured, pardoned, recaptured again. Died in Danish prison in 1758.'
  },
  charles_xii: {
    id: 'charles_xii', name: 'Charles XII', nationality: NATIONALITIES.SWEDEN,
    pts: 32, commandRange: 20, commandPoints: 3,
    specialRules: ['Autocrat', 'Very Inspiring', 'Bold', 'Aggressive Commander', 'Unwavering'],
    mainWeapons: 'Brace of Pistols and Standard Melee Weapon',
    canLead: ['Swedish Army 1700-1721', 'Drabant Corps 1700-1721'],
    tier: 'legendary',
    notes: 'May join support unit only if mounted at start and is a Swedish unit.',
    bio: 'Crowned at 15, died at 36. Won 25 of 33 battles. The greatest warrior-king of the North — lost only because Sweden\'s manpower could not match her enemies\'.'
  },

  // UNALIGNED COSSACK
  cos_untested: {
    id: 'cos_untested', name: 'Untested Cossack Commander', nationality: NATIONALITIES.UNALIGNED,
    pts: 0, commandRange: 4, commandPoints: 1, specialRules: [],
    canLead: ['Cossack Raiding Party 1700-1721', 'Zaporozhian Sich 1700-1721'],
    tier: 'standard'
  },
  cos_experienced: {
    id: 'cos_experienced', name: 'Experienced Cossack Commander', nationality: NATIONALITIES.UNALIGNED,
    pts: 10, commandRange: 8, commandPoints: 2, specialRules: ['1 from Unaligned Cossack Commander List'],
    canLead: ['Cossack Raiding Party 1700-1721', 'Zaporozhian Sich 1700-1721'],
    tier: 'standard'
  },
  cos_seasoned: {
    id: 'cos_seasoned', name: 'Seasoned Cossack Commander', nationality: NATIONALITIES.UNALIGNED,
    pts: 20, commandRange: 12, commandPoints: 2, specialRules: ['2 from Unaligned Cossack Commander List'],
    canLead: ['Cossack Raiding Party 1700-1721', 'Zaporozhian Sich 1700-1721'],
    tier: 'standard'
  },
  skoropadsky: {
    id: 'skoropadsky', name: 'Ivan Skoropadsky', nationality: NATIONALITIES.UNALIGNED,
    pts: 25, commandRange: 16, commandPoints: 2, specialRules: ['Delay Tactics', 'Inspiring', 'Bold'],
    canLead: ['Zaporozhian Sich 1700-1721'],
    tier: 'historic',
    notes: 'In Army Scale, this force must be allied with Russia.',
    bio: 'Replaced Mazepa as Hetman after the betrayal. Negotiated greater autonomy for the Sich post-war and kept Peter from absorbing Cossack lands.'
  },
  mazepa: {
    id: 'mazepa', name: 'Ivan Mazepa', nationality: NATIONALITIES.UNALIGNED,
    pts: 30, commandRange: 16, commandPoints: 3, specialRules: ['Guerilla Commander', 'Very Inspiring', 'Lucky'],
    canLead: ['Zaporozhian Sich 1700-1721'],
    tier: 'legendary',
    notes: 'In Army Scale, this force must be allied with Sweden.',
    bio: 'Hetman of the Sich from 1687-1708. Attempted to break from Russia and join Sweden for full independence. Only 3,000 men followed. Fled with Charles XII to the Ottoman Empire and died at 70.'
  },
};

// ─────────────────────────────────────────────────────────────────
// UNITS
// ─────────────────────────────────────────────────────────────────

const UNITS = {

  // ── DENMARK-NORWAY ──
  indrullerede: {
    id: 'indrullerede', name: 'Indrullerede', nationality: NATIONALITIES.DENMARK,
    ptsPerModel: 6, experienceLevel: 'Trained',
    weapons: 'Firelock Musket, Socket Bayonets, Standard Melee Weapons',
    fight: '6/7', shoot: '6/6', resolve: 5,
    specialRules: ['Fast Reload', 'Expertly Drilled', 'Tough'],
    options: [
      'May be upgraded to Veteran for +1 pt/model',
      'May exchange Socket Bayonets for Plug Bayonets for -4 pts (unit)',
    ],
    minModels: 4, maxModels: 12
  },
  provinsmilits: {
    id: 'provinsmilits', name: 'Provinsmilits', nationality: NATIONALITIES.DENMARK,
    ptsPerModel: 3, experienceLevel: 'Inexperienced',
    weapons: 'Firelock Muskets, Standard Melee Weapons',
    fight: '7/7', shoot: '7/7', resolve: 6,
    specialRules: ['Drilled', 'Tough'],
    options: [
      'May be upgraded to Trained for +1 pt/model',
      'May exchange Drilled for Sailors or Artillery Crew at no cost',
    ],
    minModels: 4, maxModels: 12
  },
  milits: {
    id: 'milits', name: 'Milits', nationality: NATIONALITIES.DENMARK,
    ptsPerModel: 4, experienceLevel: 'Inexperienced',
    weapons: 'Firelock Muskets, Socket Bayonets, Standard Melee Weapons',
    fight: '7/7', shoot: '7/7', resolve: 6,
    specialRules: ['Drilled'],
    options: ['May be upgraded to Trained for +1 pt/model'],
    minModels: 4, maxModels: 12
  },
  livgarde: {
    id: 'livgarde', name: 'Livgarde', nationality: NATIONALITIES.DENMARK,
    ptsPerModel: 9, experienceLevel: 'Veteran',
    weapons: 'Firelock Muskets, Socket Bayonets, Standard Melee Weapon',
    fight: '5/5', shoot: '6/6', resolve: 4,
    specialRules: ['Expertly Drilled', 'Fast Reload', 'Tough', 'Spry', 'Vanguard', 'Support: Indrullerede'],
    options: [
      'May be downgraded to Trained for -1 pt/model',
      'May exchange Firelock Muskets & Socket Bayonets for Horses and Dragoon Muskets for -1 pt (shoot save 7 while mounted)',
    ],
    minModels: 4, maxModels: 12
  },
  grenadiers_dn: {
    id: 'grenadiers_dn', name: 'Grenadiers (Danish)', nationality: NATIONALITIES.DENMARK,
    ptsPerModel: 8, experienceLevel: 'Veteran',
    weapons: 'Firelock Muskets, Socket Bayonets, Standard Melee Weapon',
    fight: '5/6', shoot: '6/6', resolve: 5,
    specialRules: ['Expertly Drilled', 'Fast Reload', 'Tough', 'Battle Hardened'],
    options: [
      'May be downgraded to Trained for -1 pt/model',
      '1 of 4 may carry Explosives at no cost',
      'Explosive carriers may exchange Firelock Musket for Hand Mortar at no cost',
      'May exchange Socket Bayonets for Plug Bayonets for -4 pts (unit)',
      'If no Plug Bayonets and no Explosives, reduce unit cost by -4 pts',
    ],
    minModels: 4, maxModels: 12
  },
  danish_cuirassiers: {
    id: 'danish_cuirassiers', name: 'Danish Cuirassiers', nationality: NATIONALITIES.DENMARK,
    ptsPerModel: 6, experienceLevel: 'Trained',
    weapons: 'Brace of Pistols, Heavy Cavalry Sabers', equipment: 'Horse, Armor',
    fight: '6/6', shoot: '6/7', resolve: 5,
    specialRules: ['Quick (mounted)', 'Hard Chargers', 'Tough'],
    options: ['May be upgraded to Veteran for +1 pt/model'],
    minModels: 4, maxModels: 12
  },
  danish_horse_grenadiers: {
    id: 'danish_horse_grenadiers', name: 'Danish Horse Grenadiers', nationality: NATIONALITIES.DENMARK,
    ptsPerModel: 7, experienceLevel: 'Veteran',
    weapons: 'Dragoon Musket, Brace of Pistols, Standard Melee Weapons', equipment: 'Horses',
    fight: '6/7', shoot: '6/7', resolve: 5,
    specialRules: ['Quick (mounted)', 'Hard Chargers', 'Tough', 'Battle Hardened'],
    options: [
      '1 of 4 may carry Explosives at no cost',
      'Explosive carriers may exchange Dragoon Musket for Hand Mortar at no cost',
    ],
    minModels: 4, maxModels: 12
  },
  fyorr: {
    id: 'fyorr', name: 'Fyorr', nationality: NATIONALITIES.DENMARK,
    ptsPerModel: 4, experienceLevel: 'Trained',
    weapons: 'Firelock Muskets, Standard Melee Weapons',
    fight: '6/6', shoot: '6/7', resolve: 6,
    specialRules: ['Elusive', 'Scouts'],
    options: [
      'May be upgraded to Veteran for +1 pt/model',
      'May take Socket Bayonets for +4 pts (unit)',
    ],
    minModels: 4, maxModels: 12
  },
  ski_troops: {
    id: 'ski_troops', name: 'Ski Troops', nationality: NATIONALITIES.DENMARK,
    ptsPerModel: 5, experienceLevel: 'Trained',
    weapons: 'Firelock Muskets, Standard Melee Weapons',
    fight: '6/7', shoot: '6/6', resolve: 5,
    specialRules: ['Quick', 'Scouts', 'Skirmishers'],
    options: [
      'May be upgraded to Veteran for +1 pt/model',
      'May take Socket Bayonets for +4 pts (unit)',
    ],
    minModels: 4, maxModels: 12
  },
  soemand: {
    id: 'soemand', name: 'Sømænd', nationality: NATIONALITIES.DENMARK,
    ptsPerModel: 4, experienceLevel: 'Trained',
    weapons: 'Pistol, Standard Melee Weapon',
    fight: '6/7', shoot: '7/7', resolve: 5,
    specialRules: ['Sailors', 'Artillery Crew', 'Tough'],
    options: [
      'May be upgraded to Veteran for +1 pt/model',
      'May exchange Pistols for Brace of Pistols for +4 pts (unit)',
      'May exchange Pistols for Lances at no cost',
      '1 of 3 may exchange Pistols for Blunderbusses at no cost',
      'May downgrade to Standard Melee Weapon only for -1 pt/model',
      '1 of 8 may add Stinkpots/Firepots for +2 pts/model or Grenadoes for +4 pts/model',
      'May exchange Pistols for Firelock Muskets for +4 pts (unit)',
    ],
    minModels: 4, maxModels: 12
  },
  jutlander: {
    id: 'jutlander', name: 'Jutlander', nationality: NATIONALITIES.DENMARK,
    ptsPerModel: 5, experienceLevel: 'Trained',
    weapons: 'Firelock Musket, Standard Melee Weapon', sidearms: 'Pistol',
    fight: '6/7', shoot: '7/7', resolve: 6,
    specialRules: ['Sailors', 'Expertly Drilled', 'Tough'],
    options: [
      'May be upgraded to Veteran for +1 pt/model',
      '1 of 4 may add Blunderbusses at no cost',
      '1 of 8 may add Stinkpots/Firepots for +2 pts/model or Grenadoes for +4 pts/model',
      'May add Socket Bayonets for +1 pt/model',
    ],
    minModels: 4, maxModels: 12
  },
  hvalfanger: {
    id: 'hvalfanger', name: 'Hvalfanger', nationality: NATIONALITIES.DENMARK,
    ptsPerModel: 5, experienceLevel: 'Veteran',
    weapons: 'Thrown Weapons, Standard Melee Weapon',
    fight: '5/6', shoot: '7/7', resolve: 5,
    specialRules: ['Expert Sailors', 'Hard Chargers', 'Tough'],
    options: [
      'May be downgraded to Trained for -1 pt/model',
      'May exchange Thrown Weapons for Brace of Pistols for +1 pt/model',
      '1 of 4 may exchange Thrown Weapons for Blunderbuss at no cost',
      'May exchange Thrown Weapons for Firelock Muskets for +1 pt/model',
      'May exchange Thrown Weapons for Lances at no cost',
    ],
    minModels: 4, maxModels: 12
  },

  // ── SAXONY ──
  saxon_line: {
    id: 'saxon_line', name: 'Saxon Line Infantry', nationality: NATIONALITIES.SAXONY,
    ptsPerModel: 5, experienceLevel: 'Trained',
    weapons: 'Firelock Musket, Socket Bayonets, Standard Melee Weapons',
    fight: '6/7', shoot: '6/7', resolve: 5,
    specialRules: ['Drilled', 'Fast Reload'],
    options: [
      'May be upgraded to Trained for +1 pt/model (note: starts Trained, upgrade to Veteran)',
      'May exchange Socket Bayonets for Plug Bayonets for -4 pts (unit)',
    ],
    minModels: 4, maxModels: 12
  },
  saxon_militia: {
    id: 'saxon_militia', name: 'Saxon Militia', nationality: NATIONALITIES.SAXONY,
    ptsPerModel: 4, experienceLevel: 'Inexperienced',
    weapons: 'Firelock Muskets, Socket Bayonets, Standard Melee Weapons',
    fight: '7/6', shoot: '7/8', resolve: 6,
    specialRules: ['Drilled'],
    options: [],
    minModels: 4, maxModels: 12
  },
  saxon_foot_guards: {
    id: 'saxon_foot_guards', name: 'Saxon Foot Guards', nationality: NATIONALITIES.SAXONY,
    ptsPerModel: 6, experienceLevel: 'Trained',
    weapons: 'Firelock Muskets, Socket Bayonets, Standard Melee Weapons',
    fight: '6/6', shoot: '6/6', resolve: 5,
    specialRules: ['Drilled', 'Fast Reload', 'Tough'],
    options: [
      '1 of 4 may carry Explosives at no cost',
      'Explosive carriers may exchange Firelock Musket for Hand Mortar at no cost',
      'May exchange Socket Bayonets for Plug Bayonets for -4 pts (unit)',
      'If no Plug Bayonets and no Explosives, reduce unit cost by -4 pts',
    ],
    minModels: 4, maxModels: 12
  },
  saxon_militia_cavalry: {
    id: 'saxon_militia_cavalry', name: 'Saxon Militia Cavalry', nationality: NATIONALITIES.SAXONY,
    ptsPerModel: 4, experienceLevel: 'Inexperienced',
    weapons: 'Brace of Pistols, Standard Melee Weapons', equipment: 'Horses',
    fight: '7/7', shoot: '7/8', resolve: 6,
    specialRules: ['Quick (mounted)', 'Skirmishers'],
    options: ['May be upgraded to Trained for +1 pt/model'],
    minModels: 4, maxModels: 12
  },
  saxon_cuirassiers: {
    id: 'saxon_cuirassiers', name: 'Saxon Cuirassiers', nationality: NATIONALITIES.SAXONY,
    ptsPerModel: 6, experienceLevel: 'Trained',
    weapons: 'Brace of Pistols, Heavy Cavalry Sabers', equipment: 'Armor, Horses',
    fight: '5/7', shoot: '7/7', resolve: 5,
    specialRules: ['Quick (mounted)', 'War Cry'],
    options: [],
    minModels: 4, maxModels: 12
  },
  saxon_guards_cuirassier: {
    id: 'saxon_guards_cuirassier', name: 'Saxon Guards Cuirassier', nationality: NATIONALITIES.SAXONY,
    ptsPerModel: 7, experienceLevel: 'Veteran',
    weapons: 'Brace of Pistols, Heavy Cavalry Saber', equipment: 'Armor, Horses',
    fight: '5/7', shoot: '6/7', resolve: 4,
    specialRules: ['Quick (mounted)', 'Hard Chargers', 'Unwavering', 'War Cry'],
    options: [
      '1 of 4 may carry Explosives at no cost',
      'Explosive carriers may take Hand Mortar at no cost',
    ],
    minModels: 4, maxModels: 12
  },
  saxon_dragoons: {
    id: 'saxon_dragoons', name: 'Saxon Dragoons', nationality: NATIONALITIES.SAXONY,
    ptsPerModel: 5, experienceLevel: 'Trained',
    weapons: 'Dragoon Musket, Brace of Pistols, Standard Melee Weapons', equipment: 'Horses',
    fight: '6/7', shoot: '7/7', resolve: 6,
    specialRules: ['Quick (mounted)', 'Brawlers'],
    options: [],
    minModels: 4, maxModels: 12
  },

  // ── POLISH-LITHUANIAN ──
  wybraniecka: {
    id: 'wybraniecka', name: 'Wybraniecka', nationality: NATIONALITIES.SAXONY,
    ptsPerModel: 3, experienceLevel: 'Trained',
    weapons: 'Firelock Muskets, Standard Melee Weapons',
    fight: '6/6', shoot: '7/8', resolve: 6,
    specialRules: ['Drilled'],
    options: ['May take Plug Bayonets for +4 pts (unit)'],
    minModels: 4, maxModels: 12
  },
  dragoni: {
    id: 'dragoni', name: 'Dragoni (Polish Dragoons)', nationality: NATIONALITIES.SAXONY,
    ptsPerModel: 5, experienceLevel: 'Trained',
    weapons: 'Dragoon Muskets, Brace of Pistols, Standard Melee Weapons', equipment: 'Horses',
    fight: '6/7', shoot: '7/7', resolve: 6,
    specialRules: ['Quick (mounted)', 'Brawlers'],
    options: [],
    minModels: 4, maxModels: 12
  },
  pancerni: {
    id: 'pancerni', name: 'Pancerni (Armored Companion)', nationality: NATIONALITIES.SAXONY,
    ptsPerModel: 5, experienceLevel: 'Trained',
    weapons: 'Firelock Carbine, Standard Melee Weapon', sidearms: 'Pistol', equipment: 'Horses, Armor',
    fight: '6/6', shoot: '7/8', resolve: 5,
    specialRules: ['Quick (mounted)', 'Skirmishers'],
    options: [
      '1 of 4 may exchange Firelock Carbine for Lance for -4 pts (unit)',
      'May be upgraded to Veteran for +1 pt/model',
      'Models with Lances may add Recurve Bows for +1 pt/model (not with Firelock Carbines)',
    ],
    minModels: 4, maxModels: 12
  },
  winged_hussars: {
    id: 'winged_hussars', name: 'Winged Hussars', nationality: NATIONALITIES.SAXONY,
    ptsPerModel: 6, experienceLevel: 'Trained',
    weapons: 'Lances, Brace of Pistols, Heavy Cavalry Sabers', equipment: 'Horses, Armor',
    fight: '5/6', shoot: '6/7', resolve: 5,
    specialRules: ['Hard Chargers (mounted)', 'Quick (mounted)', 'Battle Hardened'],
    options: [
      'May exchange Brace of Pistols for Firelock Carbines at no cost',
      'May remove Armor for -2 pts (unit)',
      'May be upgraded to Veteran for +1 pt/model',
    ],
    minModels: 4, maxModels: 12
  },
  kozatska_pikhota: {
    id: 'kozatska_pikhota', name: "Kozatsʹka Pikhota", nationality: NATIONALITIES.SAXONY,
    ptsPerModel: 4, experienceLevel: 'Trained',
    weapons: 'Firelock Musket, Standard Melee Weapons',
    fight: '6/7', shoot: '6/7', resolve: 6,
    specialRules: ['Elusive', 'Marksmen'],
    options: [
      'May be downgraded to Inexperienced for -1 pt/model (loses Marksmen)',
      'May be upgraded to Veteran for +1 pt/model',
      'May exchange Firelock Muskets for Recurve Bows (exchange Marksmen for Rain of Arrows)',
      'May exchange Firelock Muskets for Lances (exchange Marksmen for Brawlers)',
      'May add Pistol Sidearms for +2 pts (unit)',
      'May add Armor for +2 pts (unit)',
    ],
    minModels: 4, maxModels: 12,
    note: 'Cannot exchange Firelock Muskets for Recurve Bows when in Saxon or Polish-Lithuanian Army factions'
  },
  kozatska_kinnota: {
    id: 'kozatska_kinnota', name: "Kozatsʹka Kinnota", nationality: NATIONALITIES.SAXONY,
    ptsPerModel: 6, experienceLevel: 'Trained',
    weapons: 'Firelock Carbines, Standard Melee Weapons', equipment: 'Horses',
    fight: '5/7', shoot: '6/7', resolve: 5,
    specialRules: ['Marksmen', 'Quick', 'Skirmishers'],
    options: [
      'May be upgraded to Veteran for +1 pt/model',
      'May exchange Firelock Carbines for Brace of Pistols at no cost',
      'May exchange Firelock Carbines for Recurve Bows for -1 pt/model (exchange Marksmen for Rain of Arrows)',
      'May exchange Firelock Carbines for Lances for -1 pt/model (exchange Marksmen for War Cry)',
      'May add Armor for +2 pts (unit)',
      'May add Pistols for +1 pt/model (not with Brace of Pistols)',
    ],
    minModels: 4, maxModels: 12
  },

  // ── RUSSIA ──
  streltsy: {
    id: 'streltsy', name: 'Streltsy', nationality: NATIONALITIES.RUSSIA,
    ptsPerModel: 5, experienceLevel: 'Trained',
    weapons: 'Matchlock Musket, Standard Melee Weapons',
    fight: '6/6', shoot: '6/7', resolve: 5,
    specialRules: ['Drilled', 'Tough'],
    options: [
      'May be upgraded to Veteran for +1 pt/model',
      'May add Heavy Melee Weapons at no cost',
    ],
    minModels: 4, maxModels: 12
  },
  soldadty: {
    id: 'soldadty', name: 'Soldaty', nationality: NATIONALITIES.RUSSIA,
    ptsPerModel: 5, experienceLevel: 'Trained',
    weapons: 'Firelock Musket, Standard Melee Weapons',
    fight: '6/7', shoot: '6/7', resolve: 5,
    specialRules: ['Expertly Drilled', 'Dauntless'],
    options: [
      'May be upgraded to Veteran for +1 pt/model',
      'May take Plug Bayonets for +4 pts (unit)',
    ],
    minModels: 4, maxModels: 12
  },
  rekruty: {
    id: 'rekruty', name: 'Rekruty', nationality: NATIONALITIES.RUSSIA,
    ptsPerModel: 3, experienceLevel: 'Inexperienced',
    weapons: 'Firelock Musket, Socket Bayonets, Standard Melee Weapon',
    fight: '7/6', shoot: '7/7', resolve: 6,
    specialRules: ['Drilled', 'Timid'],
    options: ['May be upgraded to Veteran for +1 pt/model'],
    minModels: 4, maxModels: 12
  },
  fusilyory: {
    id: 'fusilyory', name: 'Fusilyory', nationality: NATIONALITIES.RUSSIA,
    ptsPerModel: 6, experienceLevel: 'Trained',
    weapons: 'Firelock Musket, Socket Bayonets, Standard Melee Weapons',
    fight: '5/7', shoot: '6/7', resolve: 5,
    specialRules: ['Expertly Drilled', 'Fast Reload', 'Dauntless'],
    options: [],
    minModels: 4, maxModels: 12
  },
  pikinyory: {
    id: 'pikinyory', name: 'Pikinyory', nationality: NATIONALITIES.RUSSIA,
    ptsPerModel: 3, experienceLevel: 'Inexperienced',
    weapons: 'Pikes, Standard Melee Weapons',
    fight: '7/6', shoot: '-/8', resolve: 6,
    specialRules: ['Drilled Pikemen', 'Tough', 'Support: Rekruty/Streltsy/Soldaty/Fusilyory'],
    options: [
      'May be upgraded to Trained for +1 pt/model',
      'May add Armor for +2 pts (unit)',
    ],
    minModels: 4, maxModels: 12,
    note: 'May not take Armor in Semyonovsky Lifeguard Regiment'
  },
  pushkari: {
    id: 'pushkari', name: 'Pushkari', nationality: NATIONALITIES.RUSSIA,
    ptsPerModel: 3, experienceLevel: 'Inexperienced',
    weapons: 'Standard Melee Weapon',
    fight: '7/7', shoot: '-/7', resolve: 6,
    specialRules: ['Artillery Crew', 'Field Gun', 'Dauntless'],
    options: ['May be upgraded to Trained for +1 pt/model'],
    minModels: 4, maxModels: 12
  },
  grenadyory: {
    id: 'grenadyory', name: 'Grenadyory', nationality: NATIONALITIES.RUSSIA,
    ptsPerModel: 7, experienceLevel: 'Veteran',
    weapons: 'Firelock Muskets, Socket Bayonets, Standard Melee Weapons',
    fight: '5/6', shoot: '6/6', resolve: 5,
    specialRules: ['Expertly Drilled', 'Fast Reload', 'Dauntless'],
    options: [
      'May be downgraded to Trained for -1 pt/model',
      '1 of 4 may carry Explosives at no cost',
      'Explosive carriers may exchange Firelock Musket for Hand Mortar at no cost',
      'If no Explosives, reduce unit cost by -4 pts',
    ],
    minModels: 4, maxModels: 12
  },
  dvoriani_cavalry: {
    id: 'dvoriani_cavalry', name: 'Dvoriani Cavalry', nationality: NATIONALITIES.RUSSIA,
    ptsPerModel: 5, experienceLevel: 'Trained',
    weapons: 'Standard Melee Weapons', equipment: 'Armor, Horses',
    fight: '6/6', shoot: '7/7', resolve: 6,
    specialRules: ['Hard Chargers', 'High Standing', 'War Cry'],
    options: [
      'May add Recurve Bows for +1 pt/model',
      'May add Pistols for +2 pts (unit)',
    ],
    minModels: 4, maxModels: 12
  },
  draguny: {
    id: 'draguny', name: 'Draguny', nationality: NATIONALITIES.RUSSIA,
    ptsPerModel: 6, experienceLevel: 'Inexperienced',
    weapons: 'Dragoon Musket, Brace of Pistols, Standard Melee Weapons', equipment: 'Horses',
    fight: '6/7', shoot: '7/7', resolve: 6,
    specialRules: ['Drilled (dismounted only)', 'Quick (mounted only)', 'Tough'],
    options: [
      'May be upgraded to Trained for +1 pt/model',
      'May exchange Brace of Pistols for Lances at no cost',
    ],
    minModels: 4, maxModels: 12
  },
  konnyye_grenadyory: {
    id: 'konnyye_grenadyory', name: 'Konnyye Grenadyory', nationality: NATIONALITIES.RUSSIA,
    ptsPerModel: 7, experienceLevel: 'Veteran',
    weapons: 'Dragoon Musket, Brace of Pistols, Standard Melee Weapons', equipment: 'Horses',
    fight: '6/7', shoot: '6/7', resolve: 4,
    specialRules: ['Expertly Drilled (dismounted)', 'Quick (mounted)', 'War Cry'],
    options: [
      'May be upgraded to Veteran (already Veteran — no upgrade)',
      '1 of 4 may carry Explosives at no cost',
      'Explosive carriers may exchange Dragoon Musket for Hand Mortar at no cost',
    ],
    minModels: 4, maxModels: 12
  },
  matrosy: {
    id: 'matrosy', name: 'Matrosy', nationality: NATIONALITIES.RUSSIA,
    ptsPerModel: 4, experienceLevel: 'Trained',
    weapons: 'Pistols, Standard Melee Weapon',
    fight: '6/6', shoot: '7/7', resolve: 5,
    specialRules: ['Artillery Crew', 'Sailors', 'War Cry'],
    options: [
      '1 of 4 may exchange Pistols for Blunderbusses at no cost',
      '1 of 8 may add Stinkpots/Firepots for +2 pts/model or Grenadoes for +4 pts/model',
      'May exchange Pistols for Brace of Pistols for +4 pts (unit)',
      'May exchange Pistols for Lances at no cost',
      'May exchange Pistols for Firelock Muskets for +4 pts (unit)',
      'Entire unit may downgrade to Standard Melee Weapons only for -1 pt/model',
    ],
    minModels: 4, maxModels: 12
  },
  morskiye_volki: {
    id: 'morskiye_volki', name: 'Morskiye Volki', nationality: NATIONALITIES.RUSSIA,
    ptsPerModel: 6, experienceLevel: 'Veteran',
    weapons: 'Brace of Pistols, Standard Melee Weapon',
    fight: '5/6', shoot: '7/6', resolve: 5,
    specialRules: ['Expert Artillery Crew', 'Expert Sailors', 'War Cry'],
    options: [
      '1 of 3 may add Blunderbusses for +1 pt/model',
      'May exchange Brace of Pistols for Firelock Muskets at no cost',
      '1 of 4 may add Stinkpots/Firepots for +2 pts/model or Grenadoes for +4 pts/model',
      'May be downgraded to Trained for -1 pt/model',
      'If equipped with Firelock Muskets, may add Pistol sidearms for +2 pts (unit)',
    ],
    minModels: 4, maxModels: 12
  },
  morskiye_soldaty: {
    id: 'morskiye_soldaty', name: 'Morskiye Soldaty (Naval Infantry)', nationality: NATIONALITIES.RUSSIA,
    ptsPerModel: 5, experienceLevel: 'Trained',
    weapons: 'Firelock Muskets, Plug Bayonets, Standard Melee Weapon',
    fight: '5/7', shoot: '6/7', resolve: 5,
    specialRules: ['Expertly Drilled', 'War Cry'],
    options: [
      'May be upgraded to Veteran for +1 pt/model',
      'May exchange Plug Bayonets for Socket Bayonets for +4 pts (unit)',
    ],
    minModels: 4, maxModels: 12
  },

  // ── SWEDEN ──
  linjetrupp: {
    id: 'linjetrupp', name: 'Linjetrupp', nationality: NATIONALITIES.SWEDEN,
    ptsPerModel: 7, experienceLevel: 'Trained',
    weapons: 'Firelock Musket, Socket Bayonets, Standard Melee Weapon',
    fight: '6/6', shoot: '6/7', resolve: 4,
    specialRules: ['Battle Hardened', 'Expertly Drilled', 'Fast Reload', 'Unwavering'],
    options: [
      'May exchange Firelock Muskets & Socket Bayonets for Pikes at -2 pts/model (exchange Expertly Drilled & Fast Reload for Drilled Pikemen)',
      'May be upgraded to Veteran for +1 pt/model',
    ],
    minModels: 4, maxModels: 12
  },
  grenadjär: {
    id: 'grenadjär', name: 'Grenadj​är', nationality: NATIONALITIES.SWEDEN,
    ptsPerModel: 8, experienceLevel: 'Veteran',
    weapons: 'Firelock Muskets, Socket Bayonets, Standard Melee Weapons',
    fight: '5/6', shoot: '6/6', resolve: 4,
    specialRules: ['Expertly Drilled', 'Battle Hardened', 'Brawlers', 'Fast Reload', 'Unwavering'],
    options: [
      'May be downgraded to Trained for -1 pt/model',
      '1 of 4 may carry Explosives at no cost',
      'Explosive carriers may exchange Firelock Musket for Hand Mortar at no cost',
      'If no Explosives, reduce unit cost by -4 pts',
    ],
    minModels: 4, maxModels: 12
  },
  milis_swe: {
    id: 'milis_swe', name: 'Milis (Swedish)', nationality: NATIONALITIES.SWEDEN,
    ptsPerModel: 3, experienceLevel: 'Inexperienced',
    weapons: 'Firelock Musket, Standard Melee Weapon',
    fight: '6/7', shoot: '7/8', resolve: 5,
    specialRules: ['Drilled'],
    options: [
      'May exchange Firelock Muskets for Pikes',
      'May add Socket Bayonets for +1 pt/model',
      'May be upgraded to Trained for +1 pt/model',
    ],
    minModels: 4, maxModels: 12
  },
  prisoner_militia: {
    id: 'prisoner_militia', name: 'Prisoner Militia', nationality: NATIONALITIES.SWEDEN,
    ptsPerModel: 2, experienceLevel: 'Inexperienced',
    weapons: 'Firelock Musket, Standard Melee Weapons',
    fight: '7/8', shoot: '8/8', resolve: 7,
    specialRules: ['Timid', 'Poorly Equipped'],
    options: ['May add Socket Bayonets for +4 pts (unit)'],
    minModels: 4, maxModels: 12
  },
  kavalleri: {
    id: 'kavalleri', name: 'Kavalleri', nationality: NATIONALITIES.SWEDEN,
    ptsPerModel: 6, experienceLevel: 'Trained',
    weapons: 'Dragoon Musket, Brace of Pistols, Standard Melee Weapon', equipment: 'Horses',
    fight: '6/6', shoot: '6/7', resolve: 5,
    specialRules: ['Quick (mounted)', 'Battle Hardened', 'War Cry'],
    options: [
      'May be upgraded to Veteran for +1 pt/model',
      'May take Armor for +2 pts (unit)',
      'May exchange Dragoon Muskets for Heavy Cavalry Sabers at no cost',
    ],
    minModels: 4, maxModels: 12
  },
  artillerister: {
    id: 'artillerister', name: 'Artillerister', nationality: NATIONALITIES.SWEDEN,
    ptsPerModel: 3, experienceLevel: 'Trained',
    weapons: 'Standard Melee Weapons',
    fight: '7/7', shoot: '-/8', resolve: 5,
    specialRules: ['Expert Artillery Crew', 'Field Gun'],
    options: ['May be upgraded to Veteran for +1 pt/model'],
    minModels: 4, maxModels: 12
  },
  sjoman: {
    id: 'sjoman', name: 'Sjöman', nationality: NATIONALITIES.SWEDEN,
    ptsPerModel: 4, experienceLevel: 'Trained',
    weapons: 'Pistol, Standard Melee Weapon',
    fight: '6/7', shoot: '7/7', resolve: 5,
    specialRules: ['Expert Artillery Crew', 'Sailors', 'Brawlers'],
    options: [
      'May be upgraded to Veteran for +1 pt/model',
      'May exchange Pistols for Brace of Pistols for +4 pts (unit)',
      'May exchange Pistols for Lances at no cost',
      'May replace Pistols for Firelock Muskets for +4 pts (unit)',
      '1 of 4 may add Blunderbusses at no cost',
      '1 of 4 may add Grenadoes for +4 pts/model or Stinkpots/Firepots for +2 pts/model',
    ],
    minModels: 4, maxModels: 12
  },
  kustseglare: {
    id: 'kustseglare', name: 'Kustseglare', nationality: NATIONALITIES.SWEDEN,
    ptsPerModel: 3, experienceLevel: 'Trained',
    weapons: 'Standard Melee Weapons, Sidearm Pistols',
    fight: '7/7', shoot: '7/7', resolve: 6,
    specialRules: ['Expert Sailors', 'Tough', 'Support: Sjöman'],
    options: [
      'May be upgraded to Veteran for +1 pt/model',
      'May exchange Sidearm Pistols for Pistols or Lances for +1 pt/model',
    ],
    minModels: 4, maxModels: 12
  },
  sjoinfanteri: {
    id: 'sjoinfanteri', name: 'Sjöinfanteri', nationality: NATIONALITIES.SWEDEN,
    ptsPerModel: 5, experienceLevel: 'Trained',
    weapons: 'Firelock Muskets, Socket Bayonets, Standard Melee Weapons',
    fight: '6/6', shoot: '6/7', resolve: 5,
    specialRules: ['Expertly Drilled', 'Brawlers'],
    options: [
      'May be upgraded to Veteran for +1 pt/model',
      'May add Pistols for +1 pt/model',
      '1 of 4 may exchange Firelock Muskets for Blunderbusses at no cost',
    ],
    minModels: 4, maxModels: 12
  },

  // ── UNALIGNED (COSSACK) ──
  nevpravnyy_kozak: {
    id: 'nevpravnyy_kozak', name: 'Nevpravnyy Kozak', nationality: NATIONALITIES.UNALIGNED,
    ptsPerModel: 3, experienceLevel: 'Inexperienced',
    weapons: 'Lances, Standard Melee Weapons',
    fight: '7/8', shoot: '6/7', resolve: 6,
    specialRules: ['Elusive'],
    options: [
      'May exchange Lances for Recurve Bows at no cost',
      'May exchange Lances for Firelock Muskets at no cost',
    ],
    minModels: 4, maxModels: 12
  },
  kozatska_pikhota_unaligned: {
    id: 'kozatska_pikhota_unaligned', name: "Kozatsʹka Pikhota (Cossack)", nationality: NATIONALITIES.UNALIGNED,
    ptsPerModel: 4, experienceLevel: 'Trained',
    weapons: 'Firelock Musket, Standard Melee Weapons',
    fight: '6/7', shoot: '6/7', resolve: 6,
    specialRules: ['Elusive', 'Marksmen'],
    options: [
      'May be downgraded to Inexperienced for -1 pt/model (loses Marksmen)',
      'May be upgraded to Veteran for +1 pt/model',
      'May exchange Firelock Muskets for Recurve Bows (exchange Marksmen for Rain of Arrows)',
      'May exchange Firelock Muskets for Lances (exchange Marksmen for Brawlers)',
      'May add Pistol Sidearms for +2 pts (unit)',
      'May add Armor for +2 pts (unit)',
    ],
    minModels: 4, maxModels: 12
  },
  veterany_kozatstva: {
    id: 'veterany_kozatstva', name: 'Veterany Kozatstva', nationality: NATIONALITIES.UNALIGNED,
    ptsPerModel: 5, experienceLevel: 'Veteran',
    weapons: 'Firelock Musket, Standard Melee Weapons',
    fight: '5/7', shoot: '6/7', resolve: 5,
    specialRules: ['Elusive', 'Marksmen'],
    options: [
      'May exchange Firelock Muskets for Recurve Bows (exchange Marksmen for Rain of Arrows)',
      'May exchange Firelock Muskets for Lances (exchange Marksmen for Brawlers)',
      'May add Pistol Sidearms for +2 pts (unit)',
      'May add Armor for +2 pts (unit)',
    ],
    minModels: 4, maxModels: 12
  },
  kozatska_kinnota_unaligned: {
    id: 'kozatska_kinnota_unaligned', name: "Kozatsʹka Kinnota (Cossack)", nationality: NATIONALITIES.UNALIGNED,
    ptsPerModel: 6, experienceLevel: 'Trained',
    weapons: 'Firelock Carbines, Standard Melee Weapons', equipment: 'Horses',
    fight: '5/7', shoot: '6/7', resolve: 5,
    specialRules: ['Marksmen', 'Quick', 'Skirmishers'],
    options: [
      'May be upgraded to Veteran for +1 pt/model',
      'May exchange Firelock Carbines for Brace of Pistols at no cost',
      'May exchange Firelock Carbines for Recurve Bows for -1 pt/model (exchange Marksmen for Rain of Arrows)',
      'May exchange Firelock Carbines for Lances for -1 pt/model (exchange Marksmen for War Cry)',
      'May add Armor for +2 pts (unit)',
      'May add Pistols for +1 pt/model (not with Brace of Pistols)',
    ],
    minModels: 4, maxModels: 12
  },
};

// ─────────────────────────────────────────────────────────────────
// FACTIONS
// ─────────────────────────────────────────────────────────────────

const FACTIONS = [
  {
    id: 'army_denmark_norway',
    name: 'Army of Denmark-Norway 1700-1721',
    nationality: NATIONALITIES.DENMARK,
    description: 'A well-equipped modern army with experienced veteran troops. Norwegian forces can fight as regulars or use ski troops and irregular infantry for hit-and-run tactics.',
    forceSpecialRules: [
      'Commander may spend 2 CP to issue a platoon action to all Expertly Drilled units in Command Range.',
      'Burgher Guard: May include a single unit of Livgarde or Grenadiers as Core if Commander is attached to that unit.',
      'Commander\'s unit may take a Standard Action to gain +1 CP this Activation.',
      'All units gain the Tough Special Rule.',
    ],
    forceOptions: [
      'Norwegian Garrison: Milits, Fyorr, Ski Troops and European Regulars become Core. This faction is automatically Defender. May not take Indrullerede, Provinsmilits, Livgarde, Grenadiers, Danish Cuirassiers or Danish Horse Grenadiers.',
      'Guerilla Ski Patrol: May take Ski Troops as Core if at least 3 units of Ski Troops are included. If Attacker, may deploy Ski Troops using Lay in Wait rules (do not deploy prone).',
    ],
    coreUnits: ['indrullerede', 'provinsmilits', 'milits'],
    supportUnits: ['european_regulars', 'fyorr', 'ski_troops', 'livgarde', 'grenadiers_dn', 'danish_cuirassiers', 'danish_horse_grenadiers'],
    availableCommanders: ['dn_untested', 'dn_experienced', 'dn_seasoned', 'jens_rostgaard', 'frederick_iv'],
  },
  {
    id: 'danish_royal_navy',
    name: 'Danish Royal Navy 1700-1721',
    nationality: NATIONALITIES.DENMARK,
    description: 'Long tradition of quality sailors. Clashed with Swedish rivals 7 times, decisively winning 3. Danish captains were aggressive privateers against Swedish shipping.',
    forceSpecialRules: [
      'All size 2 ships gain Galley: 3 and Shallow Draft.',
      'Commander may spend 2 CP to issue Reload or Shoot to all Expert Artillery Crew units in Command Range.',
      'Force gains +3 to dice roll when determining attacker.',
      'Sømænd may upgrade Artillery Crew to Expert Artillery Crew for +4 pts/unit.',
    ],
    forceOptions: [
      'Early War: +4 to attacker roll if a size 3+ ship is included.',
      'Late War: +1 to range penalty for Shoot Actions with Cannons against size 2 & 3 ships (while at maximum sail).',
      'Naval Landing Force: If no size 2+ ships are taken, Indrullerede may be Core units.',
    ],
    coreUnits: ['soemand', 'provinsmilits', 'jutlander'],
    supportUnits: ['indrullerede', 'hvalfanger'],
    availableCommanders: ['dn_untested', 'dn_experienced', 'dn_seasoned', 'tordenskiold'],
  },
  {
    id: 'danish_privateers',
    name: 'Danish Privateers 1700-1721',
    nationality: NATIONALITIES.DENMARK,
    description: 'Fast, knowledgeable privateers using their unmatched knowledge of the North and Baltic seas to prey on enemy shipping.',
    forceSpecialRules: [
      'Force gains +2 to dice roll when determining attacker.',
      'Force\'s Ships gain Shallow Draft.',
      'If Attacker, once per game discard all Activation Cards and draw the same number for free (no Fortune Point).',
    ],
    forceOptions: [],
    coreUnits: ['soemand', 'hvalfanger'],
    supportUnits: ['provinsmilits'],
    availableCommanders: ['dn_untested', 'dn_experienced', 'dn_seasoned'],
  },
  {
    id: 'army_saxony',
    name: 'Army of Saxony 1682-1716',
    nationality: NATIONALITIES.SAXONY,
    description: 'Mid-reform army featuring the complete abandonment of the pike for cheval-de-frise, armed with a combi-lock musket. Supplemented by Polish-Lithuanian forces.',
    forceSpecialRules: [
      'Commander has Poor Leadership Special Rule when issuing CP to non-Saxon units.',
      'Commander may spend 2 CP to issue platoon action to all Drilled units in Command Range.',
      'May include one more support unit than usual.',
      'Subtracts -2 from dice roll to determine attacker.',
      'If Defender, may include 1 Cheval-de-Frise Fortification for free.',
      "Kozatsʹka Pikhota cannot exchange Firelock Muskets for Recurve Bows.",
      'All units gain the Cunning Special Rule.',
    ],
    forceOptions: [
      'Troop of Horse: Saxon Militia Cavalry and Saxon Dragoons become Core if at least 2 units of Saxon Militia Cavalry and/or Dragoons are included.',
    ],
    coreUnits: ['saxon_line', 'saxon_militia', 'wybraniecka', 'kozatska_pikhota'],
    supportUnits: ['saxon_foot_guards', 'saxon_militia_cavalry', 'saxon_cuirassiers', 'saxon_dragoons', 'kozatska_kinnota'],
    availableCommanders: ['sax_untested', 'sax_experienced', 'sax_seasoned', 'heinrich_steinau', 'schulenburg', 'augustus_ii'],
  },
  {
    id: 'polish_lithuanian_army',
    name: 'Polish-Lithuanian Army 1700-1721',
    nationality: NATIONALITIES.SAXONY,
    description: 'Often inexperienced infantry but legendary cavalry. The Winged Hussars reminded the Swedes exactly how they got their reputation.',
    forceSpecialRules: [
      'Saxon commanders gain the Poor Leadership Special Rule.',
      'If only mounted units, Commander may be mounted at no additional cost.',
      'All Mounted Units gain the War Cry Special Rule.',
      "Kozatsʹka Pikhota cannot exchange Firelock Muskets for Recurve Bows.",
    ],
    forceOptions: [],
    coreUnits: ['dragoni', 'wybraniecka', 'pancerni', 'kozatska_pikhota'],
    supportUnits: ['winged_hussars', 'saxon_cuirassiers', 'saxon_line', 'kozatska_kinnota'],
    availableCommanders: ['sax_untested', 'sax_experienced', 'sax_seasoned', 'pol_untested', 'pol_experienced', 'pol_seasoned', 'augustus_ii'],
  },
  {
    id: 'old_russian_army',
    name: 'Old Russian Army 1686-1705',
    nationality: NATIONALITIES.RUSSIA,
    description: 'A mixture of antiquated and modern troops. Peter\'s reforms are taking hold but antiquated units remain. Supplemented by Cossack allies.',
    forceSpecialRules: [
      'Commander may be attached to Support units.',
      'Russian Standard Commanders must take Poor Leadership Special Rule.',
      'May not include more than one unit of Dvoriani Cavalry.',
      'Rekruty gain the Support: Streltsy Special Rule.',
    ],
    forceOptions: [],
    coreUnits: ['soldadty', 'streltsy', 'rekruty', 'kozatska_pikhota', 'dvoriani_cavalry', 'pushkari'],
    supportUnits: ['kozatska_kinnota'],
    availableCommanders: ['rus_untested', 'rus_experienced', 'rus_seasoned', 'peter_i', 'menshikov', 'sheremetev'],
  },
  {
    id: 'peter_new_model_army',
    name: "Peter's New Model Army 1705-1721",
    nationality: NATIONALITIES.RUSSIA,
    description: 'The culmination of Peter\'s reforms: modern equipment, artillery, and cavalry drilled in the European style. Stoic infantry but not quite the quality of other European powers.',
    forceSpecialRules: [
      'Commander may spend 2 CP to issue platoon action to all Expertly Drilled units in Command Range.',
      'Commander\'s unit may take a Standard Action to gain +1 CP this Activation.',
      'Pikinyory may not take Armor.',
    ],
    forceOptions: [
      'Draguny Patrol: Draguny become Core if at least 2 units of Draguny are taken. Fusilyory become Support. Cannot take Pushkari.',
      'Mid-War: Rekruty become Core. Fusilyory gain Support: Rekruty Special Rule.',
    ],
    coreUnits: ['fusilyory', 'pikinyory', 'kozatska_pikhota'],
    supportUnits: ['rekruty', 'pushkari', 'draguny', 'konnyye_grenadyory', 'grenadyory', 'kozatska_kinnota'],
    availableCommanders: ['rus_untested', 'rus_experienced', 'rus_seasoned', 'peter_i', 'menshikov', 'sheremetev'],
  },
  {
    id: 'semyonovsky_lifeguard',
    name: 'Semyonovsky Lifeguard Regiment 1700-1721',
    nationality: NATIONALITIES.RUSSIA,
    description: 'Peter\'s personal force — the best trained and equipped regiment in Russia. So skilled that Charles XII of Sweden let them march back from Narva with banners unfurled.',
    forceSpecialRules: [
      'Fusilyory and Pikinyory must be upgraded to Veteran.',
      'Pushkari must be upgraded to Trained.',
      'All units gain the Unwavering Special Rule.',
      'If using Army Scale, only one Semyonovsky Company may be taken.',
      'Commander may spend 2 CP to issue platoon action to all Drilled units in Command Range.',
      'Once per game, at the start of any turn, remove 1 point of fatigue from all units.',
    ],
    forceOptions: [],
    coreUnits: ['fusilyory', 'pikinyory', 'pushkari'],
    supportUnits: ['draguny', 'konnyye_grenadyory', 'grenadyory'],
    availableCommanders: ['peter_i'],
  },
  {
    id: 'russian_imperial_navy',
    name: 'Russian Imperial Navy (1700-1755)',
    nationality: NATIONALITIES.RUSSIA,
    description: 'Peter\'s passion project — built fast, often with unseasoned timbers. Commanded by English and Dutch captains. By war\'s end, earned a begrudging respect from defeated enemies.',
    forceSpecialRules: [
      'All ships gain Shallow Draft.',
      'Commander may spend 2 CP to issue Reload or Shoot to all Expert Artillery Crew units in Command Range.',
      'Force gains +4 to dice roll when determining attacker.',
      'Matrosy may upgrade Artillery Crew to Expert Artillery Crew for +4 pts/unit.',
    ],
    forceOptions: [
      'Unseasoned Timbers: Size 3+ ships may reduce Hull Integrity by 1 and take -2 pts off ship cost.',
      'Foreign Commanders: May be led by English, Dutch, or Unaligned European Commander. If so, may take one core unit of their respective type. Commander gains Strict (Russian units only). All Russian units gain Prejudice.',
      'Naval Landing Force: If no size 2+ ships, Fusilyory may be Core units.',
    ],
    coreUnits: ['matrosy', 'morskiye_soldaty', 'morskiye_volki'],
    supportUnits: ['rekruty'],
    availableCommanders: ['rus_untested', 'rus_experienced', 'rus_seasoned', 'peter_i', 'zmajevic'],
  },
  {
    id: 'russian_privateers',
    name: 'Russian Privateers (1700-1721)',
    nationality: NATIONALITIES.RUSSIA,
    description: 'Russia welcomed foreign captains who accepted a "passport" (Letter of Marque) to sail for Tsar and prize money. Mostly foreign enterprising captains.',
    forceSpecialRules: [
      'Force gains +2 to dice roll when determining attacker.',
      'Force\'s Ships gain Shallow Draft.',
      'If Attacker, once per game discard all Activation Cards and draw the same number for free.',
    ],
    forceOptions: [
      'Foreign Service (British): If a British Commander is chosen, all British Support Units become Core.',
      'Foreign Service (Dutch): If a Dutch Commander is chosen, all Dutch Support Units become Core.',
      'Unseasoned Timbers: Size 3+ ships may reduce Hull Integrity by 1 and take -2 pts off ship cost.',
    ],
    coreUnits: ['matrosy', 'morskiye_volki'],
    supportUnits: [],
    availableCommanders: ['rus_untested', 'rus_experienced', 'rus_seasoned'],
  },
  {
    id: 'swedish_army',
    name: 'Swedish Army 1700-1721',
    nationality: NATIONALITIES.SWEDEN,
    description: 'The greatest fighting force in the Baltic. Relentless bayonet-and-pike close-quarters tactics allowed them to defeat armies 2-3x their size. Won 25 of 33 battles under Charles XII.',
    forceSpecialRules: [
      'Gå På!: All units gain Quick. Platoon Action charges also give Hard Chargers for that Charge action.',
      'Commander may spend 2 CP to issue platoon action to all Expertly Drilled and Drilled Pikemen units in Command Range.',
      'May include one more support unit than usual.',
      'Commander\'s unit may take a Standard Action to gain +1 CP this Activation.',
    ],
    forceOptions: [
      'Late War: No Core Units may be taken as Veterans. Linjetrupp gain Support: Milis. Inexperienced/Trained units lose Battle Hardened. Prisoner Militia become Core.',
      'Cavalry Patrol: Kavalleri become Core (min 2 units). Artillerister may not be taken.',
    ],
    coreUnits: ['linjetrupp', 'milis_swe'],
    supportUnits: ['kavalleri', 'artillerister', 'grenadjär', 'prisoner_militia', 'kozatska_pikhota'],
    availableCommanders: ['swe_untested', 'swe_experienced', 'swe_seasoned', 'stenbock', 'rehnskiold', 'charles_xii'],
  },
  {
    id: 'drabant_corps',
    name: 'Drabant Corps 1700-1721',
    nationality: NATIONALITIES.SWEDEN,
    description: 'Charles XII\'s elite bodyguard — 168 men, all officers, finest weapons. Used as both a royal bodyguard and to spearhead the most critical assaults.',
    forceSpecialRules: [
      'Commander may spend 2 CP to issue platoon action to all Expertly Drilled and Drilled Pikemen units in Command Range.',
      'Once per game, a single Fight test may be re-rolled without spending a Fortune Point.',
      'If playing Army Scale, only 1 company of Drabant Corps may be taken.',
    ],
    forceOptions: [],
    coreUnits: ['linjetrupp', 'grenadjär'],
    supportUnits: ['kavalleri', 'artillerister'],
    availableCommanders: ['charles_xii'],
  },
  {
    id: 'swedish_royal_navy',
    name: 'Swedish Royal Navy 1700-1721',
    nationality: NATIONALITIES.SWEDEN,
    description: 'Always second to the army. Relied on English and Dutch allies, who were tied up in the War of Spanish Succession. Steadily ground down by Danish and Russian navies.',
    forceSpecialRules: [
      'Force adds +2 when determining attacker.',
      'May include one more support unit than usual.',
      'Commander may spend 2 CP to issue Reload or Shoot to all Expert Artillery Crew units in Command Range.',
    ],
    forceOptions: [
      'Late War: If at least one Veteran unit is included, apply -2 when determining attacker.',
      'Naval Landing Force: If no size 2+ ships, Linjetrupp may be Core units.',
    ],
    coreUnits: ['sjoman', 'kustseglare', 'sjoinfanteri'],
    supportUnits: ['linjetrupp', 'grenadjär'],
    availableCommanders: ['swe_untested', 'swe_experienced', 'swe_seasoned', 'stromstierna', 'sioblad'],
  },
  {
    id: 'swedish_privateers',
    name: 'Swedish Privateers',
    nationality: NATIONALITIES.SWEDEN,
    description: 'Native and foreign (English and French) privateers preying on Russian merchants with reckless abandon, more cautious against experienced Danish sailors.',
    forceSpecialRules: [
      'May not take any ships greater than size 2 (except Brigantine and Privateer Brigantine).',
      'Force gains +2 to dice roll when determining attacker.',
      'If led by British Commander, Sea Dogs become Core. If French Commander, Marins become Core.',
    ],
    forceOptions: [],
    coreUnits: ['sjoman', 'kustseglare'],
    supportUnits: [],
    availableCommanders: ['swe_untested', 'swe_experienced', 'swe_seasoned', 'norcross'],
  },
  {
    id: 'cossack_raiding_party',
    name: 'Cossack Raiding Party 1700-1721',
    nationality: NATIONALITIES.UNALIGNED,
    description: 'Masters of the steppes. Used bows, firearms, and blades. Excellent marksmen, ferocious melee fighters, expert horsemen and rivermen. Raided both invaders and domestic enemies.',
    forceSpecialRules: [
      'Force adds +2 to its roll to determine attacker.',
      'May not take Ships or Artillery (unless River Raiders is chosen).',
    ],
    forceOptions: [
      'River Raiders: May only take Canoa, Longboat, Piragua, Bark, and Barco Luengo. Only Swivel Guns and Light Cannons as Artillery. Kozatsʹka Pikhota gain Sailors and Artillery Crew. Kozatsʹka Kinnota may remove horses for -1 pt/model.',
      'Mounted Raiders: Kozatsʹka Kinnota become Core if at least 2 units are taken, and no Nevpravnyy Kozak are taken.',
    ],
    coreUnits: ['nevpravnyy_kozak', 'kozatska_pikhota_unaligned', 'veterany_kozatstva'],
    supportUnits: ['kozatska_kinnota_unaligned'],
    availableCommanders: ['cos_untested', 'cos_experienced', 'cos_seasoned'],
  },
  {
    id: 'zaporozhian_sich',
    name: 'Zaporozhian Sich 1700-1721',
    nationality: NATIONALITIES.UNALIGNED,
    description: 'Semi-autonomous Cossack state (1552-1755). Under constant threat from Ottoman Empire, Poland-Lithuania, and Russia. A faction under Mazepa attempted to join Sweden.',
    forceSpecialRules: [
      'All Trained and Veteran Units gain the Tough Special Rule.',
    ],
    forceOptions: [],
    coreUnits: ['nevpravnyy_kozak', 'kozatska_pikhota_unaligned', 'kozatska_kinnota_unaligned'],
    supportUnits: ['veterany_kozatstva'],
    availableCommanders: ['cos_untested', 'cos_experienced', 'cos_seasoned', 'skoropadsky', 'mazepa'],
  },
];

// Export for use in main app
if (typeof module !== 'undefined') {
  module.exports = { NATIONALITIES, COMMANDERS, UNITS, FACTIONS };
}
