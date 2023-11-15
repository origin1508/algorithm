function solution(s1, s2) {
    const obj = {}
    s1.concat(s2).forEach(el => el in obj ? obj[el] += 1 : obj[el] = 1)
    return Object.values(obj).filter(value => value === 2).length
}