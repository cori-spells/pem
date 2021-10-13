var coll = document.getElementsByClassName("spell");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}


function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByClassName('spell spell-all');
  con = ul.getElementsByClassName('content');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
      con[i].style.display = "none";
    }
  }
}

function myFunction2(spellname) {
  if (document.getElementById(spellname).style.display === "block") {
    document.getElementById(spellname).style.display = "none";
  } else {
    document.getElementById(spellname).style.display = "block";
  }
}



function Clear(){
    var divsToHide = document.getElementsByClassName("name"); 
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; 
    }}


function addClass(cl) {
  document.getElementById(cl).style.display="block";
}

function myFun(input){
	var elementValue = input.value;
	if (elementValue=='1') {document.getElementById("artSlots").innerHTML = "Spell Slots:2 first level";document.getElementById("artInf").innerHTML = "Infusions known - none";}
	else if (elementValue=='2') {document.getElementById("artSlots").innerHTML = "Spell Slots:2 first level";document.getElementById("artInf").innerHTML = "Infusions known: 4, Infused Items: 2";}
	else if (elementValue=='3' || elementValue=='4') {document.getElementById("artSlots").innerHTML = "Spell Slots: 3 first level";document.getElementById("artInf").innerHTML = "Infusions known: 4, Infused Items: 2";}
	else if (elementValue=='5') {document.getElementById("artSlots").innerHTML = "Spell Slots: 4 first level, 2 second";document.getElementById("artInf").innerHTML = "Infusions known: 4, Infused Items: 2";}
	else if (elementValue=='6') {document.getElementById("artSlots").innerHTML = "Spell Slots: 4 first level, 2 second";document.getElementById("artInf").innerHTML = "Infusions known: 6, Infused Items: 3";}
	else {document.getElementById("artSlots").innerHTML = "Please pick a number 1-6";}
}