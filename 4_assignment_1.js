 var forSquare= function(value){
    console.log(value * value);
 }
 console.log("Squre of 5:",);
 forSquare(5);

 console.log("Squre of 6:",);
 forSquare(6);

 console.log("Squre of 25:",);
 forSquare(25);

 console.log("Squre of 100:",);
 forSquare(100);

 console.log("function type is:",typeof forSquare);
 console.log("=================================================================");


 var triangle = function(factor,base,height){
    console.log(factor*base*height);
 }

 console.log("Area of triangle: ");
 triangle(8,5,45,34)

 var rectArea = function(length,width){
    console.log(length*width);
 }

console.log("Area of Reactangle: ");
rectArea(499,917);

console.log("=====================================================")
var swapValue=function(value1,value2){
    console.log("Befor swapping: ");
    console.log(value1,value2);
    console.log("After Swapping: ");
    var temp=value1
    value1=value2
    value2=temp
    console.log(value1,value2);
}

swapValue("Virat","Anushka");
swapValue("1000","2000");

console.log("===========================================================================================")
var forString="JavaScript the most popular Language"
console.log(forString);

var count =forString.length;
console.log("Total character in above line: ",count);

var indexChar=forString.indexOf("S");
console.log("index of character 's' in above line: ",indexChar);
var indexLang=forString.indexOf("lang");
console.log("Index of String 'lang' in above line: ",indexLang);
var lastChar=forString.charAt(forString.length-1);
console.log("Last character in above line : ",lastChar);
var lastChar=forString