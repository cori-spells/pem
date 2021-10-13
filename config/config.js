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

function removeClass(cl) {
  document.getElementById(cl).style.display="none";
}

function myFun(input){
	var elementValue = input.value;
	if (elementValue=='1') {document.getElementById("artSlots").innerHTML = "1st level slots: <input type='radio' name='at'>0<input type='radio' name='at'>1<input type='radio' name='at' checked>2";document.getElementById("artInf").innerHTML = "Infusions known - none";}
	else if (elementValue=='2') {document.getElementById("artSlots").innerHTML = "1st level slots: <input type='radio' name='at'>0<input type='radio' name='at'>1<input type='radio' name='at' checked>2";document.getElementById("artInf").innerHTML = "Infusions known: 4, Infused Items: 2";}
	else if (elementValue=='3' || elementValue=='4') {document.getElementById("artSlots").innerHTML = "1st level slots: <input type='radio' name='at'>0<input type='radio' name='at'>1<input type='radio' name='at'>2<input type='radio' name='at' checked>3";document.getElementById("artInf").innerHTML = "Infusions known: 4, Infused Items: 2";}
	else if (elementValue=='5') {document.getElementById("artSlots").innerHTML = "1st level slots: <input type='radio' name='at'>0<input type='radio' name='at'>1<input type='radio' name='at'>2<input type='radio' name='at'>3<input type='radio' name='at' checked>4<BR>2nd level slots: <input type='radio' name='at2'>0<input type='radio' name='at2'>1<input type='radio' name='at2' checked>2";document.getElementById("artInf").innerHTML = "Infusions known: 4, Infused Items: 2";}
	else {document.getElementById("artSlots").innerHTML = "Please pick a number 1-5";}
}

function myBarb(input){
	var elementValue = input.value;
	if (elementValue=='1' || elementValue=='2') {document.getElementById("barbRage").innerHTML = "Rages: <input type='radio' name='bb'>0<input type='radio' name='bb'>1<input type='radio' name='bb' checked>2";}
	else if (elementValue=='3' || elementValue=='4' || elementValue=='5') {document.getElementById("barbRage").innerHTML = "Rages: <input type='radio' name='bb'>0<input type='radio' name='bb'>1<input type='radio' name='bb'>2<input type='radio' name='bb' checked>3";}
	else {document.getElementById("barbRage").innerHTML = "Please pick a number 1-5";}
}

function myBard(input){
	var elementValue = input.value;
	if (elementValue=='1') {document.getElementById("bardSlots").innerHTML = "1st level slots: <input type='radio' name='bd'>0<input type='radio' name='bd'>1<input type='radio' name='bd' checked>2";}
	else if (elementValue=='2') {document.getElementById("bardSlots").innerHTML="1st level slots: <input type='radio' name='bd'>0<input type='radio' name='bd'>1<input type='radio' name='bd'>2<input type='radio' name='bd' checked>3";}
	else if (elementValue=='3') {document.getElementById("bardSlots").innerHTML="1st level slots: <input type='radio' name='bd'>0<input type='radio' name='bd'>1<input type='radio' name='bd'>2<input type='radio' name='bd'>3<input type='radio' name='bd' checked>4<BR>2nd level slots: <input type='radio' name='bd2'>0<input type='radio' name='bd2'>1<input type='radio' name='bd2' checked>2"; document.getElementById("chDiv").innerHTML="Channel Divinity: Once per rest";}
	else if (elementValue=='4') {document.getElementById("bardSlots").innerHTML="1st level slots: <input type='radio' name='bd'>0<input type='radio' name='bd'>1<input type='radio' name='bd'>2<input type='radio' name='bd'>3<input type='radio' name='bd' checked>4<BR>2nd level slots: <input type='radio' name='bd2'>0<input type='radio' name='bd2'>1<input type='radio' name='bd2'>2<input type='radio' name='bd2' checked>3"; document.getElementById("chDiv").innerHTML="Channel Divinity: Once per rest";}
	else if (elementValue=='5') {document.getElementById("bardSlots").innerHTML="1st level slots: <input type='radio' name='bd'>0<input type='radio' name='bd'>1<input type='radio' name='bd'>2<input type='radio' name='bd'>3<input type='radio' name='bd' checked>4<BR>2nd level slots: <input type='radio' name='cl2'>0<input type='radio' name='bd2'>1<input type='radio' name='bd2'>2<input type='radio' name='bd2' checked>3<BR>3rd level slots: <input type='radio' name='bd3'>0<input type='radio' name='bd3'>1<input type='radio' name='bd3' checked>2";}
	else {document.getElementById("bardSlots").innerHTML = "Please pick a number 1-5";}
}

