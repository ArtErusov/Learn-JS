// Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
// К вам приходит заказчик и предлагает заказ на 40 часов работы.
// Сейчас понедельник.  Вы должны уехать через 11 дней.
// Выведете в консоль: - Успеете ли вы взяться за работу? - Сколько вы за неё попросите? 
const rate = 80;
const projectHours = 40;
const hours = (11 - 2) * 5;
console.log(hours >= projectHours ? `готов взяться за ${rate * projectHours} $`  : 'nope');
//-----------------------------------------------------------------------------------------
// Вы положили 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
// выведете в консоль: - сможете ли вы купить дом за 13 500$ - Остаток после покупки.
const deposit = 12000;
const housePrice = 13500;
const profit = (deposit * (1 + 0.07/12) ** 24).toFixed(0);
console.log(profit >= housePrice ? `Смогу купить, остаток - ${profit - housePrice} $`  : 'не смогу =(');
//-----------------------------------------------------------------------------------------
// Пользователь хочет купить игру. Он может это сделать если:
// -его баланс больше 1000 или число бонусов больше 100
// -он не забанен -инра не куплена -игра в продаже
// Написать условие для покупки и вывести результат
const buyGame = {
    balance: 365,
    bonusbalance: 119,
    isBanned: false,
    isExist: false,
    isSelling: true   
};
const result = !buyGame.isBanned && !buyGame.isExist && buyGame.isSelling && buyGame.balance >= 1000 || buyGame.bonusbalance >= 100;
console.log(result ? 'Вы можете купить Игру!' : 'Вы не можете купить=(')
//-----------------------------------------------------------------------------------------
//Пользователь: - Возраст - Наличие работы - Деньги
//Нужно проверить может ли он купить новый MacBook за 2000$?
//Он может брать не только свои деньги, но и взять кредит.
//Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае.
//Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false;
function buyingLaptop(age, money, work = false){
if (money >= 2000) {
	    return ('Можно покупать: true');
} else if (age >= 24 && (money + 100 >= 2000) ) {
        return ('бери в кредит 100$ true');
} else if (age >= 24 && work && (money + 500 >= 2000) ) {
        return ('бери в кредит 500$ true');
} else return ('Вы не можете купить false');
};
// аналогично с использованием switch
function buyingLaptopSwitch(age, money, work = false){
    switch(true) {
        case money >= 2000:
            return ('Можно покупать: true');
        case age >= 24 && (money + 100 >= 2000):
            return ('бери в кредит 100$ true');
        case age >= 24 && work && (money + 500 >= 2000): 
            return ('бери в кредит 500$ true');
        default:
            return ('Вы не можете купить false');
    };
};
console.log(buyingLaptop(23, 1950))
console.log(buyingLaptopSwitch(25, 1950, ))
//-----------------------------------------------------------------------------------------
// дан список задач, сделать функции :
//-Добавление задачи в конец -удаление задачи по названию -Перенос задачи в начало списка по названию
const tasks = ['Задача 1', 'Задача 2', 'Задача 3' ]

function addTasks(array, add = 'Новая задача'){
array.push(add)
};

function delTasks(array, item){
    const index = array.indexOf(item);
    if(index !== -1){
        array.splice(index, 1);  
    };
};

function transferTasks(array, item){
    const index = array.indexOf(item);
    if (index !== -1) { 
    const oldItem = array[index];
    array.splice(index, 1);
    array.unshift(oldItem); 
    };
};

//-----------------------------------------------------------------------------------------
// дан url https://purpleschool.ru/profession/frontend
// Нужно сделать функцию которая выводит в консоль -протокол -доменное имя -путь внутри сайта
const urlPurple = 'https://purpleschool.ru/profession/frontend';

function getUrl(url) {
    const data = url.split('/');
    if(data[0] === 'https:' || data[0] === 'http:') {
        console.log(`Протокол: ${data[0]}`);
        console.log(`Доменное имя: ${data[2]}`);
        dataMod = data.slice(3, data.length);
        console.log(`Путь внутри сайта: /${dataMod.join('/')}`);   
    };   
};

getUrl(urlPurple);

//-----------------------------циклы------------------------------------------------------------
// Вывести в консоль 'Я люблю JS !' проходя циклом в обратном порядке не используя reverse
const arrLove = ['!', 'JS', 'люблю', 'Я'];
const arrLoveNew = [];

  for(let i = arrLove.length - 1; i >= 0; i--){
	arrLoveNew.push(arrLove[i]);  
};

console.log(arrLoveNew.join(' '));

//-----------------------------циклы------------------------------------------------------------
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

//-----------------------------циклы------------------------------------------------------------
// Имеется массив изменения цен, где внутри 1й элемент является ценой в момент x 
// 2й ценой в момент Y. нужно преобразовать данные где будут отображены только положительные изменения цен
const pricesTwo = [[100, 220], [120, 100], [200, 360]];

const resultPrices = pricesTwo
    .map(item =>item[1] - item[0])
    .filter(pricesTwo => pricesTwo > 0);
console.log(resultPrices)


//----------------------------------------------------------------------------------
// Найти среднее значение последовательности с помощью reduce\
const arrB = [2, 4, 4, 12];

const avg = arrB.reduce((acc, el, i) =>{
    if (i != arrB.length -1) {
        return acc + el;
    } else {
        return (acc + el) / arrB.length
    }
}, 0);