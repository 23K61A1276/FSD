
let name = prompt("Enter your name:");

document.getElementById("showInputBtn").addEventListener("click", function() {
    let inputVal = document.getElementById("inputBox").value;
    alert("You typed: " + inputVal);
});


document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let age = document.getElementById("age").value;
    alert("Age entered: " + age);
});
