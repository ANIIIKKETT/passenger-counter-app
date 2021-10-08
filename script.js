/*var c = document.getElementById("count");
console.log(c);
var count=0;

function inc () {
count = count+1;
c.textContent=count;
}*/

var en= document.getElementById("entry");
var c= document.getElementById("count");
var count =0;
function inc() {
	c.textContent=count;
	count+=1;
}
document.getElementById("increment")
.onclick=inc;

function save() {
	var str= count-1 + " - ";
	en.textContent+=str;
	c.textContent=0;
	count=0;
}
document.getElementById("save")
.onclick=save;

