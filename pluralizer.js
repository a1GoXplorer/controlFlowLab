
var myThing = "Rhino";
var myCount = 70;



var Pluralizer = function(thing,count) 
{

	if (count > 1) {
		console.log(count + " " + thing + "s");
	}
	else
	{
		console.log(count + " " + thing);
	}
};

Pluralizer(myThing,myCount);