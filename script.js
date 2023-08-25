var timer = 60;
var score = 0;
var hitval = 0;
var count = 0;
var timerint;

function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

function hit(){
   hitval = Math.floor(Math.random()*10);
   document.querySelector("#hitvalue").textContent = hitval;

}

function createBubble(){

    var counter = "";
    for(var i=0; i <= 174; i++){
        var random = Math.floor(Math.random()*10);
        counter += `<div class="bubble">${random}</div>`;
    }
    document.querySelector(".bottom").innerHTML = counter;
}


function runTimer(){
    timerint = setInterval(function () {
        if(timer>0){
        timer--;
        document.querySelector("#timeval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector(".bottom").innerHTML = `<h1>"Game Over"</h1>`;
        }
    }, 1000);
        
}

document.querySelector(".bottom").addEventListener("click", function(dets){
    var clickednumber = Number(dets.target.textContent);
    if (clickednumber === hitval) {
    increasescore();
    hit();
    createBubble();
    }
    else if(clickednumber != hitval){
        count++;
        if(count==3){
            document.querySelector(".bottom").innerHTML = `<h1>"Game Over"</h1>`;
            clearInterval(timerint);
        }
        else{
            hit();
        createBubble();
        }
    }
});

hit();
runTimer();
createBubble();