function myCleric(input){
	var elementValue = input.value;
	if (elementValue=='1') {document.getElementById("clericSlots").innerHTML = "1st level slots: <input type='radio' name='cl'>0<input type='radio' name='cl'>1<input type='radio' name='cl' checked>2";document.getElementById("chDiv").innerHTML="";}
	else if (elementValue=='2') {document.getElementById("clericSlots").innerHTML="1st level slots: <input type='radio' name='cl'>0<input type='radio' name='cl'>1<input type='radio' name='cl'>2<input type='radio' name='cl' checked>3"; document.getElementById("chDiv").innerHTML="Channel Divinity: Once per rest";}
	else if (elementValue=='3') {document.getElementById("clericSlots").innerHTML="1st level slots: <input type='radio' name='cl'>0<input type='radio' name='cl'>1<input type='radio' name='cl'>2<input type='radio' name='cl'>3<input type='radio' name='cl' checked>4<BR>2nd level slots: <input type='radio' name='cl2'>0<input type='radio' name='cl2'>1<input type='radio' name='cl2' checked>2"; document.getElementById("chDiv").innerHTML="Channel Divinity: Once per rest";}
	else if (elementValue=='4') {document.getElementById("clericSlots").innerHTML="1st level slots: <input type='radio' name='cl'>0<input type='radio' name='cl'>1<input type='radio' name='cl'>2<input type='radio' name='cl'>3<input type='radio' name='cl' checked>4<BR>2nd level slots: <input type='radio' name='cl2'>0<input type='radio' name='cl2'>1<input type='radio' name='cl2'>2<input type='radio' name='cl2' checked>3"; document.getElementById("chDiv").innerHTML="Channel Divinity: Once per rest";}
	else if (elementValue=='5') {document.getElementById("clericSlots").innerHTML="1st level slots: <input type='radio' name='cl'>0<input type='radio' name='cl'>1<input type='radio' name='cl'>2<input type='radio' name='cl'>3<input type='radio' name='cl' checked>4<BR>2nd level slots: <input type='radio' name='cl2'>0<input type='radio' name='cl2'>1<input type='radio' name='cl2'>2<input type='radio' name='cl2' checked>3<BR>3rd level slots: <input type='radio' name='cl3'>0<input type='radio' name='cl3'>1<input type='radio' name='cl3' checked>2"; document.getElementById("chDiv").innerHTML="Channel Divinity: Once per rest";}
	else {document.getElementById("clericSlots").innerHTML = "Please pick a number 1-5";}
}

