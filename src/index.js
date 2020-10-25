module.exports = function check(str, bracketsConfig) {
    let kus = str.length / 2
    do {
        for (let x of bracketsConfig) {
            str = str.replace(x[0] + x[1], '');
        }
        kus--
    } while (kus > 0)
    if (str.length === 0) { return true }
    return false
}
