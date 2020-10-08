var markMass = 54,markHeight = 180;
var johnMass = 51,johnHeight = 172;
var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log("markBMI: " + markBMI, "johnBMI: " + johnBMI + ". ");
var high = (johnBMI > markBMI) ? true : false;
console.log(high);
console.log("Mark的BMI是否比John更高？"+String(high));