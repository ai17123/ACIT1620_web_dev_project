person = {
    maxHealth:250,
    health:250,
    name:"Alex",
    defence:50,
    heal:10,
    attack:25,
    canHeal:true
};

enemy = {
    maxHealth:250,
    health:250,
    name:"Jian",
    defence:50,
    heal:10,
    attack:25,
    canHeal:true,
};

function next(){
    document.getElementById('coverup').style.display ='none'
}
//count moves
let moves = 0;


//character chosing function
var playerCharacter = ''
var computerCharacter = ''
const JorgeBtn = document.getElementById('Jorge');
const AlexBtn = document.getElementById('Alex');
const KhoiBtn = document.getElementById('Khoi');
const JianBtn = document.getElementById('Jian')
const characterOptions = [JorgeBtn, AlexBtn, KhoiBtn, JianBtn]
const computerCharacters = ['Jorge', 'Alex', 'Khoi', 'Jian']
console.log(characterOptions)
characterOptions.forEach(option => {
    option.addEventListener('click', function(){

        //random computer choice
        const compCharop = Math.floor(Math.random() * 4)
        var compCharChoice = computerCharacters[compCharop]
        while(this.innerText == compCharChoice){
            const compCharop = Math.floor(Math.random() * 4)
            var compCharChoice = computerCharacters[compCharop]
        }

        //find which characters computer can use
        console.log(characterOptions)
        remainingCharacter(this.innerText,compCharChoice)
        next()
    })
})
function alex_player(){
    person.health = 500
    person.maxHealth = 500
    person.attack = person.attack/2
    person.heal = 0 
}
function jorge_player(){
    person.health = 100
    person.maxHealth = 100
    person.attack = person.attack*1.5
    person.heal = person.heal/2
}
function khoi_player(){
    player.health = 200
    player.maxHealth = 200
    person.attack = person.attack/3
    person.heal = person.heal * 5
}
function jian_player(){
    person.defence = person.defence*2.5
}
function alex_enemy(){
    enemy.health = 500
    enemy.maxHealth = 500
    enemy.attack = enemy.attack/2
    enemy.heal = 0 
}
function jorge_enemy(){
    enemy.health = 100
    enemy.maxHealth = 100
    enemy.attack = enemy.attack*2
    enemy.heal = enemy.heal/2
}
function khoi_enemy(){
    enemy.health = 200
    enemy.maxHealth = 200
    enemy.attack = enemy.attack/3
    enemy.heal = enemy.heal * 5
}
function jian_enemy(){
    enemy.defence = enemy.defence*2.5
}
const remainingCharacter = (player,computer) =>{
    document.getElementById('playercharacter').innerText = player
    document.getElementById('enemycharacter').innerText = computer
    if(player == 'Alex'){
        alex_player()
        if(computer == 'Jian'){
            jian_enemy()
        }
        else if(computer == 'Jorge'){
            jorge_enemy()
        }
        else{
            khoi_enemy()
        }
        sethealth()
    }
    else if(player == 'Khoi'){
        khoi_player()
        if(computer == "Alex"){
            alex_enemy()
        }
        else if(computer == "Jorge"){
            jorge_enemy()
        }
        else{
            jian_enemy()
        }
        sethealth()
    }
    else if(player == 'Jorge'){
        jorge_player()
        if(computer == 'Jian'){
            jian_enemy()
        }
        else if(computer == 'Alex'){
            alex_enemy()
        }
        else{
            khoi_enemy()
        }
        sethealth()
    }
    else if(player == 'Jian'){
        jian_player()
        if(computer == 'Alex'){
            alex_enemy()
        }
        else if(computer =='Jorge'){
            jorge_enemy()
        }
        else{
            khoi_enemy()
        }
        sethealth()
    }
}

