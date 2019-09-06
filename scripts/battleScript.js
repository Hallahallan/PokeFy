let text_box = document.getElementById("text-box");
let player_current_hp = document.getElementById("player-hp-current");
let enemy_current_hp = document.getElementById("enemy-hp-current");
let player_hp = document.getElementById("player-hp");

let move_array = [
    document.getElementById("move-button-0"),
    document.getElementById("move-button-1"),
    document.getElementById("move-button-2"),
    document.getElementById("move-button-3")
];

for(let i = 0; i < move_array.length; i++){
    move_array[i].addEventListener("click", function(){attack(playerObject.pkmn1, opponentObject.pkmn1, i)})
}


battleLoader(playerObject.pkmn1, opponentObject.pkmn1);


/*
let move_0 = document.getElementById("move-button-0");
let move_1 = document.getElementById("move-button-1");
let move_2 = document.getElementById("move-button-2");
let move_3 = document.getElementById("move-button-3");

move_0.addEventListener("click", function(){attack(playerObject.pkmn1, opponentObject.pkmn1, 0)});
move_1.addEventListener("click", function(){attack(playerObject.pkmn1, opponentObject.pkmn1, 1)});
move_2.addEventListener("click", function(){attack(playerObject.pkmn1, opponentObject.pkmn1, 2)});
move_3.addEventListener("click", function(){attack(playerObject.pkmn1, opponentObject.pkmn1, 3)});
*/