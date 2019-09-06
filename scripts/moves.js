var moves = {
    // det er ting vi må tenke på her som special effects(flinch, attack proprity, buff/debuffs) det må oppdateres i alle moves
    tackle: {
        name: "Tackle",
        description: "A Normal-type attack. Many Pokémon know this attack right from the start.",
        type: "normal",
        category: "physical",
        power: 40
    },
    //70% accuracy, 1/10 for å paralyze motstander
    thunder: {
        name: "Thunder",
        description: "The strongest of all Electric-type attacks. Has a one-in-ten chance of paralyzing the target.",
        type: "electric",
        category: "special",
        power: 110
    },
    // 1/10 sjanse for å paralyze motstander
    thunderbolt: {
        name: "Thunderbolt",
        description: "An Electric-type attack. Has a one-in-ten chance of paralyzing the target.",
        type: "electric",
        category: "special",
        power: 90
    },
    //Skal alltid angripe først
    //note: på bulbapedia står det at dette movet har; priority +1
    quickattack: {
        name: "Quick Attack",
        description: "An attack that always strikes first. If both Pokémon use this, the one with higher Speed attacks first.",
        type: "normal",
        category: "physical",
        power: 40
    },
    // skal ta halparten av hp til opponent. fikser senere
    superfang: {
        name: "Super Fang",
        description: "If it hits, this attack cuts the target's HP in half. Learned by Pokémon with developed fangs.",
        type: "normal",
        category: "physical",
        power: 60
    },
    // 1/10 flinch chance
    hyperfang: {
        name: "Hyper Fang",
        description: "A Normal-type attack. Has a one-in-ten chance of making the target flinch.",
        type: "normal",
        category: "physical",
        power: 80
    },
    //høy crit chance, 95% acc
    razorleaf: {
        name: "Razor leaf",
        description: "A Grass-type attack that uses sharp-edged leaves. Likely to get a critical hit.",
        type: "grass",
        category: "physical",
        power: 55 
    },
    vinewhip: {
        name: "Vine whip",
        description: "A Grass-type attack. The Pokémon uses its cruel whips to strike the opponent.",
        type: "grass",
        category: "physical",
        power: 45
    },
    //skal restore 50% av dmgDone til user
    absorb: {
        name: "Absorb",
        description: "A Grass-type attack. It adds half the HP it drained from the target to the attacker's HP.",
        type: "grass",
        category: "special",
        power: 20
    },
    //skal restore 50% av dmgDone til user
    gigadrain: {
        name: "Giga drain",
        description: "Half of the HP drained from the target is added to the attacker's HP.",
        type: "grass",
        category: "special",
        power: 75
    },
    //Skal lade turn 1, og angripe turn 2
    solarbeam: {
        name: "Solar beam",
        description: "The strongest Grass-type attack. Energy is absorbed in the first turn, then fired the next turn.",
        type: "grass",
        category: "special",
        power: 120
    },
    // 1/3 sjanse for å reduce speed for motstander
    bubble: {
        name: "Bubble",
        description: "A Water-type attack. Has a one-in-three chance of reducing the target's Speed.",
        type: "water",
        category: "special",
        power: 40
    },
    // 1/3 sjanse for å reduce speed for motstander
    bubblebeam: {
        name: "Bubble beam",
        description: "A Water-type attack. Stronger than Bubble. Many Water-type Pokémon learn this move.",
        type: "water",
        category: "special",
        power: 65
    },
    watergun: {
        name: "Water gun",
        description: "Squirts water to attack.",
        type: "water",
        category: "special",
        power: 40
    },
    //Skal lade og gjøre attacker invurnerable i turn 1, angripe turn 2
    fly: {
        name: "Fly",
        description: "The Pokémon flies high, then strikes in the next turn.",
        type: "flying",
        category: "physical",
        power: 90
    },
    scratch: {
        name: "Scratch",
        description: "A Normal-type attack. Sharp claws are used to inflict damage on the target.",
        type: "normal",
        category: "physical",
        power: 40
    },
    // 1/3 sjanse for å inflicte burn på motstander, 85% accuracy
    fireblast: {
        name: "Fire blast",
        description: "The strongest Fire-type attack. Has a one-in-three chance of inflicting a burn on the target.",
        type: "fire",
        category: "special",
        power: 110
    },
    // 1/10 sjanse for å inflicte burn på motstander
    flamethrower: {
        name: "Flamethrower",
        description: "A powerful Fire-type attack. Has a one-in-ten chance of leaving the target with a damaging burn.",
        type: "fire",
        category: "special",
        power: 95
    },
    // 1/10 sjanse for å inflicte burn på motstander
    ember: {
        name: "Ember",
        description: "A weak fire attack that may inflict a burn.",
        type: "fire",
        category: "special",
        power: 40
    },
    strength: {
        name: "Strength",
        description: "A powerful physical attack.",
        type: "normal",
        category: "physical",
        power: 80
    },
    waterfall: {
        name: "Waterfall",
        description: "The target is hit with a blow packing the power of fish traveling up waterfalls.",
        type: "water",
        category: "physical",
        power: 80
    },
    // 1/3 sjanse for å redusere motstanders defence
    acid: {
        name: "Acid",
        description: "Sprays a hide-melting acid. May lower Defense.",
        type: "poison",
        category: "special",
        power: 40
    },
    // 1/3 sjanse for å reduserer motstanders attack
    aurorabeam: {
        name: "Aurora beam",
        description: "Fires a rainbow-colored beam that may lower Attack.",
        type: "ice",
        category: "special",
        power: 65
    },
    surf: {
        name: "Surf",
        description: "Atacks the oppenent with a giant wave",
        type: "water",
        category: "special",
        power: 90
    },
    //øker defence
    harden: {
        name: "Harden",
        description: "Raises defence of the user",
        type: "normal",
        category: "status",
        power: 0,
        effect: function(attacker, opponent){
            attacker.defence += 1;
        }
    },
    // 1/10 sjanse for å inflicte motstander med poison
    poisonsting: {
        name: "Poison sting",
        description: "An attack that may posion the foe",
        type: "poison",
        category: "physical",
        power: 15
    },
    // reduserer motstanders speed
    stringshot: {
        name: "String shot",
        description: "an attack that lowers the opponent's SPEED",
        type: "bug",
        category: "status",
        power: 0
    },
    gust: {
        name: "Gust",
        description: "Whips up a strong gust of wind",
        type: "flying",
        category: "special",
        power: 40
    },
    // 1/10 sjanse for confusion
    psybeam: {
        name: "Psybeam",
        description: "Fires a peculiar ray that may confuse the foe",
        type: "psychic",
        category: "special",
        power: 65
    },
    // 1/10 sjanse for confusion
    confusion: {
        name: "Confusion",
        description: "A psychic attack that may cause confusion",
        type: "psychic",
        category: "special",
        power: 50
    },
    // setter motstanderstatus til poisoned
    poisonpowder: {
        name: "Poison powder",
        description: "Scatters toxic powder that may poison the opponent",
        type: "poison",
        category: "status",
        power: 0
    },
    //Skal angripe 2-5 ganger, derav lav power
    furyattack: {
        name: "Fury attack",
        description: "Hits the opponent 2-5 times",
        type: "normal",
        category: "physical",
        power: 15
    },
    //Skal angripe 2-5 ganger
    pinmissile: {
        name: "Pin missile",
        description: "Fires pins that strike 2-5 times",
        type: "bug",
        category: "physical",
        power: 20
    },
    //Skal angripe 2 ganger
    //for (double = 0, double < 2, double++)
    twineedle: {
        name: "Twineedle",
        description: "Attacks the opponent twice with sharp needles",
        type: "bug",
        category: "physical",
        power: 25
    },
    //skal senke accuracy 
    sandattack: {
        name: "Sand attack",
        description: "Reduces accuracy by throwing sand",
        type: "ground",
        category: "status",
        power: 0
    },
    peck: {
        name: "Peck",
        description: "Jabs the opponent with a peak",
        type: "flying",
        category: "physical",
        power: 35
    },
    wingattack: {
        name: "Wing attack",
        description: "Strikes the opponent with wings spread wings",
        type: "flying",
        category: "physical",
        power: 60
    },
    //Dette er et snålt move, skal skade turn 1, oppføre seg ca som poison i 2-5 turns. OBS! GEN1 wrap er BROKEN, bruk wrap fra en annen GEN som guideline.
    wrap: {
        name: "Wrap",
        description: "Squeezes the opponent for 2-5 turns",
        type: "normal",
        category: "physical",
        power: 15
    },
    hydropump: {
        name: "Hydropump",
        description: "Blasts opponent with water",
        type: "water",
        category: "special",
        power: 120
    },
    //skal gjøre attacker invurnerable mot alle angrep bortsett fra earthquake turn 1, så angripe turn 2
    dig: {
        name: "Dig",
        description: "Burrows under the ground for one turn, then hits the opponent from beneath on turn two",
        type: "ground",
        category: "physical",
        power: 80
    },
    // høy crit chance
    slash: {
        name: "Slash",
        description: "Has a high critical hit ratio",
        type: "normal",
        category: "physical",
        power: 70
    },
    //for (double = 0, double < 2, double++)
    doublekick: {
        name: "Double kick",
        description: "A double kicking attack that strikes the foe twice",
        type: "fighting",
        category: "physical",
        power: 30
    },
    //OBS Dark type ble lagt inn i GEN2, derfor er GEN1 bite normal type
    bite: {
        name: "Bite",
        description: "A bite made using sharp fangs. This may cause the opponent to flinch, and it might not attack.",
        type: "normal",
        category: "physical",
        power: 60
    },
    //if (opponent.type === flying) {earthquake.power === 0};
    earthquake: {
        name: "Earthquake",
        description: "	An attack that inflicts the damage by shaking the ground. It is useless against FLYING type Pokémon.",
        type: "ground",
        category: "physical",
        power: 100
    },
    pound: {
        name: "Pound",
        description: "Pounds the opponent with forelegs or tail.",
        type: "normal",
        category: "physical",
        power: 40
    },
    //for (slap = 0, slap < 2, slap + randomMinMax(1, 2.5
    //selvom det heter double slap, skal det angripe 2-5 ganger
    doubleslap: {
        name: "Double slap",
        description: "Although each slap is weak, this attack hits the target two to five times in succession.",
        type: "normal",
        category: "physical",
        power: 15
    },
    //metronome skal velge et random angrep fra moves
    metronome: {
        name: "Metronome",
        description: "The user waggles its finger, triggering a move. There is no telling what will happen.",
        type: "normal",
        category: "status",
        power: 0
    },
    //bulbapedia sier dette movet har 80 power, det er feil, ble forandret fra 20->80 i genVII
    //skal restore 50% av dmgDone som HP til attacker
    leechlife: {
        name: "Leech life",
        description: "An HP-draining attack. It adds half the HP it drained from the target to the attacker's HP.",
        type: "bug",
        category: "physical",
        power: 20
    },
    //supersonic har 55% accuracy
    supersonic: {
        name: "Supersonic",
        description: "	Emits bizarre sound waves that may confuse the foe.",
        type: "normal",
        category: "status",
        power: 0
    },
    //confuseray har 100% accuracy (ps: thats fucking broken yo)
    confuseray: {
        name: "Confuse ray",
        description: "	A sinister flash of light makes the target confused. A special Ghost-type technique.",
        type: "ghost",
        category: "status",
        power: 0
    },
    //Sleep powder skal ha 75% accuracy, sleep immobilizer opponent i 2-5 turns
    sleeppowder: {
        name: "Sleep powder",
        description: "Scatters a powder that may cause the foe to sleep.",
        type: "grass",
        category: "status",
        power: 0
    },
    //Reducer attack for opponent, skal max kunne brukes 6 ganger men who cares? 100% accuracy
    growl: {
        name: "Growl",
        description: "Reduces the foe's Attack.",
        type: "normal",
        category: "status",
        power: 0
    },
    payday: {
        name: "Pay day",
        description: "Throws coins at the foe. Money is recovered after.",
        type: "normal",
        category: "physical",
        power: 40
    },
    //Swift kan ikke bomme, dvs ikke bare 100% acc, men ---% acc.
    swift: {
        name: "Swift",
        description: "Sprays star-shaped rays that never miss.",
        type: "normal",
        category: "special",
        power: 60
    },
    tailwhip: {
        name: "Tail whip",
        description: "A move that lower the target's Defense. Useful against tough, armored Pokémon.",
        type: "normal",
        category: "status",
        power: 0
    },
    //Low Kick has a power of 50, an accuracy of 90%, and has a 30% chance of causing the target to flinch.
    lowkick: {
        name: "Low kick",
        description: "A Fighting-type attack. Has a one-in-three chance of making the target flinch if it connects.",
        type: "fighting",
        category: "physical",
        power: 50
    },
    leer: {
        name: "Leer",
        description: "A technique that lowers the target's Defense. Useful against tough, armored Pokémon.",
        type: "normal",
        category: "status",
        power: 0
    },
    //Karatechop er normal type i GEN1, har høy critical chance
    karatechop: {
        name: "Karate chop",
        description: "A Normal-type attack. Often turns into a critical hit and inflicts double the damage.",
        type: "normal",
        category: "physical",
        power: 50
    },
    crosschop: {
        name: "Cross chop",
        description: "A double-chopping attack. High critical-hit ratio.",
        type: "fighting",
        category: "physical",
        power: 100
    },
    // 1/3 sjanse for å inflicte burn
    flamewheel: {
        name: "Flame wheel",
        description: "A fiery charge attack that may inflict a burn.",
        type: "fire",
        category: "physical",
        power: 60
    },
    // 60% accuracy
    hypnosis: {
        name: "Hypnosis",
        description: "A hypnotizing move that may induce sleep.",
        type: "psychic",
        category: "pstatus",
        power: 0
    },
    // 100% sjanse for confusion på opponent, 50% accuracy
    dynamicpunch: {
        name: "Dynamic punch",
        description: "Powerful and sure to cause confusion, but inaccurate.",
        type: "fighting",
        category: "physical",
        power: 100
    },
    //Løsningsforslag: teleport redirecter deg på samme måte som redirect vil fungere når pokefy skal avslutte. prompter først at "Abra used teleport" -> "Abra fled from battle".
    teleport: {
        name: "Teleport",
        description: "A move for fleeing from battle.",
        type: "psychic",
        category: "status",
        power: 0
    },
    // 50% av maxHP restored
    recover: {
        name: "Recover",
        description: "	Restores HP by 1/2 the max HP.",
        type: "normal",
        category: "status",
        power: 0
    },
    // 1/10 sjanse for å lowere special
    psychic: {
        name: "Psychic",
        description: "	An attack that may lower Spcl.Def.",
        type: "psychic",
        category: "special",
        power: 90
    },
    //Øker users attack og defence med 1 stage
    bulkup: {
        name: "Bulk up",
        description: "The user bulks up its body to boost both its Attack and Defense stats.",
        type: "fighting",
        category: "status",
        power: 0
    },
    //Harden copycat
    defencecurl: {
        name: "Defence curl",
        description: "Heightens the user's Defense.",
        type: "normal",
        category: "status",
        power: 0
    },
    rockthrow: {
        name: "Rock throw",
        description: "Throws small rocks to strike the foe.",
        type: "rock",
        category: "physical",
        power: 50
    },
    //Skal redusere HP av user til 0
    selfdestruct: {
        name: "Self destruct",
        description: "The user blows up to inflict severe damage, even making itself faint.",
        type: "normal",
        category: "physical",
        power: 200
    },
    // 55% accuracy, skal vare 2-5 turns
    sing: {
        name: "Sing",
        description: "A soothing song lulls the foe into a deep slumber.",
        type: "normal",
        category: "status",
        power: 0
    },
    // 30% sjanse for flinch
    stomp: {
        name: "Stomp",
        description: "Stomps the enemy with a big foot. May cause flinching.",
        type: "normal",
        category: "physical",
        power: 65
    },
    // 10% sjanse for paralyze
    thundershock: {
        name: "Thundershock",
        description: "An electrical attack that may paralyze the foe.",
        type: "electric",
        category: "special",
        power: 40
    },
    // dealer ALLTID 20 dmg
    // Egentlig listed som special move, men burde kanskje abre settes som status med en funksjon?
    sonicboom: {
        name: "Sonic boom",
        description: "	Launches shock waves that always inflict 20 HP damage.",
        type: "normal",
        category: "special",
        power: 0
    },
    //Straight dmg i GEN1, sjanse for PAR,BUR,FRZ ikke introdusert før GEN2
    triattack: {
        name: "Tri attack",
        description: "	Fires three types of beams at the same time.",
        type: "normal",
        category: "special",
        power: 80
    },
    agility: {
        name: "Agility",
        description: "Sharply increases the user's Speed.",
        type: "psychic",
        category: "status",
        power: 0
    },
    drillpeck: {
        name: "Drill peck",
        description: "A corkscrewing attack with the beak acting as a drill.",
        type: "flying",
        category: "physical",
        power: 80
    },
    headbutt: {
        name: "Headbutt",
        description: "A ramming attack that may cause flinching.",
        type: "normal",
        category: "physical",
        power: 70
    },
    //user HP -> 100%, for (sleep = 0, sleep < 2, sleep++) {status === "sleep"};
    rest: {
        name: "Rest",
        description: "	Sleep for 2 turns to fully recover.",
        type: "psychic",
        category: "status",
        power: 0
    },
    // 10% sjanse for status === freeze
    blizzard: {
        name: "Blizzard",
        description: "The strongest Ice-type attack. Has a one-in-ten chance of freezing the target.",
        type: "ice",
        category: "special",
        power: 110
    },
    // 30% sjanse for status === posioned
    sludge: {
        name: "Sludge",
        description: "Sludge is hurled to inflict damage. May also poison.",
        type: "poison",
        category: "special",
        power: 65
    },
    // skal deale like mye dmg som user.level, vurderer å lage en ny category for disse angrepene.
    //power: a.level
    nightshade: {
        name: "Nightshade",
        description: "",
        type: "ghost",
        category: "special",
        power: 0
    },
    // 30% sjanse for status === paralyzed
    lick: {
        name: "Lick",
        description: "	The foe is licked and hit with a long tongue. It may also paralyze.",
        type: "ghost",
        category: "physical",
        power: 30
    },
    // acc = 100% hvis opponent status === sleep
    // Restore half HP
    dreameater: {
        name: "Dream eater",
        description: "Absorbs half the damage it inflicted on a sleeping foe to restore HP.",
        type: "psychic",
        category: "special",
        power: 100
    },
    vicegrip: {
        name: "Vice grip",
        description: "Grips the foe with large and powerful pincers.",
        type: "normal",
        category: "physical",
        power: 55
    },
    // 30% sjanse for status === paralyze
    bodyslam: {
        name: "Body slam",
        description: "	A full-body slam that may cause paralysis.",
        type: "normal",
        category: "physical",
        power: 85
    },
    // øker evasiveness med 1
    minimize: {
        name: "Minimize",
        description: "Minimizes the user's size to raise evasiveness.",
        type: "normal",
        category: "status",
        power: 0
    },
    // 1/10 flinch
    boneclub: {
        name: "Bone club",
        description: "The foe is clubbed with a bone held in hand. It may make the foe flinch.",
        type: "ground",
        category: "physical",
        power: 65
    },
    //skal hite 2 ganger
    bonemerang: {
        name: "Bonemerang",
        description: "Throws a bone boomerang that strikes twice.",
        type: "ground",
        category: "physical",
        power: 50
    },
    // 1/8 for å bomme og skade user
    hijumpkick: {
        name: "Hi jump kick",
        description: "May miss and hurt the user.",
        type: "fighting",
        category: "physical",
        power: 130
    },
    focusenergy: {
        name: "Focus energy",
        description: "Focuses power to raise the critical-hit ratio.",
        type: "normal",
        category: "status",
        power: 0
    },
    // 50/50 poison chance
    smog: {
        name: "Smog",
        description: "An exhaust-gas attack that may also poison.",
        type: "poison",
        category: "special",
        power: 30
    },
    megapunch: {
        name: "Mega punch",
        description: "A strong punch thrown with incredible power.",
        type: "normal",
        category: "physical",
        power: 80
    },
    splash: {
        name: "Splash",
        description: "Has no effect whatsoever.",
        type: "normal",
        category: "status",
        power: 0
    },
    // ALLTID 40 DMG
    dragonrage: {
        name: "Dragon rage",
        description: "	Launches shock waves that always inflict 40 HP damage.",
        type: "dragon",
        category: "special",
        power: 40
    },
    transform: {
        name: "Transform",
        description: "Alters the user's cells to become a copy of the foe.",
        type: "normal",
        category: "status",
        power: 0
    },
    //90% accuracy
    thunderwave: {
        name: "Thunder wave",
        description: "A weak jolt of electricity that paralyzes the foe.",
        type: "electric",
        category: "status",
        power: 0
    },
    hyperbeam: {
        name: "Hyper beam",
        description: "A severely damaging attack that makes the user rest on the next turn.",
        type: "normal",
        category: "special",
        power: 150
    },
}
/********* MAL FOR MOVES **********
x: {
        name: "",
        description: "",
        type: "",
        category: "physical/status/special",
        power: 0
    },
***********************************/
