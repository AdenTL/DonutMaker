let score = 0;
let timer = undefined;

let autoClickerCount = 0;
let autoClickerCost = 10;

let multiplierCount = 0;
let multiplierCost = 10;
updateText();
function increaseScore(num) 
{
    score += num;
    score = Math.round(score);
}
function donutBtnSetup() 
{
    let makeDonutBtn = document.getElementById('makeDonutBtn');
    makeDonutBtn.addEventListener('click', () => {
        
        if(multiplierCount >= 1) {
            increaseScore(Math.pow(1.2, multiplierCount));
        }
        else {
            increaseScore(Math.pow(1.1, multiplierCount));
        }
        updateText();
    });
}
function purchaseAutoClicker() {
    if(score >= autoClickerCost) {
        autoClickerCount++;
        score -= autoClickerCost;
        autoClickerCost = (autoClickerCost * 1.1).toFixed(2);
    }
    else if(score >= autoClickerCost && autoClickerCount >= 2){ // cost goes up to 20% if 2 or more autoclickers
        autoClickerCount++;
        score -= autoClickerCost;
        autoClickerCost = (autoClickerCost * 1.2).toFixed(2);
    } 
}
function activateAutoClicker() {
    clearInterval(timer);
    timer = setInterval(() => {
        increaseScore(Math.pow(1.2, multiplierCount) * autoClickerCount);
        updateText();
    }, 500);
}
function autoClickerBtnSetup() {
    let autoClickerBtn = document.getElementById('autoClickerBtn');
    autoClickerBtn.addEventListener('click', () => {
        activateAutoClicker();
        purchaseAutoClicker();
        updateText();
    });
}
function purchaseMultiplier(){
    console.log(multiplierCost); console.log(score);
    if (score >= multiplierCost) { //checks if enough donuts to buy
    multiplierCount++; 
    score -= multiplierCost;
    multiplierCost = (multiplierCost * 1.1).toFixed(2); // each buy increases cost
    console.log(multiplierCost);
    }
}
function multiplierBtnSetup()
{
    let multiplierBtn = document.getElementById('multiplierBtn');
    multiplierBtn.addEventListener('click', () => {  
        purchaseMultiplier();
        updateText();
    });
}
function updateText()  // DOM Manipulation so user can see data
{
    let donutCount = document.getElementById('donutCount');
    donutCount.innerText = "Donuts made: " + score.toFixed(0);

    let autoClickerCostText = document.getElementById('autoClickerCost');
    autoClickerCostText.innerText = "Auto Clicker cost: " + autoClickerCost;

    let autoClickerCountText = document.getElementById('autoClickerAmount');
    autoClickerCountText.innerText = "Amount of Auto Clickers purchased: " + autoClickerCount;

    let multiplierCostText = document.getElementById('multiplierCost');
    multiplierCostText.innerText = "Multiplier cost: " + multiplierCost;

    let currentMultiplierText = document.getElementById('currentMultiplier');
    currentMultiplierText.innerText = "Current Multiplier: " + Math.pow(1.1, multiplierCount).toFixed(2) + "x";
}
donutBtnSetup();
autoClickerBtnSetup();
multiplierBtnSetup();
devModalSetup();
fredModalSetup();
inspireModalSetup();

function devModalSetup() {
var modal = document.getElementById("devModal");
var btn = document.getElementById("devInfo");
var span = document.getElementsByClassName("close-dev")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}
function fredModalSetup() {
    var modal = document.getElementById("fredModal");
    var btn = document.getElementById("fredInfo");
    var span = document.getElementsByClassName("close-fred")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    } 
}
function inspireModalSetup() {
    var modal = document.getElementById("inspireModal");
    var btn = document.getElementById("inspireInfo");
    var span = document.getElementsByClassName("close-inspire")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    } 
}


class Particle{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
let particles = [{x:0,y:0}, {x:100, y:10}]
let donutImage = new Image();
donutImage.src = "Donut-PNG-Clipart.png"
const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

function init() {
    //particles = [];
}
function update() {
    particles.forEach((particle) => {
        particle.y += 1;
        if(particle.y > 100){
            particle.y = 100;
        }
    });
     // to expand this idea, add a for loop here and make particles an array
}
function draw() {         /*source, x, y, width, height */
particles.forEach((particle) => {
    context.drawImage(donutImage, particle.x , particle.y , 50 , 50);
});    

}
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width,canvas.height)
    update();
    draw();
}
init();
animate();



class Vector {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    /**
     * Returning a new Vector creates immutability
     * and allows chaining. These properties are
     * extremely useful with the complex formulas
     * we'll be using.
     **/
    add(vector) {
      return new Vector(this.x + vector.x, this.y + vector.y);
    }
  
    subtract(vector) {
      return new Vector(this.x - vector.x, this.y - vector.y);
    }
  
    multiply(scalar) {
      return new Vector(this.x * scalar, this.y * scalar);
    }
  
    dotProduct(vector) {
      return this.x * vector.x + this.y * vector.y;
    }
  
    get magnitude() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  
    get direction() {
      return Math.atan2(this.x, this.y);
    }
  }