function showInConsole(){
    console.log(playerhealth + 'player')
    console.log(enemyhealth + 'enemy')
}
function pdamage(){
    person.health = person.health - (enemy.attack )
    playerhealth = person.health
    //health is whole number
    if (person.health%2 != 0) {
        if (person.health%2 >= .5){
            //rounds up
            person.health = (person.health - person.health%2) + 1
            playerhealth = person.health
            if (person.health <= 0){
                person.health = 0
                playerhealth = person.health
                person.canHeal = false
            }
        }
        else{
            person.health = (person.health - person.health%2)
            playerhealth = person.health
            if (person.health <= 0){
                person.health = 0
                playerhealth = person.health
                person.canHeal = false
            }
        }
    }
};
function pheal(){
    if(person.canHeal){
        person.health = person.health + person.heal
        playerhealth = person.health
        if (person.health <= 0){
            person.health = 0
            playerhealth = person.health
            person.canHeal = false
        }
        // else if (person.health >= 0 && person.health <= 250){
        //     person.health = person.health + person.heal
        // } failed code/would overheal before setting to max health
        if (person.health > person.maxHealth){
            person.health = person.maxHealth
            playerhealth = person.health
        }
        // console.log(person.health)
    }
    
    
};
function pdefend(){
    person.health = person.health - 4.5*((enemy.attack)/(person.defence/2))
    //health is whole number
    if (person.health%2 != 0) {
        if (person.health%2 >= .5){
            //rounds up
            person.health = (person.health - person.health%2) + 1
            playerhealth = person.health
            if (person.health <= 0){
                person.health = 0
                playerhealth = person.health
                person.canHeal = false
            }
        }
        else{
            person.health = (person.health - person.health%2)
            playerhealth = person.health
            if (person.health <= 0){
                person.health = 0
                playerhealth = person.health
                person.canHeal = false
            }
        }
    }
}
function forfeit(){
    person.health = 0
    playerhealth = person.health
    person.canHeal = false
    // console.log(person.health)
}
function edamage(){
    enemy.health = enemy.health - (person.attack )
    enemyhealth = enemy.health
    if (enemy.health%2 >= .5){
        //rounds up
        enemy.health = (enemy.health - enemy.health%2) + 1
        enemyhealth = enemy.health
        if (enemy.health <= 0){
            enemy.health = 0
            enemyhealth = enemy.health
            enemy.canHeal = false
        }
    }
    else{
        enemy.health = (enemy.health - enemy.health%2)
        enemyhealth = enemy.health
        if (enemy.health <= 0){
            enemy.health = 0
            enemyhealth = enemy.health
            enemy.canHeal = false
        }
    }
};
function eheal(){
    if(enemy.canHeal){
        enemy.health = enemy.health + enemy.heal
        enemyhealth = enemy.health
        if (enemy.health <= 0){
            enemy.health = 0
            enemyhealth = enemy.health
            enemy.canHeal = false
        }
        else if (enemy.health > enemy.maxHealth){
            enemy.health = enemy.maxHealth
            enemyhealth = enemy.health
        } 
    }
    // console.log(enemy.health)
};
function edefend(){
    enemy.health = enemy.health - 4.5*((person.attack )/(enemy.defence/2))
    enemyhealth = enemy.health
    //health is whole number
    if (enemy.health%2 != 0) {
        if (enemy.health%2 >= .5){
            //rounds up
            enemy.health = (enemy.health - enemy.health%2) + 1
            enemyhealth = enemy.health
            if (enemy.health <= 0){
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
        else{
            enemy.health = (enemy.health - enemy.health%2)
            enemyhealth = enemy.health
            if (enemy.health <= 0){
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
    }
    // console.log(enemy.health)
}
function hide(){
    var enemy = document.getElementById('enemy')
    var player = document.getElementById('player')
    var menubar = document.getElementById('menubar')
    var moves = document.getElementById('moves')
    var result = document.getElementById('result')
    enemy.style.display = 'none'
    player.style.display = 'none'
    menubar.style.display = 'none'
    moves.style.display = 'none'
    result.style.display = 'block'
}
function sethealth(){
    document.getElementById("healthplayer").value = person.health;
    document.getElementById('phealth_count').innerHTML = person.health + "/" + person.maxHealth
    document.getElementById('healthplayer').max = person.maxHealth
    document.getElementById("healthenemy").value = enemy.health;
    document.getElementById('ehealth_count').innerHTML = enemy.health + "/" + enemy.maxHealth
    document.getElementById("healthenemy").max = enemy.maxHealth;

}
//game function to play the game
const game = () => {
    
    const check = document.getElementById('check')
    //function to play game
    const playWebmon = () =>{
        const attkBtn = document.getElementById('attack');
        const healBtn = document.getElementById('heal');
        const defBtn = document.getElementById('defend');
        const forfeitBtn = document.getElementById('forfeit')
        const playerOptions = [ attkBtn, healBtn, defBtn, forfeitBtn]
        const computerOptions = ['attack','attack','attack', 'defend', 'heal']

        playerOptions.forEach(option => {
            option.addEventListener('click', function(){

                //displays how many moves it has taken
                const moveTotal = document.getElementById('moves')
                moves ++ 
                moveTotal.innerText = `moves done: ${moves}`

                //random computer choice
                const compOption = Math.floor(Math.random() * 5)
                const compChoice = computerOptions[compOption]

                //shows outcomes 
                outcome(this.innerText, compChoice)

                //calling gameover 
                if (playerhealth == 0 || enemyhealth == 0){
                    winner(playerhealth, enemyhealth)
                }
            });
        })
    }

    const outcome = (player, computer) =>{
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer){
            if(player == 'attack'){
                pdamage();
                edamage()
                sethealth()
            }
            else if (player == 'defend'){
                //pass 
            }
            else{
                eheal()
                pheal()
                sethealth()
            } 
        }
        else if(player == 'attack'){
            if (computer == 'defend'){
                edefend()
                sethealth()
            }
            else{
                edamage()
                eheal()
                sethealth()
            }
        }
        else if(player == 'defend'){
            if(computer == 'attack'){
                pdefend()
                sethealth()
            }
            else{
                eheal()
                sethealth()
            }
        }
        else if(player == 'heal'){
            if (computer =='attack'){
                pdamage()
                pheal()
                sethealth()
            }
            else{
                pheal()
                sethealth()
            }
        }
        else if(player == 'forfeit'){
            forfeit()
            sethealth()
        }
        showInConsole()
    }

    //function decides winer 
    const winner = (playerhealth, computerhealth) =>{
        const resultTxt = document.getElementById('resultTxt')
        const reloadbtn = document.getElementById('reload')

        hide()

        if(playerhealth == 0 && computerhealth != 0){
            resultTxt.innerHTML = 'you lost the game'
            resultTxt.style.color = 'red'
        }
        else if( playerhealth != 0 && computerhealth == 0 ){
            resultTxt.innerHTML = 'you won the game!'
            resultTxt.style.color = 'green'
        }
        else{
            resultTxt.innerHTML = 'Tie'
            resultTxt.style.color = 'orange'
        }
        reloadbtn.addEventListener('click', () => {
            window.location.reload();
        })
    }

    //calling playgame funciton
    playWebmon()
}

//calling game function
game()

var playerhealth = person.health
var enemyhealth = enemy.health
