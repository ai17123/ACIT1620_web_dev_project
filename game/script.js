person = {
    maxHealth:250,
    health:250,
    name:"",
    defence:50,
    heal:10,
    attack:25,
    canHeal:true
};

enemy = {
    maxHealth:250,
    health:250,
    name:"",
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
function exit(){
    document.location.href = "../index.html"
}
function alex_player(){
    person.name = "Alex"
    person.health = 500
    person.maxHealth = 500
    person.attack = person.attack/2
    person.heal = 0 
    document.getElementById('charpicplayer').src='Alex_pfp.jpg'
}
function jorge_player(){
    person.name = "Jorge"
    person.health = 100
    person.maxHealth = 100
    person.attack = person.attack*1.5
    person.heal = person.heal/2
    document.getElementById('charpicplayer').src='Jorge_pfp.jpg'
}
function khoi_player(){
    person.name = "Khoi"
    person.health = 150
    person.maxHealth = 150
    person.attack = person.attack/2
    person.heal = person.heal * 2.5
    document.getElementById('charpicplayer').src='Khjoi_pfp.jpg'
}
function jian_player(){
    person.name = "Jian"
    person.attack = person.attack/2
    person.health = 200
    person.maxHealth = 200
    document.getElementById('charpicplayer').src='Jian_pfp.jpg'
}
function alex_enemy(){
    enemy.name = "Alex"
    enemy.health = 500
    enemy.maxHealth = 500
    enemy.attack = enemy.attack/2
    enemy.heal = 0 
    document.getElementById('charpicenemy').src='Alex_pfp.jpg'
}
function jorge_enemy(){
    enemy.name = "Jorge"
    enemy.health = 100
    enemy.maxHealth = 100
    enemy.attack = enemy.attack*2
    enemy.heal = enemy.heal/2
    document.getElementById('charpicenemy').src='Jorge_pfp.jpg'
}
function khoi_enemy(){
    enemy.name = "Jorge"
    enemy.health = 150
    enemy.maxHealth = 150
    enemy.attack = enemy.attack/3
    enemy.heal = enemy.heal * 5
    document.getElementById('charpicenemy').src='Khjoi_pfp.jpg'
}
function jian_enemy(){
    enemy.name = "Jian"
    enemy.attack = enemy.attack/2
    enemy.health = 200
    enemy.maxHealth = 200
    document.getElementById('charpicenemy').src='Jian_pfp.jpg'
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
    document.getElementById('playeraction').innerHTML = 'Attack!'
    document.getElementById('playeraction').style.color = 'rgb(204, 16, 16)'
    //health is whole number
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
    function pcrit(){
        var chance = Math.floor(Math.random() * 7) + 1
        if (enemy.name == "Jorge"){
            if (chance == 1){
                person.health = person.health - (enemy.attack)
                playerhealth = person.health
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
            else{

            }
        }
    }
    pcrit()
    document.getElementById('playeraction').style.animation = 'None'

};
function pheal(){
    document.getElementById('playeraction').innerHTML = 'Recovered'
    document.getElementById('playeraction').style.color = 'rgb(11, 197, 11)'
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
    else{
        if (person.health <= 0){
            person.health = 0
            playerhealth = person.health
            person.canHeal = false
        }
    }

    //gimmick khoi
    function e_pheal(){
        var chance = Math.floor(Math.random() * 3) + 1
        if (person.name == "Khoi"){
            if (chance == 1){
                enemy.health = enemy.health + person.heal
                enemyhealth = enemy.health
                if (enemy.health > enemy.maxHealth){
                    enemy.health = enemy.maxHealth
                    enemyhealth = enemy.health
                } 
            }
        }
        else{
        }
        console.log(chance)
    }
    e_pheal()
    document.getElementById('playeraction').style.animation = 'None'
    
};
function pdefend(){
    person.health = person.health - 4.5*((enemy.attack)/(person.defence/2))
    document.getElementById('playeraction').innerHTML = 'BLOCKED'
    document.getElementById('playeraction').style.color = 'rgb(17, 85, 233)'
    //health is whole number
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
    // thorns test
    function pthorns(){
        if (person.name == "Jian"){
            enemy.health = enemy.health - 5
            if (enemy.health <= 0){
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
        else{
            //pass
        }
    }
    pthorns()
    document.getElementById('playeraction').style.animation = 'None'
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
    document.getElementById('enemyaction').innerHTML = 'Attack!'
    document.getElementById('enemyaction').style.color = 'rgb(204, 16, 16)'
    
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
    function ecrit(){
        var chance = Math.floor(Math.random() * 7) + 1
        if (person.name == "Jorge"){
            if (chance == 1){
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
            }
        }
        else{

        }
    }
    ecrit()
    document.getElementById('enemyaction').style.animation = 'None'
    
};
function eheal(){
    document.getElementById('enemyaction').innerHTML = 'Recovered'
    document.getElementById('enemyaction').style.color = 'rgb(11, 197, 11)'
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
    //1 in 3 chance to heal player
    function e_eheal(){
        var chance = Math.floor(Math.random() * 3) + 1
        if (enemy.name == "Khoi"){
            if (chance == 1){
                person.health = person.health + enemy.heal
                playerhealth = person.health
                if (person.health > person.maxHealth){
                    person.health = person.maxHealth
                    playerhealth = person.health
                } 
            }
        }
        else{
        }
        console.log(chance)
    }
    e_eheal()
    document.getElementById('enemyaction').style.animation = 'None'
};
function edefend(){
    enemy.health = enemy.health - 4.5*((person.attack )/(enemy.defence/2))
    enemyhealth = enemy.health
    document.getElementById('enemyaction').innerHTML = 'BLOCKED'
    document.getElementById('enemyaction').style.color = 'rgb(17, 85, 233)'
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
    function ethorns(){
        if (enemy.name == "Jian"){
            person.health = person.health - 5
            if (person.health <= 0){
                person.health = 0
                playerhealth = person.health
                person.canHeal = false
            }
        }
        else{
            //pass
        }
    }
    ethorns()
    document.getElementById('enemyaction').style.animation = 'None'
    
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
                document.getElementById('playeraction').style.animation = 'attackchoice .25s linear 1'
                document.getElementById('enemyaction').style.animation = 'attackchoice .25s linear 1'
                pdamage();
                edamage()
                sethealth()
            }
            else if (player == 'defend'){
                document.getElementById('playeraction').style.animation = 'attackchoice .25s linear 1'
                document.getElementById('enemyaction').style.animation = 'attackchoice .25s linear 1'
                //pass 
                document.getElementById('enemyaction').style.animation = 'None'
                document.getElementById('playeraction').style.animation = 'None'
            }
            else{
                document.getElementById('playeraction').style.animation = 'attackchoice .25s linear 1'
                document.getElementById('enemyaction').style.animation = 'attackchoice .25s linear 1'
                eheal()
                pheal()
                sethealth()
            } 
        }
        else if(player == 'attack'){
            if (computer == 'defend'){
                document.getElementById('playeraction').style.animation = 'attackchoice .25s linear 1'
                document.getElementById('enemyaction').style.animation = 'attackchoice .25s linear 1'
                edefend()
                document.getElementById('playeraction').innerHTML = 'Attack!'
                document.getElementById('playeraction').style.color = 'rgb(204, 16, 16)'
                sethealth()
            }
            else{
                document.getElementById('playeraction').style.animation = 'attackchoice .25s linear 1'
                document.getElementById('enemyaction').style.animation = 'attackchoice .25s linear 1'
                edamage()
                eheal()
                sethealth()
            }
        }
        else if(player == 'defend'){
            if(computer == 'attack'){
                document.getElementById('playeraction').style.animation = 'attackchoice .25s linear 1'
                document.getElementById('enemyaction').style.animation = 'attackchoice .25s linear 1'
                pdefend()
                document.getElementById('enemyaction').innerHTML = 'Attack!'
                document.getElementById('enemyaction').style.color = 'rgb(204, 16, 16)'
                sethealth()
            }
            else{
                document.getElementById('playeraction').style.animation = 'attackchoice .25s linear 1'
                document.getElementById('enemyaction').style.animation = 'attackchoice .25s linear 1'
                eheal()
                sethealth()
            }
        }
        else if(player == 'heal'){
            if (computer =='attack'){
                document.getElementById('playeraction').style.animation = 'attackchoice .25s linear 1'
                document.getElementById('enemyaction').style.animation = 'attackchoice .25s linear 1'
                pdamage()
                pheal()
                sethealth()
            }
            else{
                document.getElementById('playeraction').style.animation = 'attackchoice .25s linear 1'
                document.getElementById('enemyaction').style.animation = 'attackchoice .25s linear 1'
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
