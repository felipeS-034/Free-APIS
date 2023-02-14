let canvas

let APIdog

let APIcat

let APIuserRandom

let APIbitCoin

let APIdataUser

let APIgender

let APIemail

let APIlocation

let APIname

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
}

function draw() {
    background(255);
    newCursor();

    textSize(20);
    text ('DataUser')
    
    if (APIdog !== undefined) {
        fill(255)
        image (APIdog, 50, 200, 300, 300)
    }

    if (APIcat !== undefined) {
        fill(0)
        text (`${APIcat.fact}`, 50, 650)
    }
    
    if (APIuserRandom !== undefined) {
        fill(255, 0, 0)
        text('Userrandom');
        text (APIemail, 50,550)
        text (APIgender, 350, 550)
        text (APIlocation, 500, 550)
        text (APIname, 700, 550)
    }


    if (APIbitCoin !== undefined) {
        fill(0, 0, 255)
        text (`${APIbitCoin.chartName}`, 50, 700)
        text (`${APIbitCoin.bpi.EUR.code}`, 150, 700)
        text (`${APIbitCoin.bpi.EUR.description}`, 200, 700)
        text (`${APIbitCoin.disclaimer}`, 50, 750)
        text (`${APIbitCoin.time.updated}`, 50, 800)
    }
}

function mouseClicked() {
    getRandomUser()
    getBitcoin()
    getDog()
    getCat()
}

async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    APIuserRandom = data
    APIgender = data.results[0].gender
    APIemail = data.results[0].email
    APIlocation = data.results[0].location.city
    APIname = data.results[0].name.last
    console.log(APIuserRandom.results[0])
}

async function getBitcoin() {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await response.json()
    APIbitCoin = data
    console.log(APIbitCoin)
}

async function getDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    APIdog = loadImage(data.message)
    console.log(APIdog)
}

async function getCat() {
    const response = await fetch('https://catfact.ninja/fact')
    const data = await response.json()
    APIcat = data
    console.log(APIcat)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(0);
    ellipse(pmouseX, pmouseY, 50, 50);
}

