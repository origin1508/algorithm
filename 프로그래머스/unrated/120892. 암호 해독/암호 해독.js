function solution(cipher, code) {
    return [...cipher].filter((el, i) => (i + 1) % code === 0).join("")
}