// 第一题
// var userInput = parseInt(prompt("请输入一个数字"));
// if (!isNaN(userInput) ) {
// 	if (userInput % 5 == 0 && userInput % 6 ==0) {
// 		alert("这个数字同时能被5和6 整除");
// 	}else if ( userInput % 5 ==0 && userInput % 6 !=0) {
// 		alert("这个数字能被5整除，但是不能被6 整除");
// 	}else if (userInput % 5 !=0 && userInput % 6 ==0 ) {
// 		alert("这个数字能被6整除，但是不能被5整除");
// 	}else if (userInput % 5 !=0 && userInput % 6 !=0) {
// 		alert("这个数不能被5整除，也不能被6整除");
// 	}
// }

// 第二题
// var userInput = parseInt(prompt("请输入一个数字"));
// var userInput02 = parseInt(prompt("请再输入一个数字"));
// if (!isNaN(userInput) && !isNaN(userInput02)) {
// 		if (userInput % 2 == 0 && userInput02 % 2 == 0 || userInput % 3 == 0 && userInput02 % 3 == 0) {
// 			alert("你好，这两个数字就像相同");
// 		} else {
// 			alert("你好，这两个数字其奇数不同");
// 		}
// 	} else {
// 
// }

// 第三题
// var userInput = parseInt(prompt("请输入一个年份"));
// if (!isNaN(userInput)) {
// 	if ( userInput % 100 == 0) {
// 		if (userInput % 400 == 0) {
// 			alert("闰年");
// 		}else{
// 			alert("不是闰年");
// 		}
// 	}else if (userInput % 4 ==0) {
// 	alert("闰年");
// }else{
// 	alert("这不是闰年");
// }
// }

//第四题
var userInput = parseInt(prompt("请输入你的工龄"));
var userInput02 = parseInt(prompt("请输入你的工资"));
if (!isNaN(userInput) && !isNaN(userInput02)) {
	if (userInput == 0) {
	if (userInput02 >= 8000) {
		alert("你的年终奖是" + (userInput * 1.2));
	} else {
		alert((userInput02 * 1));
	}
} else if (userInput == 1) {
	if (userInput02 >= 10000) {
		alert("你的年终奖是" + (userInput02 * 1.7));
	} else {
		alert("你的年终奖是"+(userInput02 * 1.5));
	}
} else if (userInput >= 2) {
	if (userInput02 >= 12000) {
		alert("你的年中奖是" + (userInput02 * 3));
	} else {
		alert("你的年终奖是" + (userInput02 * 3.2));
	}
}
} else {
	alert("请重新输入");
}
