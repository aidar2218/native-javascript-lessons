// Data types in JavaScript

// 1. string => "", '', ``
// 2. number => number, NaN, Infinity
// 3. undefined => undefined
// 4. null => null
// 5. boolean => true, false

// 6. symbol => Symbol
// 7. bigint => BigInt

// 8. object => object, array, function

// Объекты:
// - составной (комбинированный) тип данных
// - ссылочный тип данных

// const user1 = {name: "Bob"}; // ссылка -> #12
// const user2 = user1; // #12
// user2.name = "Alex";
// console.log(user2.name);

// let arr = [1,2,3,4];
// arr.push(5); -> push() мутирует исходный массив
// console.log(arr);
// console.log(arr.concat(5)); // -> concat() возвращает новый массив
// let newArr = arr.concat(5);

// console.log(arr === newArr);


const users = [
    {id: 1, name: "Alex", isStudent: true},
    {id: 2, name: "Bob", isStudent: true},
    {id: 3, name: "John", isStudent: true},
    {id: 4, name: "Luis", isStudent: true},
];

const newUser = {id: 5, name: "Pablo", isStudent: true};

// CRUD create-read-update-delete

// Create
const copyUser = [...users, newUser];
// console.log(copyUser)

// Update
const updatedUsers = copyUser.map(user => user.id === 2 ? {...user, isStudent: false} : user);
// console.log(updatedUsers === copyUser);

// Delete
const filteredUsers = copyUser.filter(user => user.id !== 3);
// console.log(filteredUsers);


const superUser = {
    "id": 1,
    "name": "Leanne Graham",
    "userName": "Bret",
    "email": "bret@gmail.com",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Amsterdam",
        "zipCode": "5436-9652",
        "geo": {
            "lat": "-25.87466",
            "lng": "47.63945"
        }
    },
    "phone": "556-345-8765",
    "website": "www.google.com",
    "company": {
        "name": "ziba-ziba",
        "catchPhrase": "blabla",
        "bs": "harness real-time e-markets"
    }
};

const superUserCopy = {
    ...superUser,
    company: {
        ...superUser.company,
        catchPhrase: "bahbah",
    }
};

const superUserCopy2 = {
    ...superUser,
    address: {
        ...superUser.address,
        geo: {
            ...superUser.address.geo,
            lng: "84.245343"
        }
    }
}