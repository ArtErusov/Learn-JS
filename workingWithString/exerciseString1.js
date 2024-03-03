// Вывести имя и фамилию в отдельные переменные
const userName = 'Вася Dworf Степанов';

const userFirstName = userName.slice(0, userName.indexOf(' '));
const userLastName = userName.slice(userName.lastIndexOf(' '), userName.length)

console.log(userFirstName, userLastName)

// проверить является ли это номером телефона России
const num1 = '8(906)300-90-89';

function  phoneNumber(num) {
    // num = num.trim();
    num = num.trim().replace('+7', '8');
    if (!num.startsWith('8')) {
        return false;
    }
    num = num.replace(')', '');
    num = num.replace('(', '');
    num = num.replaceAll(' ', '');
    num = num.replaceAll('-', '');
    if (num.length != 11) {  
           return false;
    }
    let onlyNumber = true;
    for (const char of num) {
        if (isNaN(Number(char))){
            onlyNumber = false;
            break;
        }
    }
    return onlyNumber;
}
console.log(phoneNumber(num1));

// замоскировать номер банковской карты
const numCart = '2200866285768796';

function numCartAbscond(num) {
    num = num.slice(-4);
    num = num.padStart(16, '*');
    return num;
}
console.log(numCartAbscond(numCart));
