// You probably know that number 42 is "the answer to life, the universe and everything" according to Douglas Adams'
// "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different...

// In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This
// was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so
// he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this
// day, Freud being the father of psychoanalysis.


function toFreud(string) {
    if (string === "") return "";
    return string.split(" ").map(el => "sex").join(" ");
}

console.log(toFreud("Hello world yo yo!"));