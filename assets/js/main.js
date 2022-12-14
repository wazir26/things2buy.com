// ----------------JS for toggle menu-------------------
let MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight="0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "200px";
    }
    else
    {
        MenuItems.style.maxHeight = "0px";
    }
}
// ------------- js for Login & Registration form ------------------
var loginform = document.getElementById("loginform");
var registerform = document.getElementById("registerform");
var Indicator = document.getElementById("Indicator");

function register(){
    registerform.style.transform = "translateX(0px)";
    loginform.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function login(){
    console.log("im in")
    registerform.style.transform = "translateX(300px)";
    loginform.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";

}

// ------------- js for product gallery ------------------

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

// console.log(SmallImg);
SmallImg[0].onclick = function()
{
    ProductImg.src = SmallImg[0].src;
}
console.log(SmallImg);
SmallImg[1].onclick = function()
{
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function()
{
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function()
{
    ProductImg.src = SmallImg[3].src;
}



