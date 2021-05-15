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


function Export(){ 
  var clip = new Clipboard('.btn');
  clip.on("success", function() {
    document.body.insertAdjacentHTML('beforeend', '<div>that worked.</div>');
});
  clip.on("error", function() {
   document.body.insertAdjacentHTML('beforeend', '<div>that didn\'t work.</div>');
});

function Clear(){
    var divsToHide = document.getElementsByClassName("name"); 
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; 
    }}


function Save(){
  var list = document.getElementsbyClassName("name");
  var i;
  var save = ["test"];
  for(var i = 0; i < list.length; i++){
    if(list[i].style.display === "block") { save.push(list[i]);}}
  save.select();
  alert("Copied the text: " + save.value);
}