function myDruid(input){
	var elementValue = input.value;
	if (elementValue=='1') {document.getElementById("druidSlots").innerHTML = "1st level slots: <input type='radio' name='dr'>0<input type='radio' name='dr'>1<input type='radio' name='dr' checked>2";}
	else if (elementValue=='2') {document.getElementById("druidSlots").innerHTML="1st level slots: <input type='radio' name='dr'>0<input type='radio' name='dr'>1<input type='radio' name='dr'>2<input type='radio' name='dr' checked>3";}
	else if (elementValue=='3') {document.getElementById("druidSlots").innerHTML="1st level slots: <input type='radio' name='dr'>0<input type='radio' name='dr'>1<input type='radio' name='dr'>2<input type='radio' name='dr'>3<input type='radio' name='dr' checked>4<BR>2nd level slots: <input type='radio' name='dr2'>0<input type='radio' name='dr2'>1<input type='radio' name='dr2' checked>2";}
	else if (elementValue=='4') {document.getElementById("druidSlots").innerHTML="1st level slots: <input type='radio' name='dr'>0<input type='radio' name='dr'>1<input type='radio' name='dr'>2<input type='radio' name='dr'>3<input type='radio' name='dr' checked>4<BR>2nd level slots: <input type='radio' name='dr2'>0<input type='radio' name='dr2'>1<input type='radio' name='dr2'>2<input type='radio' name='dr2' checked>3";}
	else if (elementValue=='5') {document.getElementById("druidSlots").innerHTML="1st level slots: <input type='radio' name='dr'>0<input type='radio' name='dr'>1<input type='radio' name='dr'>2<input type='radio' name='dr'>3<input type='radio' name='dr' checked>4<BR>2nd level slots: <input type='radio' name='dr2'>0<input type='radio' name='dr2'>1<input type='radio' name='dr2'>2<input type='radio' name='dr2' checked>3<BR>3rd level slots: <input type='radio' name='dr3'>0<input type='radio' name='dr3'>1<input type='radio' name='dr3' checked>2";}
	else {document.getElementById("druidSlots").innerHTML = "Please pick a number 1-5";}
}

function myMonk(input){
	var elementValue = input.value;
	if (elementValue=='1') {document.getElementById("ki").innerHTML = "Ki points: 0";}
	else if (elementValue=='2') {document.getElementById("ki").innerHTML="Ki points: <input type='radio' name='kipt'>0<input type='radio' name='kipt'>1<input type='radio' name='kipt' checked>2";}
	else if (elementValue=='3') {document.getElementById("ki").innerHTML="Ki points: <input type='radio' name='kipt'>0<input type='radio' name='kipt'>1<input type='radio' name='kipt'>2<input type='radio' name='kipt' checked>3";}
	else if (elementValue=='4') {document.getElementById("ki").innerHTML="Ki points: <input type='radio' name='kipt'>0<input type='radio' name='kipt'>1<input type='radio' name='kipt'>2<input type='radio' name='kipt'>3<input type='radio' name='kipt' checked>4";}
	else if (elementValue=='5') {document.getElementById("ki").innerHTML="Ki points: <input type='radio' name='kipt'>0<input type='radio' name='kipt'>1<input type='radio' name='kipt'>2<input type='radio' name='kipt'>3<input type='radio' name='kipt'>4<input type='radio' name='kipt' checked>5";}
	else {document.getElementById("ki").innerHTML = "Please pick a number 1-5";}
}

function myPal(input){
	var elementValue = input.value;
	if (elementValue=='1') {document.getElementById("palSlots").innerHTML = "Spell slots: 0";}
	else if (elementValue=='2') {document.getElementById("palSlots").innerHTML="1st level slots: <input type='radio' name='pal'>0<input type='radio' name='pal'>1<input type='radio' name='pal' checked>2";}
	else if (elementValue=='3' || elementValue=='4') {document.getElementById("palSlots").innerHTML="1st level slots: <input type='radio' name='pal'>0<input type='radio' name='pal'>1<input type='radio' name='pal'>2<input type='radio' name='pal' checked>3<BR>Channel Divinity: once per rest";}
	else if (elementValue=='5') {document.getElementById("palSlots").innerHTML="1st level slots: <input type='radio' name='pal'>0<input type='radio' name='pal'>1<input type='radio' name='pal'>2<input type='radio' name='pal'>3<input type='radio' name='pal' checked>4<BR>2nd level slots: <input type='radio' name='pal2'>0<input type='radio' name='pal2'>1<input type='radio' name='pal2' checked>2<BR>Channel Divinity: once per rest";}
	else {document.getElementById("palSlots").innerHTML = "Please pick a number 1-5";}
}

