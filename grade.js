
var score = 98;

switch(true) {
case (score >= 0 && score < 60):
console.log("F");
break;
case (score > 59 && score < 70):
console.log("D");
break;
case (score > 69 && score < 80):
console.log("C");
break;
case (score > 79 && score < 90):
console.log("B");
break;
case (score > 89 && score < 101):
console.log("A");
break;
}