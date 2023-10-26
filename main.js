let points = 0;
let firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, fifthAnswer;

let firstQuestion = +prompt("Скільки буде 2+2?"),
    secondQuestion = confirm("Сонце встає на сході?"),
    thirdQuestion = prompt("Скільки буде 5 / 0?"),
    fourthQuestion = prompt("Якого кольору небо?"),
    fifthQuestion = +prompt("Яка правильна відповідь на головне питання життя, всесвіту та всього такого.");

if (firstQuestion == 4) {
    points += 10;
    firstAnswer = `Так, 2 + 2 = ${firstQuestion}. + 10 балів.`;
}
else {
    firstAnswer = `Ні, 2 + 2 це не ${firstQuestion}.`;
}
if (secondQuestion == true) {
    points += 10;
    secondAnswer = "Так. Сонце сходить на сході, та заходить на заході. + 10 балів.";
}
else {
    secondAnswer = "Ні, сонце таки встає на сході.";
}
if (thirdQuestion == "не скільки") {
    points += 10;
    thirdAnswer = "Так. На нуль ділити не можна!. + 10 балів.";
}
else {
    thirdAnswer = "Ні, на нуль ділити не можна!";
}
if (fourthQuestion == "блакитного") {
    points += 10;
    fourthAnswer = `Так. Безхмарні денні небеса ${fourthQuestion} кольору. + 10 балів.`;
}
else if (fourthQuestion == null) {
    fourthQuestion == "null";
    fourthAnswer = `Ні, небо не може бути ${fourthQuestion} кольору`;
}
else {
    fourthAnswer = `Ні, небо не може бути ${fourthQuestion} кольору`;
    // console.log(fourthQuestion);
}
if (fifthQuestion == 42) {
    points += 10;
    fifthAnswer = `Так. це число ${fifthQuestion}. + 10 балів.`;
}
else {
    fifthAnswer = 'Ні, це не правильная відповідь.';
}

alert(`
${firstAnswer}
${secondAnswer}
${thirdAnswer}
${fourthAnswer}
${fifthAnswer}
-------------------------------------------------------------------------------
Ви набрали: ${points} балів.`)