function checkOrder(quantity) {
    if (quantity >= 500) {
        return "생산 가능";
    } else {
        return "생산 불가능";
    }
}

let result = checkOrder(600);

console.log(result);