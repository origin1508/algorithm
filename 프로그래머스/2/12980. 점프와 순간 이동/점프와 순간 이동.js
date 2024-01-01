function solution(n)
{
    let ans = 0;
    let target = n
    while (n > 0) {
        if (n % 2 === 0) {
            n /= 2
        } else {
            n--
            ans++
        }
    }

    return ans;
}