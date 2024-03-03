
// Вывести в консоль 'Я люблю JS !' проходя циклом в обратном порядке не используя reverse
const arrLove = ['!', 'JS', 'люблю', 'Я'];
const arrLoveNew = [];

  for(let i = arrLove.length - 1; i >= 0; i--){
	arrLoveNew.push(arrLove[i]);  
};

console.log(arrLoveNew.join(' '));

// Есть выгрузка операций пользователя а так-же начальный баланс 100
// Необходимо сделать расчёт: - Итогового баланса -Наличие отрицательного баланса
const operations = [1000, -700, 300, -500, 10000];
const startBalance = 100;

function getBalance(arr, balance) {
    let newBalance = balance;
    for (const element of arr){
        newBalance += element; 
    }
}

function correctBalance(arr, balance){
    let newBalance = balance;
    let isOk = true;
    for (const element of arr){
        newBalance += element; 
        if (newBalance < 0) {
            isOk = false;
            break;
        };
    };
    return isOk;   
}

function getBalance(arr, balance) {
    let newBalance = balance;
    for (const element of arr){
        newBalance += element; 
    }
}

// Имеется массив изменения цен, где внутри 1й элемент является ценой в момент x 
// 2й ценой в момент Y. нужно преобразовать данные где будут отображены только положительные изменения цен
const pricesTwo = [[100, 220], [120, 100], [200, 360]];

const resultPrices = pricesTwo
    .map(item =>item[1] - item[0])
    .filter(pricesTwo => pricesTwo > 0);
console.log(resultPrices)
