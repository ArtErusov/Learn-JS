//   Отсортировать пользователей по возрасту
const userSortAge = [
    {name: "Катя", age: 28},
    {name: "Егор", age: 31},
    {name: "Андрей", age: 19},
    {name: "Саша", age: 53},
    {name: "Вадим", age: 23},
    {name: "Максим", age: 18},
];

userSortAge.sort((a, b) => b.age - a.age);

console.log(userSortAge)

// преобразовать пользователей к виду { fullName: 'Екатерина Егорова', skillNum 2}

const userTransformation = [
    {
        name: 'Екатерина',
        surname: 'Егорова',
        age: 31,
        skills: ['Разработка', 'DevOps']
    },
    {
        name: 'Алексей',
        surname: 'Марков',
        age: 41,
        skills: ['Финансы', 'Музыка', 'Книги']
    },
];

const userHandler = userTransformation.map(user => {
    return{
        fullName: `${user.name} ${user.surname}`,
        skillNum: user.skills.length
        };
    });

console.log(userHandler)