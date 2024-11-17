
let calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    diff: function (num1, num2) {
        return Math.abs(num1-num2);
    }
};
console.log(calculator.add(10, 20));
console.log(calculator.diff(10, 20));



