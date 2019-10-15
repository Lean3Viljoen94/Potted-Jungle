const SESSION_STORAGE_CART = 'CART';

priceAmelia = document.getElementById("priceAmelia").innerHTML;
priceLupita = document.getElementById("priceLupita").innerHTML;
priceAva = document.getElementById("priceAva").innerHTML;
priceEvelyn = document.getElementById("priceEvelyn").innerHTML;
priceAlexander = document.getElementById("priceAlexander").innerHTML;
priceHazel = document.getElementById("priceHazel").innerHTML;
priceSkylar = document.getElementById("priceSkylar").innerHTML;
priceEzra = document.getElementById("priceEzra").innerHTML;
priceVictoria = document.getElementById("priceVictoria").innerHTML;
priceHenry = document.getElementById("priceHenry").innerHTML;
priceGabriella = document.getElementById("priceGabriella").innerHTML;
priceSimon = document.getElementById("priceSimon").innerHTML;

let plants = {
    Amelia: 500,
    Lupita: 400,
    Ava: 120,
    Evelyn: 200,
    Alexander: 120,
    Hazel: 200,
    Skylar: 600,
    Ezra: 700,
    Victoria: 200,
    Henry: 100,
    Gabriella: 600,
    Simon: 200,
};

function addToCart(plantName, plantPrice) {
    let inCart = sessionStorage.getItem(SESSION_STORAGE_CART);
    if (!inCart) {
        inCart = [];
    } else {
        inCart = JSON.parse(inCart);
    }
    inCart.push({
        name: plantName,
        price: plantPrice
    });
    sessionStorage.setItem(SESSION_STORAGE_CART, JSON.stringify(inCart));
}

function showTotal() {
    let itemsCurrentlyInCart = JSON.parse(sessionStorage.getItem("CART"));
    itemsCurrentlyInCart = itemsCurrentlyInCart ? itemsCurrentlyInCart : [];
    let totalSoFar = 0;
    for (let i = 0; i < itemsCurrentlyInCart.length; i++) {
        const plant = itemsCurrentlyInCart[i];
        totalSoFar += plant.price;
    }
    alert("Your total cart so far is R" + totalSoFar);
}

function cartAmelia() {
    addToCart('Amelia', plants.Amelia);
    showTotal();
}

function cartLupita() {
    addToCart('Lupita', plants.Lupita);
    showTotal();
}

function cartAva() {
    addToCart('Ava', plants.Ava);
    showTotal();
}

function cartEvelyn() {
    addToCart('Evelyn', plants.Evelyn);
    showTotal();
}

function cartAlexander() {
    addToCart('Alexander', plants.Alexander);
    showTotal();
}

function cartHazel() {
    addToCart('Hazel', plants.Hazel);
    showTotal();
}

function cartSkylar() {
    addToCart('Skylar', plants.Skylar);
    showTotal();
}

function cartEzra() {
    addToCart('Ezra', plants.Ezra);
    showTotal();
}

function cartVictoria() {
    addToCart('Victoria', plants.Victoria);
    showTotal();
}

function cartHenry() {
    addToCart('Henry', plants.Henry);
    showTotal();
}

function cartGabriella() {
    addToCart('Gabriella', plants.Gabriella);
    showTotal();
}

function cartSimon() {
    addToCart('Simon', plants.Simon);
    showTotal();
}