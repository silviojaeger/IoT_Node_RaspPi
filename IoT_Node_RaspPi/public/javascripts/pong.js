//Globale Variabeln
var ballPosX = 350;
var ballPosY = 350;
var ball = document.getElementById("ball");
var player = document.getElementById("player");
var playerPos = 0;
var enemy = document.getElementById("enemy");
var enemyPos = 20;
var intSpeed = 25;

var ballXspeed = 0;
var ballYspeed = 3;

var nbrOfhits = 0;

//Game engine
setInterval(function(){ 
    moveBall(ballXspeed, ballYspeed);
    moveEnemy()
    checkSpeed();
}, intSpeed);

//own functions
function moveBall(x, y){
    ballPosX += x;
    ballPosY += y;
    checkPossiblePlayersHit();
    checkWallhit();
    ball.style.left= ballPosX+'px';
    ball.style.top= ballPosY+'px';
}

function checkWallhit(){
    if(ballPosX<=1){ballXspeed=(-ballXspeed)}
        else{
            if(ballPosX>=680){ballXspeed=(-ballXspeed)}
        }
}

function checkPossiblePlayersHit(){
    if(ballPosY>=644){
        playerHit();
    }else{
        if(ballPosY<=34){
            enemyHit();
        }
    }
}

function playerHit(){
    let dif = playerPos-(ballPosX+10);
    if(dif>(-60) && 60>dif){
        ballYspeed = -ballYspeed;
        ballXspeed = -(dif/4);
        nbrOfhits++;
    }else{alert('GAME OVER! Press \'F5\' To restart');}
}
function enemyHit(){
    let dif = enemyPos-(ballPosX+10);
    if(dif>(-60) && 60>dif){
        ballYspeed = -ballYspeed;
        ballXspeed = -(dif/4);
        nbrOfhits++;
    }else{alert('WINNER WINNER CHICKEN DINNER!! Press \'F5\' To kick ass again!');}
}

function checkSpeed(){
    if(nbrOfhits>=2){
        ballYspeed+=1;
        nbrOfhits=0;
    }
}

function movePlayer(){
    playerPos = event.clientX;
    var x = playerPos-50;
    console.log('X: '+x);

    if(x>600    ){
        x = 600;
    }else{if(x<4){
        x=4;
    }}
    player.style.left = x+'px';
}

function moveEnemy(){
    enemyPos = ballPosX;
    var x = ballPosX-50;
    //versatz
    //x = x-100;
    if(x>600    ){
        x = 600;
    }else{if(x<4){
        x=4;
    }}
    enemy.style.left = x+'px';
}