// let lexicalEnvironment = {
//     environmentRecords: {
//
//     },
//     outer: {LE || null}
// }

//globalLE {car: 'bmw', startEngine: Func} -> null

let car = 'bmw'


const startEngine = function() {
    //let car = 'audi'
    //startEngineLE {} -> globalLE
    console.log(car)
    function fn() {
        //fnLE{model: 123} -> startEngine
        const model = 123
        console.log(`car = ${car} model = ${model}`)
    }
    //-----
    fn() //
}

startEngine()

car = 'ferari'// globalLE {car: 'ferari'} -> null

const obj = {

};

const obj2 = obj;

// const foo = () => { //globalLE {car: 'bmw', startEngine: func, foo: func} -> null
//     //fooLE {car: 'kia'} -> GlobalLE
//     let car = 'kia'
// }
//
// foo()

//-----------

let count = 0;
const counterCreator = (arg) => {
    // counterCreator1LE {, arg: func} ->  globalLE
    // counterCreator2LE {} ->  globalLE
    //let count = 0

    return () => {
        //let count = 0
        //LE {count: 0} -> counterCreatorLE
        console.log(++count)
    }
}

const counter1 = counterCreator() //globalLE {counter1: func} -> null
const counter2 = counterCreator(); //globalLE {counter2: func} -> null

// counter1()
// counter1()
// counter1()
//
// counter2()
// counter2()
// counter2()

//{name: string, age: number, adresses: [{city: {}}]}

//errors: {constraint: {field: name, message: string, children: {}}

//LIFO

const c = () => {
    return
}
const b = () => {
    c()
}
const a = () => {
    b()
}

const body = {
    name: String,
    age: Number,
    addresses: [{
        city: {
            postalCode: String,
        }
    }]
}

//globalLE {pow: func}
const pow = (x, n) => {
    //powLE {x, n}
    if (n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}

pow(2, 4)
// 2(4) === 2 * 2(3) === 2 * 2 * 2(2) === 2 * 2 * 2 * 2(1)

//-----------
const sqe = (num) => {
    //very hard calculate
    return num * 2
}

const memoize = function (fn) {
    let cache = {}

    return (arg) => {
        if(cache[arg]) {
            console.log(cache);
            return cache[arg]
        }

        const result = fn(arg)
        cache[arg] = result

        return result
    }
}

 memoizedSqr = memoize(sqe);

 console.log(memoizedSqr(5)) //новое вычисление
 console.log(memoizedSqr(5)) //из кэша
 console.log(memoizedSqr(6)) //новое вычисление

//------------------

const nestedObject = {
    name: "Alice",
    details: {
        age: 25,
        address: {
            city: "Wonderland",
            zip: 12345,
        },
    },
    hobbies: ["reading", "chess"],
    otherDetails: {
        address: {
            city: "Nowhere",
            zip: 67890,
        },
    },
};

 const findKeyValues = function (obj, keyToFind, result = []) {
     for (let key in obj) {
        if(typeof obj[key] === 'object') {
            findKeyValues(obj[key], keyToFind, result);
        } else if (key === keyToFind) {
            result.push(obj[key]);
        }
     }

     return result
 }

// Вывод: ["Wonderland", "Nowhere"]
 const cities = findKeyValues(nestedObject, "city");
 console.log(cities);
