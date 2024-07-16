//search functiom

var productContainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div");
console.log(productList);

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    for (let count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("h1").textContent;
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});
