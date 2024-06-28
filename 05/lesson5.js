// sorting - сортировка

const names = ["Bob", "Alex", "Donald", "Zak"];
// names.sort();
// console.log(names);
// 1. метод sort() сортирует строки "по алфавиту" "из коробки", т.е. без доп. параметров

const names2 = ["Bob", "alex", "bob", "Alex", "Юрий", "игорь", "12"];
names2.sort();
console.log(names2);
// 2. сортирует строки по unicode "из коробки", т.е. без доп. параметров
// цифры
// лат. алфавит (заглавные)
// лат. алфавит (строчные)
// символы других алфавитов (заглавные - строчные)

console.log(names2 === names2.sort());
// 3. работает мутабельно (сортирует массив на месте)
// 4. возвращает ссылку на исходный массив

const sortNames = names.toSorted();
console.log(names);
console.log(sortNames);
console.log(sortNames === names);
// 5. метод toSorted() сортирует иммутабельно

const numbers = [100, 9, 22, 777];
console.log(numbers.sort());
// 6. для остальных случаев необходимо параметром передать функцию сравнения (callback)

// const compareFunction = (a, b) => { // по убыванию
//     // a = 3, b = 5 => (> 0)
//     // a = 7, b = 2 => (< 0)
//
//     if (a >= b) {
//         return -1; // перестановку не выполняем
//     } else {
//         return 1;  // перестановку выполняем
//     }
// };

const compareFunction = (a, b) => b - a; // по убыванию
const compareFunc = (a, b) => a - b; // по возрастанию

console.log(numbers.sort(compareFunction));
console.log(numbers.sort(compareFunc));
// 7. Функция сравнения должна возвращать число большее или меньшее 0


const students = [
    {
        name: "Bob",
        age: 24,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];

console.log(students.sort((a, b) => a.age - b.age));
// 8. Сортировка массива объектов по числовым значениям


console.log(students.sort((a, b) => a.name.localeCompare(b.name)));
// 9. Сортировка массива объектов по строковым значениям

// Bubble sorting

const numbers2 = [23, 88, 56, 34, 67, 99, 12, 76, 71, 33]; // по возрастанию

for (let j = 0; j < numbers2.length - 1; j++) {
    let isSorted = true;
    for (let i = 0; i < numbers2.length - 1 - j; i++) {
        if (numbers2[i] > numbers2[i + 1]) {
            isSorted = false;
            // const temp = numbers2[i];
            // numbers2[i] = numbers[i + 1];
            // numbers2[i + 1] = temp;
            [numbers2[i + 1], numbers2[i]] = [numbers2[i], numbers2[i + 1]];
        }
    }
    if(isSorted)break;
}

console.log(numbers2);

