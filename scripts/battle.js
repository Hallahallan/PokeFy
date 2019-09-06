var opponentAttacked;
var playerAttacked;
var pkmnKilled = false;

var playerObject = {
    pkmn1:statCalc(randomEncounter())/*(randomEncounter())*/
 // player sine pokemon
}

var opponentObject = {
    pkmn1: (randomEncounter())/*randomEncounter()*/
} 



// til debugging, skriver ut navn så man kan se hvor feil er
console.log(playerObject.pkmn1.name);
console.log(opponentObject.pkmn1.name);

// loader battle
function battleLoader(a, b){

    statCalc(b);
    
    a.current_HP = a.HP
    b.current_HP = b.HP
    
    loadScreen(a, b);
    newRound(a, b);
}   

// ny runde hvor begge skal angripe
function newRound(player, opponent){
    
    // viser moves
    move_array[0].style.display = "block";
    move_array[1].style.display = "block";
    move_array[2].style.display = "block";
    move_array[3].style.display = "block";
    
    //ingen har angrepet enda
    opponentAttacked = false;
    playerAttacked = false;
    
    //om opponent har høyest speed, attacker den
    if(player.speed <= opponent.speed){
        opponentAttack(player, opponent);
    } 
    
}


function attack(attacker, target, moveChoice){
    if(pkmnKilled === false){
        if (attacker === playerObject.pkmn1){
            playerAttacked = true; 
            move_array[0].style.display = "none";
            move_array[1].style.display = "none";
            move_array[2].style.display = "none";
            move_array[3].style.display = "none";
        }

        if (attacker === opponentObject.pkmn1){
            opponentAttacked = true;
        }

        //attacker viser til player object feks. som må si hvilket move ( index i array moves) kalle funksjon move med parameteret attack fra player object pikachu attack, delt på opponent sitt defence
        let dmgDone;

        // kanskje mulig å få dette på en opperator
        //SUPER EFFECTIVE
        //OBS Fire er her super effective på pinsir, fordi pinsir bare er type bug, men ikke super effective på scyther, som er en type bug, flying.
        //Må være noe i duren av 
        //if (attacker.moves[movesChoice].type === "fire" && target.type === "grass" || attacker.moves[movesChoice].type === "fire" && target.type === "ice" || attacker.moves[movesChoice].type === "fire" && target.type === "bug") {dmgDone * 2};
        if (attacker.moves[moveChoice].category === "physical") {
            dmgDone = Math.round((((((2*attacker.level) / 5) + 2) * attacker.moves[moveChoice].power *           (attacker.attack/target.defence)) / 50 ) + 2)

        } else if (attacker.moves[moveChoice].category === "special") {
            
            dmgDone = Math.round((((((2*attacker.level) / 5) + 2) * attacker.moves[moveChoice].power * (attacker.special/target.special)) / 50 ) + 2)

        } else if (attacker.moves[moveChoice].category === "status") {

            dmgDone = 0;
            attacker.moves[moveChoice].effect(attacker);// kaller på funksjon som gjør status effekt


        } else {
            console.log("dere har skrivefeil på physical, status eller special på: " + attacker.name)
        }
        
        text_box.innerHTML = attacker.name + " did " + dmgDone + " damage to " + target.name + ".";

        if (dmgDone > target.current_HP){
            text_box.innerHTML = target.name + " has fainted";
            pkmnKilled = true;
            if (target === opponentObject.pkmn1){
                enemy_current_hp.style.width = 0;
            } else {
                player_current_hp.style.width = 0;
            }
        
        }
    
        target.current_HP -= dmgDone;
        loadStats(attacker, target);
        setTimeout(function(){
            if (playerAttacked === true && opponentAttacked === true){
                newRound(playerObject.pkmn1, opponentObject.pkmn1);
            } else if (opponentAttacked === false){
                opponentAttack(attacker, target);
            }
        }, 2000);
    }
}
        
function opponentAttack(player, opponent){
    let moveChoice = Math.floor(Math.random() * 3);
    attack(opponent, player, moveChoice);
}

//Lager et random nummer mellom 2 tall
function randomMinMax(min, max) {
    
  return Math.round(Math.random() * (max - min) + min);
}

