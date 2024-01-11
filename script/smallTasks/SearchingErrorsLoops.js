// Код должен вывести числа от 0 до 10:

// for (let i = 0; i > 10; i++) {
// 	console.log(i);
// }


// Код должен вывести числа от 10 до 0:

// for (let i = 10; i > 0; i++) {
// 	console.log(i);
// }

// Код должен вывести числа от 10 до 0:

// for (let i = 10; i == 0; i--) {
// 	console.log(i);
// }

// Код должен вывести числа от 0 до 10:

// let i = 0;

// while (i >= 10) {
// 	console.log(i);
// 	i++;
// }

// Код должен найти сумму целых чисел от 1 до 10:

// let res;

// for (let i = 1; i <= 10; i++) {
// 	res += i;
// }

// console.log(res);


// Код должен найти произведение целых чисел от 1 до 10:

// let res = 0;

// for (let i = 1; i <= 10; i++) {
// 	res *= i;
// }

// console.log(res);

// Код должен найти сумму элементов массива:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum += elem;
// }

// console.log(sum); // должно вывести 15


// Код должен найти сумму элементов массива:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = '';

// for (let elem of arr) {
// 	sum += +elem;
// }

// console.log(sum); // должно вывести 15


// Код должен найти сумму элементов массива:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum = +elem;
// }

// console.log(sum); // должно вывести 15


// Код должен найти сумму элементов массива, однако, всегда выводит NaN:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i <= arr.length; i++) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит NaN

// Код должен найти сумму элементов массива:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i < arr.length - 1; i++) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит не 15

// Код должен найти сумму элементов массива:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
// 	sum += +i;
// }

// console.log(sum); // почему-то выводит не 15

// Код должен возвести в квадрат каждый элемент массива:

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	elem = elem ** 2;
// }

// console.log(arr);

// Код должен заполнить массив числами от 1 до 5:

// let arr;

// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }

// console.log(arr);


// Код должен найти сумму элементов объекта:

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;

// for (let elem in obj) {
// 	sum += elem;
// }

// console.log(sum);

// Код должен найти сумму элементов объекта:

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;

// for (let key in obj) {
// 	sum = +obj.key;
// }

// console.log(sum);

// Код должен проверить, есть ли в массиве число 3 или нет:

// let arr = [1, 2, 3, 4, 5];
// let res = '';

// for (let elem of arr) {
// 	if (elem === 3) {
// 		res = '+++';
// 	} else {
// 		res = '---';
// 	}
// }

// console.log(res);

// Код должен заполнить массив числами от 1 до 5:

// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }

// console.log(arr);


// Код должен проверить, есть ли в массиве число 3 или нет:

// let arr = [1, 2, 3, 4, 5];
// let res = false;

// for (let elem of arr) {
// 	if (elem === 3) {
// 		let res = true;
// 		break;
// 	}
// }

// console.log(res);

// Код должен вывести только четные элементы из массива:

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	if (elem % 2 = 0) {
// 		console.log(elem);
// 	}
// }

// Код должен записать в новый массив только нечетные элементы старого массива:

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let elem of arr) {
// 	if (elem % 2 != 0) {
// 		res.push(elem);
// 	}
// }

// console.log(res);

