'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    let numPercent = Number(percent)/1200;
    let numContribution = Number(contribution);
    let numAmount = Number(amount)
    const startDate = new Date();
    const endDate = new Date(date);
    let bodyCredit = numAmount - numContribution;
    let quantityOfMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    quantityOfMonths -= startDate.getMonth();
    quantityOfMonths += endDate.getMonth();
    let monthAmount = bodyCredit * (numPercent + numPercent /(((1 + numPercent) ** quantityOfMonths.toFixed()) - 1));
    let totalAmount = monthAmount * quantityOfMonths;
    console.log(numPercent);
    console.log(bodyCredit);
    console.log(quantityOfMonths);
    console.log(monthAmount);
    return(Number(totalAmount.toFixed(2)));
}

function getGreeting(name) {
    let greetings;
    if (name == '' || name == null || name == undefined) {
        name = 'Аноним';
        greetings = `Привет, мир! Меня зовут ${name}`;
        console.log(greetings);
    } else {
        greetings = `Привет, мир! Меня зовут ${name}`;
        console.log(greetings);
    }
    console.log(name);
    return(greetings);
}