//Statkalkulator for alle stats basert på IV
function statCalc(a){
    a.HP = Math.round(((((a.HP + randomMinMax(0, 31)) * 2)) * a.level) / 100) + (a.level + 10);
    
    a.attack = Math.round((((((a.attack + randomMinMax(0, 31)) * 2)) * a.level) / 100) + 5);
    
    a.defence = Math.round((((((a.defence + randomMinMax(0, 31)) * 2)) * a.level) / 100) + 5);
    
    a.special = Math.round((((((a.special + randomMinMax(0, 31)) * 2)) * a.level) / 100) + 5);
    
    a.speed = Math.round((((((a.speed + randomMinMax(0, 31)) * 2)) * a.level) / 100) + 5);
    
    return a;
}

function loadStats(attacker, opponent){
    player_current_hp.style.width = 56*(playerObject.pkmn1.current_HP / playerObject.pkmn1.HP);
    enemy_current_hp.style.width = 56*(opponentObject.pkmn1.current_HP / opponentObject.pkmn1.HP);
    player_hp.innerHTML = playerObject.pkmn1.current_HP + "/" + playerObject.pkmn1.HP; 


    // denne skal oppdatere grapics etter et attack
    // sleng evt på en animasjon når hp reduseres
}
function loadScreen(attacker, opponent){
    // må endres etter attack også
    
    loadPlayer(attacker);
    loadOpponent(opponent);
    
    move_array[0].innerHTML = attacker.moves[0].name;
    move_array[1].innerHTML = attacker.moves[1].name;
    move_array[2].innerHTML = attacker.moves[2].name;
    move_array[3].innerHTML = attacker.moves[3].name;
    
}
function loadPlayer(attacker){
    playerSpawnAnimation();
    let player_name = document.getElementById("player-name");
    let player_level = document.getElementById("player-level");
    let player_sprite = document.getElementById("players-pkmn");
    
    player_sprite.className += " player-spawn-animation";
    player_name.innerHTML = attacker.name;
    player_level.innerHTML = ":L " + attacker.level;
    player_hp.innerHTML = attacker.current_HP + "/" + attacker.HP; 
    player_current_hp.style.width = 56*(attacker.current_HP / attacker.HP); //56 er bredden av hp bar i pixler
    player_sprite.src = "pokesprites/" + attacker.name.toLowerCase() + "b.png";
}
function loadOpponent(opponent){
    let enemy_name = document.getElementById("enemy-name");
    let enemy_level = document.getElementById("enemy-level");
    let enemy_hp = document.getElementById("enemy-hp");
    let enemy_sprite = document.getElementById("enemys-pkmn");
    
    enemy_sprite.className += " enemy-spawn-animation";
    enemy_name.innerHTML = opponent.name;
    enemy_level.innerHTML = ":L " + opponent.level;
    enemy_current_hp.style.width = 56*(opponent.current_HP / opponent.HP);
    enemy_sprite.src = "pokesprites/" + opponent.name.toLowerCase() + ".png"; 
    
    spawnOpponent(opponent);

}
function spawnOpponent(opponent){
    

    // evt spawn animation
    
    text_box.innerHTML = "A wild " + opponent.name + " has appeared!";
}

function deswawnOpponent(opponent){
    
    // despawn animation for opponent
    
}

//returnerer et tilfeldig pokemonobject fra pokedexID uavhengig av hvor mange elementer det finnes
function  randomEncounter(){
    return pokedexID[Math.floor(Math.random() * pokedexID.length)];
}

function playerSpawnAnimation(){
    
}  

function playerIdleAnimation(){
    
}
function playerAttackAnimation(){
    
}
function playerDeathAnimation(){
    
}
function opponentSpawnAnimation(){
    
    // evt spawn animation
    
    text_box.innerHTML = "A wild " + opponent.name + " has appeared!";
}
function opponentIdleAnimation(){
    
}
function opponentAttackAnimation(){
    
}
function opponentDeathAnimation(){
    
}


// TING Å GJØRE

// items
// save system, fortsett, start ny
// xp, leveling, evolving
// visuelle ting, lydeffekter, animasjoner, encounter og spirite(inline eller css?)
// flere pokemon og moves
// gjøre det mulig å ha flere pokemon i battle. bytte inn og ut under battle
// lage trenere vi kan fighte mot. 
// encounter chance på de forskjellige
// INITIALIZE CENAFY (få det til å funke på nett)
// Legge til status moves, først og fremst stat reducing moves.
// enemy sprite plasseres ikke alltid på bottom