let prom = ()=>{
let MenuOption = prompt("Please enter your option \n1.Pizza \n2.Desserts \n3.IceCreams \n4.Soft Drinks\n5.Bill");
switch (parseInt(MenuOption)) {
    case 1:
        Pizza()
        break;

    case 2:
        Desserts();
        break;
    case 3:
        IceCream();
        break;
    case 4:
        SoftDrink();
        break;
    case 5:
        Bill();
        break;
    default:
        alert("please Enter a valid input");
        prom();
        break;
}}


let Pizza = ()=>{
    console.log("pizza")
    document.querySelector(".pizza").style.display = "flex";
    document.querySelector(".icecream").style.display = "none";
    document.querySelector(".dessert").style.display = "none";
    document.querySelector(".softdrink").style.display = "none";

    
}
let IceCream = ()=>{
    document.querySelector(".pizza").style.display = "none";
    document.querySelector(".icecream").style.display = "flex";
    document.querySelector(".dessert").style.display = "none";
    document.querySelector(".softDrink").style.display = "none";
}
let Desserts = ()=>{
    document.querySelector(".pizza").style.display = "none";
    document.querySelector(".icecream").style.display = "none";
    document.querySelector(".desserts").style.display = "flex";
    document.querySelector(".softdrink").style.display = "none";


}
let SoftDrink = ()=>{
    document.querySelector(".pizza").style.display = "none";
    document.querySelector(".icecream").style.display = "none";
    document.querySelector(".dessert").style.display = "none";
    document.querySelector(".softdrink").style.display = "flex";

}
let bill=0;
const orderButtons = document.querySelectorAll("button")
orderButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const price = parseFloat(button.getAttribute("value"));
        bill += price;console.log(bill);
      
    });
});

let Bill = ()=>{
    alert(`your bill amount is ${bill}`)
}


let moreOrder = document.querySelector("#foot");
moreOrder.addEventListener("click",prom);
prom();