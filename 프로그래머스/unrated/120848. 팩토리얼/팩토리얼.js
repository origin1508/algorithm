function solution(n) {
    var sum = 1
    let i = 1
    while (true) {
        sum *= (i + 1)
        if (sum > n) break
        i++
    }
    return i;
}