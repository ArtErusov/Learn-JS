// https://code.mu/ru/javascript/tasker/stager/2/1/

//-----------------------часть 1---------------------------
// Сделайте калькулятор, который будет находить площадь и периметр квадрата.
const areaSquare = (side, unit = 'см' ) =>{
    console.log(`Площадь ${side * side} ${unit}:  Периметр ${4 * side} ${unit}. `)
}

// Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.
const areaRectangle  = (sideA, sideB, unit = 'см' ) =>{
    console.log(`Площадь ${sideA * sideB} ${unit}:  Периметр ${2 * (sideA + sideB)} ${unit}. `)
}

// Сделайте калькулятор, который будет находить площадь круга и длину окружности.
const areaCircle = (diameter) =>{
    let area = diameter * diameter / 4 * 3.14 
    let length = (diameter * 3.14).toFixed(1)
    console.log(`Площадь ${area}. Длина окружности ${length}.`)
}

// Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.
const areaTriangle  = (sideA, sideB, sideC ) =>{
    let semiperimeter = (sideA + sideB + sideC) / 2;
    let squareRoot = semiperimeter * ((semiperimeter - sideA) * (semiperimeter - sideC) * (semiperimeter - sideB));
        console.log(`Площадь треугольника ${ Math.sqrt(squareRoot).toFixed(2)}. `)
}






//-----------------------часть 2---------------------------
// Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.

// <input placeholder='Коэффициент a' type="number" id="a" />
//        <input placeholder='Коэффициент b' type="number" id="b" />
//       <input placeholder='Коэффициент c' type="number" id="c" />
//    <button onclick="findRoots()">Найти корни</button>
//    <div id="roots"></div> 
function findRoots() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    let discriminant = Math.pow(b, 2) - (4 * a * c);

    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("roots").textContent = "Корни уравнения: x1 = " + x1 + ", x2 = " + x2;
    } else if (discriminant === 0) {
        let x = -b / (2 * a);
        document.getElementById("roots").textContent = "Уравнение имеет один корень: x = " + x;
    } else {
        document.getElementById("roots").textContent = "Уравнение не имеет действительных корней";
    }
}


// Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных.
//с этой задачей не знаю как точно мне определить среднее число!!!

//        <input placeholder='число a' type="number" id="input1" />
//        <input placeholder='число b' type="number" id="input2" />
//        <input placeholder='число c' type="number" id="input3" />
//        <button class='btn'>проверка чисел</button>
//        <div id="roots"></div>


const buttonPif = document.querySelector('.btn');
buttonPif.addEventListener('click', function () {
  let input1 = parseFloat(document.getElementById("input1").value);
  let input2 = parseFloat(document.getElementById("input2").value);
  let input3 = parseFloat(document.getElementById("input3").value);

  let maxNum = Math.max(input1, input2, input3);

  if (maxNum * maxNum == input1 * input1 + input2 * input2 ||
      maxNum * maxNum == input1 * input1 + input3 * input3 ||
      maxNum * maxNum == input2 * input2 + input3 * input3) {
     document.getElementById("roots").textContent = "Введенные числа являются тройкой Пифагора.";
  } else {
     document.getElementById("roots").textContent = "Введенные числа не являются тройкой Пифагора.";
  }
});


// Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.

// <input type="number" id="numberInput" />
// <button class='btn'>Показать делители</button>
// <ul id="dividersList"></ul> 

const buttonDel = document.querySelector('.btn');
buttonDel.addEventListener('click', function () {
    let number = document.getElementById('numberInput').value;
    let dividersList = document.getElementById('dividersList');
    dividersList.innerHTML = '';
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        let listItem = document.createElement('li');
        listItem.innerText = i;
        dividersList.appendChild(listItem);
      }
    }
  });


// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите список общих делителей этих двух чисел.

// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.

// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наименьшее число, которое делится и на одно, и на второе из введенных чисел.

//-----------------------часть 3---------------------------
// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

//-----------------------часть 4---------------------------
// Выведите в консоль все целые числа от 1 до 100.

// Выведите в консоль все целые числа от -100 до 0.

// Выведите в консоль все целые числа от 100 до 1.

// Выведите в консоль все четные числа из промежутка от 1 до 100.

// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

//-----------------------часть 5---------------------------
// Найдите сумму всех целых чисел от 1 до 100.

// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

// Даны два целых числа. Найдите остаток от деления первого числа на второе.

// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

//-----------------------часть 6---------------------------
// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

// Дан массив с числами. Найдите сумму положительных элементов этого массива.

// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

//-----------------------часть 7---------------------------
// Дана строка:'abcde' Получите массив букв этой строки.

// Дано некоторое число: 12345 Получите массив цифр этого числа.

// Дано некоторое число: 12345 Переверните его: 54321

// Дано некоторое число:12345 Найдите сумму цифр этого числа.

//-----------------------часть 8---------------------------
// Заполните массив целыми числами от 1 до 10.

// Заполните массив четными числами из промежутка от 1 до 100.

// Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34] Округлите эти дроби до одного знака в дробной части.

//-----------------------часть 9---------------------------
// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

//-----------------------часть 10---------------------------
// Заполните массив случайными числами из промежутка от 1 до 100.

// Дано некоторое число:12345 Выведите в консоль все его символы с конца.

// Дан некоторый массив, например, вот такой:[1, 2, 3, 4, 5, 6]По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]  [3, 4]    [5, 6]

// Даны два массива:let arr1 = [1, 2, 3];  let arr2 = [4, 5, 6]; Слейте эти массивы в новый массив:   [1, 2, 3, 4, 5, 6]