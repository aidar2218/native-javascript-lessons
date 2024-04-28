const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
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
        scores: 100
    },
];

const getNames = (array) => {
    const result = [] // new Array()
    const getName = el => el.name;

    for (let i = 0; i < array.length; i++) {
        result[i] = getName(array[i]);
    }

    return result;
};

console.log(getNames(students));


const getScores = (array) => {
    const result = [];
    const getResult = el => el.scores;
    for (let i = 0; i < array.length; i++) {
        result[i] = getResult(array[i]);
    }
    return result;
};

console.log(getScores(students));

const addScores = (array) => {
    const result = [];
    const getResult = el => ({...el, scores: el.scores + 10 });
    for (let i = 0; i < array.length; i++) {
        result[i] = getResult(array[i]);
    }
    return result;
}

console.log(addScores(students));


const getMappedArray = (array, func) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i]);
    }
    return result;
}

console.log(getMappedArray(students, el => el.name));


const getFilteredArray = (array, func) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            result[result.length] = array[i];
        }
    }
    return result;
}

console.log(getFilteredArray(students, el => el.age >= 21));


const getFoundElement = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            return array[i];
        }
    }
};

const getPushedArray = (array, el) => {
    array[array.length] = el;
    return array.length;
}

const getInclude = (array, el, start = 0) => {
    for (let i = start; i < array.length; i++) {
        if (array[i] === el) {
            return i;
        }
    }
    return -1;
}

const getIndexOf = (array, el, start = 0) => {
    for (let i = start; i < array.length; i++) {
        if (array[i] === el) {
            return true
        }
    }
    return false;
}

function getLength () {
    return `Arrays length is equal ${this.length}`;
}

Array.prototype.getLength = getLength;

console.log([].getLength());
console.log([1,2,3,4,5].getLength());
console.log(students.getLength());