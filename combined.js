window.onload = function cartLoaded() {
    //  Add prices together & calculate total
    TotalCartPrice = document.getElementById("TotalCartPrice");
    TotalCartPrice.innerHTML = "R" + cartFinalTotal;
    // Add 15% VAT
    vatCost = document.getElementById("vatCost");
    vatCost.innerHTML = parseFloat(cartFinalTotal) * 0.15;
    TotalCartPrice.innerHTML = parseFloat(cartFinalTotal) + (parseFloat(cartFinalTotal) * 0.15);
};

// Adding procducts added from the shop to the cart

var cartFinalTotal = 0;

myCart = JSON.parse(sessionStorage.getItem("CART"));
myCart = myCart ? myCart : [];
const product = document.getElementById("product1");
var TotalCartPrice = document.getElementById("TotalCartPrice");
console.log(product);
for (let i = 0; i < myCart.length; i++) {
    const plant = myCart[i];
    console.log('Adding: ');
    console.log(plant);
    const html = [
        '<li class="list-group-item d-flex justify-content-between lh-condensed">',
        '<div>',
        '<h6 class="my-0">' + plant.name + '</h6>',
        '</div>',
        '<span class="text-muted">' + 'R' + plant.price + '</span>',
        '</li>',
    ].join('');
    product.innerHTML = product.innerHTML + html;
    cartFinalTotal += plant.price;
    console.log(cartFinalTotal);
}

// Add price of delivery, depending on choice

CTdeliveryPrice = document.getElementById("priceCT").innerHTML;
JHBdeliveryPrice = document.getElementById("priceJHB").innerHTML;
DBNdeliveryPrice = document.getElementById("priceDBN").innerHTML;

// Adding delivery cost to the cart

function CTdeliveryPriceAdd() {
    console.log(CTdeliveryPrice);
    CTdeliveryCost = document.getElementById("deliveryCost");
    CTdeliveryCost.innerHTML = "R" + CTdeliveryPrice;
    TotalCartPrice.innerHTML = parseFloat(CTdeliveryPrice) + parseFloat(cartFinalTotal) + (parseFloat(cartFinalTotal) * 0.15);
}

function JHBdeliveryPriceAdd() {
    console.log(JHBdeliveryPrice);
    JHBdeliveryCost = document.getElementById("deliveryCost");
    JHBdeliveryCost.innerHTML = "R" + JHBdeliveryPrice;
    TotalCartPrice.innerHTML = parseFloat(JHBdeliveryPrice) + parseFloat(cartFinalTotal) + (parseFloat(cartFinalTotal) * 0.15);
}

function DBNdeliveryPriceAdd() {
    console.log(DBNdeliveryPrice);
    DBNdeliveryCost = document.getElementById("deliveryCost");
    DBNdeliveryCost.innerHTML = "R" + DBNdeliveryPrice;
    TotalCartPrice.innerHTML = parseFloat(DBNdeliveryPrice) + parseFloat(cartFinalTotal) + (parseFloat(cartFinalTotal) * 0.15);
}


// Subtract promo code value

function FreeDelivery() {
    promoBtn = document.getElementById("promoBtn");
    freeDelivery = document.getElementById("freeDelivery").value;
    console.log(freeDelivery);
    if (freeDelivery === "FREE_DEL") {
        const deliverCost = document.getElementById("deliveryCost").innerHTML.slice(1);
        document.getElementById("deliveryCost").innerHTML = 0;
        const total = document.getElementById("TotalCartPrice").innerHTML;
        document.getElementById("TotalCartPrice").innerHTML = total - deliverCost;
    } else {
        console.log("promo not valid");
        alert("Sorry, that promo code does not exist. Try again. ");
    }
}