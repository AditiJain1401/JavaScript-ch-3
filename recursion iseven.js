function isEven(number) {
    if (number < 0) {
        console.log("ERROR! Please Insert Positive Whole Number");
    } else if (number == 1) {
        return false;
    } else if (number == 0) {
        return true;
    } else {
        return isEven(number = number - 2);
    }

}
console.log(isEven(10));
console.log(isEven(75));
console.log(isEven(-10));