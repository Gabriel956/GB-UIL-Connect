





//declare const and variables

const tax = 0.0825;

const Alienware = 1998;
const NIVIDIA = 398;
const Beats = 199;
const Desktop = 1399;
const Switch = 278;
const VR = 289;
const Tears = 70;
const Lost = 40;
const Mouse = 80;
const Key = 120;

var alienware;
var nividia;
var beats;
var desktop;
var switch1;
var vr;
var tears;
var lost;
var mouse;
var key;


var amount;

var confirmation = "Thank you for your purchase! (:";

//calculate for singular buttons and display on products page

function cal01() {
    
    alienware = parseFloat((Alienware * tax) + Alienware);
    
    document.getElementById("displaycost").innerHTML = "$" + alienware.toFixed(2);
}

function cal02() {

    nividia = parseFloat((NIVIDIA * tax) + NIVIDIA);

    document.getElementById("displaycost").innerHTML = "$" + nividia.toFixed(2);
}

function cal03() {
    
    beats = parseFloat((Beats * tax) + Beats);
    
    document.getElementById("displaycost").innerHTML = "$" + beats.toFixed(2);
}

function cal04() {

    desktop = parseFloat((Desktop * tax) + Desktop);

    document.getElementById("displaycost").innerHTML = "$" + desktop.toFixed(2);
}

function cal05() {
    
    switch1 = parseFloat((Switch * tax) + Switch);
    
    document.getElementById("displaycost").innerHTML = "$" + switch1.toFixed(2);
}

function cal06() {

    vr = parseFloat((VR * tax) + VR);

    document.getElementById("displaycost").innerHTML = "$" + vr.toFixed(2);
}

function cal07() {
    
    tears = parseFloat((Tears * tax) + Tears);
    
    document.getElementById("displaycost").innerHTML = "$" + tears.toFixed(2);
}

function cal08() {

    lost = parseFloat((Lost * tax) + Lost);

    document.getElementById("displaycost").innerHTML = "$" + lost.toFixed(2);
}

function cal09() {
    
    mouse = parseFloat((Mouse * tax) + Mouse);
    
    document.getElementById("displaycost").innerHTML = "$" + mouse.toFixed(2);

    document.getElementById("displaycost").focus();
}

function cal10() {

    key = parseFloat((Key * tax) + Key);

    document.getElementById("displaycost").innerHTML = "$" + key.toFixed(2);
}



//calculate for individual product pages

function total01() {

    amount = parseInt(document.productsIndi.quantity.value);

    alienware = parseFloat(((Alienware * amount) * tax) + (Alienware * amount))

    document.getElementById("displaycostp").innerHTML = "$" + alienware.toFixed(2);
}

function total02() {

    amount = parseInt(document.productsIndi.quantity.value);

    nividia = parseFloat(((NIVIDIA * amount) * tax) + (NIVIDIA * amount))

    document.getElementById("displaycostp").innerHTML = "$" + nividia.toFixed(2);
}

function total03() {

    amount = parseInt(document.productsIndi.quantity.value);

    beats = parseFloat(((Beats * amount) * tax) + (Beats * amount))

    document.getElementById("displaycostp").innerHTML = "$" + beats.toFixed(2);
}

function total04() {

    amount = parseInt(document.productsIndi.quantity.value);

    desktop = parseFloat(((Desktop * amount) * tax) + (Desktop * amount))

    document.getElementById("displaycostp").innerHTML = "$" + desktop.toFixed(2);
}

function total05() {

    amount = parseInt(document.productsIndi.quantity.value);

    switch1 = parseFloat(((Switch * amount) * tax) + (Switch * amount))

    document.getElementById("displaycostp").innerHTML = "$" + switch1.toFixed(2);
}

function total06() {

    amount = parseInt(document.productsIndi.quantity.value);

    vr = parseFloat(((VR * amount) * tax) + (VR * amount))

    document.getElementById("displaycostp").innerHTML = "$" + vr.toFixed(2);
}

function total07() {

    amount = parseInt(document.productsIndi.quantity.value);

    tears = parseFloat(((Tears * amount) * tax) + (Tears * amount))

    document.getElementById("displaycostp").innerHTML = "$" + tears.toFixed(2);
}

function total08() {

    amount = parseInt(document.productsIndi.quantity.value);

    lost = parseFloat(((Lost * amount) * tax) + (Lost * amount))

    document.getElementById("displaycostp").innerHTML = "$" + lost.toFixed(2);
}

function total09() {

    amount = parseInt(document.productsIndi.quantity.value);

    mouse = parseFloat(((Mouse * amount) * tax) + (Mouse * amount))

    document.getElementById("displaycostp").innerHTML = "$" + mouse.toFixed(2);
}

function total10() {

    amount = parseInt(document.productsIndi.quantity.value);

    key = parseFloat(((Key * amount) * tax) + (Key * amount))

    document.getElementById("displaycostp").innerHTML = "$" + key.toFixed(2);
}



//confirm purchase and clear

function confirm01() {

    document.productsIndi.quantity.value = " ";

    document.getElementById("displaycostp").innerHTML = " ";

    alert(confirmation);
}

function confirm02() {

    document.getElementById("displaycost").innerHTML = " ";

    alert(confirmation);
}