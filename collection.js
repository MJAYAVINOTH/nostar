// // search function 
// var search = document.getElementById("search");
// var cards = document.querySelectorAll(".text-center.result");

// search.addEventListener("keyup", function(event) {
//     var enteredValue = event.target.value.toLowerCase();

//     for (var count = 0; count < cards.length; count++) {
//         var title = cards[count].querySelector("h1").textContent.toLowerCase();

//         if (title.indexOf(enteredValue) < 0) {
//             cards[count].style.display = "none"; // hide full card
//         } else {
//             cards[count].style.display = "block"; // show full card
//         }
//     }
// });



// //checkbox value 








// //side navbar,menu icon 
// var sidenav = document.getElementById("sidenav") 
// var menuicon = document.getElementById("menuicon")
// var closenav = document.getElementById("closenav")


// menuicon.addEventListener("click",function(){
//   sidenav.style.right=0
// })

// closenav.addEventListener("click",function(){
//   sidenav.style.right="-50%"
// })




// search function + checkbox filter combined
var search = document.getElementById("search");
var cards = document.querySelectorAll(".text-center.result");
var checkboxes = document.querySelectorAll(".check");

// function to filter results
function filterCards() {
    var searchValue = search.value.toLowerCase();

    // collect all checked values
    var checkedValues = Array.from(checkboxes)
        .filter(ch => ch.checked)
        .map(ch => ch.value.toLowerCase());

    cards.forEach(card => {
        var title = card.querySelector("h1").textContent.toLowerCase();
        var occasion = card.querySelector(".OCCASSION").textContent.toLowerCase();
        var price = card.querySelector(".price").textContent.toLowerCase();

        var matchesSearch = title.includes(searchValue) || occasion.includes(searchValue) || price.includes(searchValue);

        var matchesCheckbox = checkedValues.length === 0 || checkedValues.some(val =>
            title.includes(val) || occasion.includes(val) || price.includes(val)
        );

        if (matchesSearch && matchesCheckbox) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// search event
search.addEventListener("keyup", filterCards);

// checkbox event
checkboxes.forEach(ch => {
    ch.addEventListener("change", filterCards);
});


// side navbar
var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});

closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});
