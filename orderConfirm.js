// Generate random reference number on order confirmation
function refNumber() {
  var refNr = document.getElementById("refNumber")
  refNr.innerHTML = Math.floor((Math.random() * 1000000) + 1);
}