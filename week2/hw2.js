function roll(){
	return Math.floor(Math.random() * 6 + 1);
}
var x = 0;
var display_p1 = [];
while(x < 10){
	display_p1[x] = roll();
	x++;
}
console.log(display_p1.join('-'));

function diceFactory(values){
	return function(){
		var coefficient = Math.floor(Math.random() * values.length);
		return values[coefficient];
	}
}
function lunch(){
	var f = diceFactory(["pizza","burrito","sushi"]);
	// console.log(f());
	return f();
}
var display_p2 = [];
var y = 0;
while(y < 10){
	display_p2[y] = lunch();
	y++;
}
console.log(display_p2.join('-'));

var dices = [[1,1,1,5,5,5],[0,0,4,4,4,4],[3,3,3,3,3,3],[2,2,2,2,6,6]];
function nonTransitiveFactory(i){
	return function(){
		var coefficient1 = Math.floor(Math.random() * 6);
		return dices[i][coefficient1];
	}
}
function greenDie(){
	var ff = nonTransitiveFactory(0);
	return ff();
}
var display_p3 = [];
for (var i = 0; i < 10; i++) {
	display_p3[i] = greenDie();
}
console.log(display_p3.join('-'));

function blueDie(){
	var ff = nonTransitiveFactory(1);
	return ff();
}
function yellowDie(){
	var ff = nonTransitiveFactory(2);
	return ff();
}
function orangeDie(){
	var ff = nonTransitiveFactory(3);
	return ff();
}
function rollNTimes(a,b,n){
	var count = 0;
	for (var i = 1; i < n; i++) {
		if(Number(a()) >= Number(b())){
			count++;
	}
	}
	return count;
}
var display_p4 = [];
for (var i = 0; i < 10; i++) {
	display_p4[i] = rollNTimes(greenDie,blueDie,100);
}
// console.log(rollNTimes(greenDie,blueDie,100));
console.log(display_p4.join('-'));


