function myRanger(input){
	var elementValue = input.value;
	if (elementValue=='1') {document.getElementById("rangSlots").innerHTML = "Spell slots: 0";}
	else if (elementValue=='2') {document.getElementById("rangSlots").innerHTML="1st level slots: <input type='radio' name='rang'>0<input type='radio' name='rang'>1<input type='radio' name='rang' checked>2";}
	else if (elementValue=='3' || elementValue=='4') {document.getElementById("rangSlots").innerHTML="1st level slots: <input type='radio' name='rang'>0<input type='radio' name='rang'>1<input type='radio' name='rang'>2<input type='radio' name='rang' checked>3";}
	else if (elementValue=='5') {document.getElementById("rangSlots").innerHTML="1st level slots: <input type='radio' name='rang'>0<input type='radio' name='rang'>1<input type='radio' name='rang'>2<input type='radio' name='rang'>3<input type='radio' name=rang' checked>4<BR>2nd level slots: <input type='radio' name='rang2'>0<input type='radio' name='rang2'>1<input type='radio' name='rang2' checked>2";}
	else {document.getElementById("rangSlots").innerHTML = "Please pick a number 1-5";}
}

function mySorc(input){
	var elementValue = input.value;
	if (elementValue=='1') {document.getElementById("sorcSlots").innerHTML = "1st level slots: <input type='radio' name='sorc'>0<input type='radio' name='sorc'>1<input type='radio' name='sorc' checked>2";}
	else if (elementValue=='2') {document.getElementById("sorcSlots").innerHTML="1st level slots: <input type='radio' name='sorc'>0<input type='radio' name='sorc'>1<input type='radio' name='sorc'>2<input type='radio' name='sorc' checked>3<BR>Sorcery Points: <input type='radio' name='pts'>0<input type='radio' name='pts'>1<input type='radio' name='pts' checked>2";}
	else if (elementValue=='3') {document.getElementById("sorcSlots").innerHTML="1st level slots: <input type='radio' name='sorc'>0<input type='radio' name='sorc'>1<input type='radio' name='sorc'>2<input type='radio' name='sorc'>3<input type='radio' name='sorc' checked>4<BR>2nd level slots: <input type='radio' name='sorc2'>0<input type='radio' name='sorc2'>1<input type='radio' name='sorc2' checked>2<BR>Sorcery Points: <input type='radio' name='pts'>0<input type='radio' name='pts'>1<input type='radio' name='pts'>2<input type='radio' name='pts' checked>3";}
	else if (elementValue=='4') {document.getElementById("sorcSlots").innerHTML="1st level slots: <input type='radio' name='sorc'>0<input type='radio' name='sorc'>1<input type='radio' name='sorc'>2<input type='radio' name='sorc'>3<input type='radio' name='sorc' checked>4<BR>2nd level slots: <input type='radio' name='sorc2'>0<input type='radio' name='sorc2'>1<input type='radio' name='sorc2'>2<input type='radio' name='sorc2' checked>3<BR>Sorcery Points: <input type='radio' name='pts'>0<input type='radio' name='pts'>1<input type='radio' name='pts'>2<input type='radio' name='pts'>3<input type='radio' name='pts' checked>4";}
	else if (elementValue=='5') {document.getElementById("sorcSlots").innerHTML="1st level slots: <input type='radio' name='sorc'>0<input type='radio' name='sorc'>1<input type='radio' name='sorc'>2<input type='radio' name='sorc'>3<input type='radio' name='sorc' checked>4<BR>2nd level slots: <input type='radio' name='sorc2'>0<input type='radio' name='sorc2'>1<input type='radio' name='sorc2'>2<input type='radio' name='sorc2' checked>3<BR>3rd level slots: <input type='radio' name='sorc3'>0<input type='radio' name='sorc3'>1<input type='radio' name='sorc3' checked>2<BR>Sorcery Points: <input type='radio' name='pts'>0<input type='radio' name='pts'>1<input type='radio' name='pts'>2<input type='radio' name='pts'>3<input type='radio' name='pts'>4<input type='radio' name='pts' checked>5";}
	else {document.getElementById("sorcSlots").innerHTML = "Please pick a number 1-5";}
}

