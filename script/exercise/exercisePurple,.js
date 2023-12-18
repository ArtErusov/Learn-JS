// Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
// К вам приходит заказчик и предлагает заказ на 40 часов работы.
// Сейчас понедельник.  Вы должны уехать через 11 дней.
// Выведете в консоль: - Успеете ли вы взяться за работу? - Сколько вы за неё попросите? 
const rate = 80;
const projectHours = 40;
const hours = (11 - 2) * 5;
console.log(hours >= projectHours ? `готов взяться за ${rate * projectHours} $`  : 'nope');

// Вы положили 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
// выведете в консоль: - сможете ли вы купить дом за 13 500$ - Остаток после покупки.
const deposit = 12000;
const housePrice = 13500;
const profit = (deposit * (1 + 0.07/12) ** 24).toFixed(0);
console.log(profit >= housePrice ? `Смогу купить, остаток - ${profit - housePrice} $`  : 'не смогу =(');

// Пользователь хочет купить игру. Он может это сделать если:
// -его баланс больше 1000 или число бонусов больше 100
// -он не забанен -инра не куплена -игра в продаже
// Написать условие для покупки и вывести результат

const balance = 365;
const bonusbalance = 119;
const isBanned = false;
const isExist = false;
const isSelling = true;
const result = !isBanned && !isExist && isSelling && balance >= 1000 || bonusbalance >= 100;

console.log(result ? 'Вы можете купить Игру!' : 'Вы не можете купить=(')


