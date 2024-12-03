let score = 0;
let workers = 0;
let farmers = 0;
let engineers = 0;
let increment = 1;

let workerProduction = 1 * increment;
let farmerProduction = 5 * increment;
let engineerProduction = 20 * increment;

let workerCost = 10;
let farmerCost = 50;
let engineerCost = 200;
let upgradeCost = 2000;

const scoreDisplay = document.getElementById("score");
const workersDisplay = document.getElementById("workers");
const farmersDisplay = document.getElementById("farmers");
const engineersDisplay = document.getElementById("engineers");
const clickBtn = document.getElementById("click-btn");
const buyWorkerBtn = document.getElementById("buy-worker");
const buyFarmerBtn = document.getElementById("buy-farmer");
const buyEngineerBtn = document.getElementById("buy-engineer");
const eventsDisplay = document.getElementById("events");
const upgradeBtn = document.getElementById("upgrade-btn");
const incrementLevel = document.getElementById("increment-level");
const workersCost = document.getElementById("worker-cost");
const farmersCost = document.getElementById("farmer-cost");
const engineersCost = document.getElementById("engineer-cost");

function updateDisplay() {
    scoreDisplay.textContent = Math.floor(score);
    workersDisplay.textContent = workers;
    farmersDisplay.textContent = farmers;
    engineersDisplay.textContent = engineers;
    incrementLevel.textContent = increment;
    workersCost.textContent = workerCost;
    farmersCost.textContent = farmerCost;
    engineersCost.textContent = engineerCost;
}

function updateProduction() {
    workerProduction = 1 * increment;
    farmerProduction = 5 * increment;
    engineerProduction = 20 * increment;
}

clickBtn.addEventListener("click", () => {
    score += increment;
    updateDisplay();
});

buyWorkerBtn.addEventListener("click", () => {
    if (score >= workerCost) {
        score -= workerCost;
        workers++;
        updateDisplay();
    }
});

buyFarmerBtn.addEventListener("click", () => {
    if (score >= farmerCost) {
        score -= farmerCost;
        farmers++;
        updateDisplay();
    }
});

buyEngineerBtn.addEventListener("click", () => {
    if (score >= engineerCost) {
        score -= engineerCost;
        engineers++;
        updateDisplay();
    }
});

upgradeBtn.addEventListener("click", () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        increment++;
        updateProduction();
        updateDisplay();
    }
});

const events = [
    {
        description: "bonus 100 points!",
        action: () => {
            score += 100;
            alert("Event: bonus 100 points!");
        }
    },
    {
        description: "free unit!",
        action: () => {
            workers++;
            alert("Event: free unit!");
        }
    },
    {
        description: "x2 productivity!",
        action: () => {
            workerProduction *= 2;
            farmerProduction *= 2;
            engineerProduction *= 2;
            alert("Event: x2 productivity!");
        }
    },
    {
        description: "-20% of points!",
        action: () => {
            score *= 0.8;
            alert("Event: -20% of points!");
        }
    },
    {
        description: "+10% to cost of units!",
        action: () => {
            workerCost = Math.ceil(workerCost * 1.1);
            farmerCost = Math.ceil(farmerCost * 1.1);
            engineerCost = Math.ceil(engineerCost * 1.1);
            alert("Event: +10% to cost of units!");
        }
    }
];

function getRandomEvent(events = []) {
    if (events.length === 0) {
        console.warn("No events available!");
        return null;
    }
    const event = events[Math.floor(Math.random() * events.length)];
    event.action();
    return event.description;
}

setInterval(() => {
    score += workers * workerProduction;
    score += farmers * farmerProduction;
    score += engineers * engineerProduction;
    updateDisplay();
}, 1000);

setInterval(() => {
    getRandomEvent(events);
}, 100000); 
