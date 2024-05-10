// обработчик, слушатель, подписчик, handler, listener, subscriber => function
// function() вызывает браузер => callback
// {....} => event details => Event => event => ev => e
// new Array(), new Object(), new Event()
// function(Event)


const small = document.getElementById('small');
const medium = document.getElementById('medium');
const big = document.getElementById('big');

function handler(event) {
    event.stopPropagation();
    alert(`yo ${event.currentTarget.id}!!!`);
}

// function handler2(param) {
//     alert(param);
// }

small.addEventListener("click", handler);
medium.addEventListener("click", handler);
big.addEventListener("click", handler);

// small.addEventListener("click", handler2);

const callbackFunction = (event) => {
    event.preventDefault();
    alert("yo aaaa!!");
}

const a = document.getElementById("a");
a.addEventListener("click", callbackFunction);

// a.removeEventListener("click", callbackFunction);



