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

var playerhealth = person.health
var enemyhealth = enemy.health

function show(){
    console.log(playerhealth)
    console.log(enemyhealth)
}

function pdamage(){
    person.health = person.health - enemy.attack

    if (person.health <= 0){
        person.health = 0
        playerhealth = person.health
        person.canHeal = false
    }
};
function pheal(){
    if(person.canHeal){
        person.health = person.health + person.heal
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
    person.health = person.health - 4.5*(enemy.attack/(person.defence/2))
    //health is whole number
    if (person.health%2 != 0) {
        if (person.health%2 >= .5){
            //rounds up
            person.health = (person.health - person.health%2) + 1
            if (person.health <= 0){
                person.health = 0
                playerhealth = person.health
                person.canHeal = false
            }
        }
        else{
            person.health = (person.health - person.health%2)
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
    enemy.health = enemy.health - person.attack
    if (enemy.health <= 0){
        enemy.health = 0
        enemyhealth = enemy.health
        enemy.canHeal = false
    }
    // console.log(enemy.health)
};
function eheal(){
    if(enemy.canHeal){
        enemy.health = enemy.health + enemy.heal
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
    enemy.health = enemy.health - 4.5*(person.attack/(enemy.defence/2))
    //health is whole number
    if (enemy.health%2 != 0) {
        if (enemy.health%2 >= .5){
            //rounds up
            enemy.health = (enemy.health - enemy.health%2) + 1
            if (enemy.health <= 0){
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
        else{
            enemy.health = (enemy.health - enemy.health%2)
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
    enemy.style.display = 'none'
    player.style.display = 'none'
    menubar.style.display = 'none'
}

function sethealth(){
    document.getElementById("healthplayer").value = person.health;
    document.getElementById('phealth_count').innerHTML = person.health + "/250"
    document.getElementById("healthenemy").value = enemy.health;
    document.getElementById('ehealth_count').innerHTML = enemy.health + "/250"
}
//game function to play the game

const game = () => {
    let moves = 0;
    const check = document.getElementById('check')
    //function to play game
    const playWebmon = () =>{
        const attkBtn = document.getElementById('attack');
        const healBtn = document.getElementById('heal');
        const defBtn = document.getElementById('defend');
        const forfeitBtn = document.getElementById('forfeit')
        const playerOptions = [attkBtn, healBtn, defBtn, forfeitBtn ]
        const computerOptions = ['attack','attack', 'defend', 'heal']

        playerOptions.forEach(option => {
            option.addEventListener('click', function(){

                //displays how many moves it has taken
                const moveTotal = document.getElementById('moves')
                moves ++ 
                moveTotal.innerText = `moves done: ${moves}`

                //random computer choice
                const compOption = Math.floor(Math.random() * 4)
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
                show()
            }
            else if (player == 'defend'){
                //pass 
            }
            else{
                eheal()
                pheal()
                sethealth()
                show()
            } 
        }
        else if(player == 'attack'){
            if (computer == 'defend'){
                edefend()
                sethealth()
                show()
            }
            else{
                edamage()
                eheal()
                sethealth()
                show()
            }
        }
        else if(player == 'defend'){
            if(computer == 'attack'){
                pdefend()
                sethealth()
                show()
            }
            else{
                eheal()
                sethealth()
                show()
            }
        }
        else if(player == 'heal'){
            if (computer =='attack'){
                pdamage()
                pheal()
                sethealth()
                show()
            }
            else{
                pheal()
                sethealth()
                show()
            }
        }
        else if(player == 'forfeit'){
            forfeit()
            sethealth()
            show()
        }
    }

    //function decides winer 
    const winner = (playerhealth, computerhealth) =>{
        const result = document.getElementById('result')
        const reloadbtn = document.getElementById('reload')

        hide()

        if(playerhealth == 0 && computerhealth != 0){
            result.innerText = 'you lost the game'
            result.style.color = 'red'
        }
        else if( playerhealth != 0 && computerhealth == 0 ){
            result.innerText = 'you won the game!'
            result.style.color = 'green'
        }
        else{
            result.innerText = 'Tie'
            result.style.color = 'orange'
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

