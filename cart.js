// Check if the customer wants delivery or pickup
// For delivery option, show shipping address form. For pickup, hide form. 

function deliveryCheck() {
    if (document.getElementById('deliver').checked) {
        $('#shippingAddress').show();
        // Show button: Check Out & deliver
        $('#checkoutPickUp').hide();
        $('#checkoutDeliver').show();
        console.log("delivery");
    }
    if (document.getElementById('pickup').checked) {
        document.getElementById('shippingAddress').style.display = 'none';
        window.confirm("You will need to pick up your order at our warehouse. ");
        // Show default button: Check Out & pick up
        document.getElementById("checkoutDeliver").style.display = "none";
        document.getElementById("checkoutPickUp").style.display = "block";
    }
}
// Form validation for payment & shipping address


// If delivery option, validate delivery & payment details
function checkOutDeliver() {
    firstname = document.getElementById("firstName").value;
    lastname = document.getElementById("lastName").value;
    address = document.getElementById("address").value;
    address2 = document.getElementById("address2").value;
    zip = document.getElementById("zip").value;

    ccName = document.getElementById("cc-name").value;
    ccNumber = document.getElementById("cc-number").value;
    ccExpire = document.getElementById("cc-expiration").value;
    ccCVV = document.getElementById("cc-cvv").value;
    if (firstname == "" || lastname == "" || address == "" || address2 == "" || zip == "" || ccName == "" || ccNumber == "" || ccExpire == "" || ccCVV == "") {
        console.log("delivery or payment empty");
        alert("Oops! You forgot to fill in one of the required spaces. ");
    } else {
        console.log("delivery & payment not empty");
        location.href = "orderConfirm.html";

    }
}

// If pick up option, validate only payment details
function checkOutPickUp() {
    ccName = document.getElementById("cc-name").value;
    ccNumber = document.getElementById("cc-number").value;
    ccExpire = document.getElementById("cc-expiration").value;
    ccCVV = document.getElementById("cc-cvv").value;
    console.log("submit");
    if (ccName == "" || ccNumber == "" || ccExpire == "" || ccCVV == "") {
        console.log("payment empty");
        alert("Oops! You forgot to fill in one of the required spaces. ");
    } else {
        console.log("payment not empty");
        location.href = "orderConfirm.html";

    }
}