function myWarl(input){
	var elementValue = input.value;
	if (elementValue=='1') {document.getElementById("warlSlots").innerHTML = "Spell slots (1st level): <input type='radio' name='warl'>0<input type='radio' name='warl' checked>1";}
	else if (elementValue=='2') {document.getElementById("warlSlots").innerHTML="Spell slots (1st level): <input type='radio' name='warl'>0<input type='radio' name='warl'>1<input type='radio' name='warl' checked>2";}
	else if (elementValue=='3') {document.getElementById("warlSlots").innerHTML="Spell slots (2nd level): <input type='radio' name='warl'>0<input type='radio' name='warl'>1<input type='radio' name='warl' checked>2";}
	else if (elementValue=='4') {document.getElementById("warlSlots").innerHTML="Spell slots (2nd level): <input type='radio' name='warl'>0<input type='radio' name='warl'>1<input type='radio' name='warl' checked>2";}
	else if (elementValue=='5') {document.getElementById("warlSlots").innerHTML="Spell slots (3rd level): <input type='radio' name='warl'>0<input type='radio' name='warl'>1<input type='radio' name='warl' checked>2";}
	else {document.getElementById("warlSlots").innerHTML = "Please pick a number 1-5";}
}

function myWiz(input){
	var elementValue = input.value;
	if (elementValue=='1') {document.getElementById("wizSlots").innerHTML = "1st level slots:<input type='radio' name='wiz'>0<input type='radio' name='wiz'>1<input type='radio' name='wiz' checked>2";}
	else if (elementValue=='2') {document.getElementById("wizSlots").innerHTML="1st level slots:<input type='radio' name='wiz'>0<input type='radio' name='wiz'>1<input type='radio' name='wiz'>2<input type='radio' name='wiz' checked>3";}
	else if (elementValue=='3') {document.getElementById("wizSlots").innerHTML="1st level slots:<input type='radio' name='wiz'>0<input type='radio' name='wiz'>1<input type='radio' name='wiz'>2<input type='radio' name='wiz'>3 <input type='radio' name='wiz' checked>4<BR>2nd level slots:<input type='radio' name='wiz2'>0<input type='radio' name='wiz2'>1<input type='radio' name='wiz2' checked>2";}
	else if (elementValue=='4') {document.getElementById("wizSlots").innerHTML="1st level slots:<input type='radio' name='wiz'>0<input type='radio' name='wiz'>1<input type='radio' name='wiz'>2<input type='radio' name='wiz'>3 <input type='radio' name='wiz' checked>4<BR>2nd level slots:<input type='radio' name='wiz2'>0<input type='radio' name='wiz2'>1<input type='radio' name='wiz2'>2<input type='radio' name='wiz2' checked>3";}
	else if (elementValue=='5') {document.getElementById("wizSlots").innerHTML="1st level slots:<input type='radio' name='wiz'>0<input type='radio' name='wiz'>1<input type='radio' name='wiz'>2<input type='radio' name='wiz'>3 <input type='radio' name='wiz' checked>4<BR>2nd level slots:<input type='radio' name='wiz2'>0<input type='radio' name='wiz2'>1<input type='radio' name='wiz2'>2<input type='radio' name='wiz2' checked>3<BR>3rd level slots: <input type='radio' name='wiz3'>0<input type='radio' name='wiz3'>1<input type='radio' name='wiz3' checked>2";}
	else {document.getElementById("wizSlots").innerHTML = "Please pick a number 1-5";}
}