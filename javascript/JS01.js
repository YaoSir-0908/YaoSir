var userInput01 = parseInt(prompt("请输入一个数字"));
var userInput02 = parseInt(prompt("请输入另一个数字"));
var userInput03 = parseInt(prompt("请输入最后一个数字"));
if (isNaN(userInput01) === false && isNaN(userInput02) === false && isNaN(userInput03) ===false) {
			alert("前两次输入的数字加和减去最后一个数字" + (userInput01 + userInput02 - userInput03));
}