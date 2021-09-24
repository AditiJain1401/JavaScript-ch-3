function countBs(string) {
    var count = 0;
    l = string.length
    for (var n = 0; n < l; n = n + 1) {
        if (string[n] == "B") {
            count = count + 1;
        }
    }
    return count;
}


console.log(countBs("CBA"));