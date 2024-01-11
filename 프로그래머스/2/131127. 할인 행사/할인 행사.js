function solution(want, number, discount) {
    var answer = 0;
    const wantMap = want.reduce((acc, cur, idx) => {
        return {...acc, [cur]: number[idx]}
    }, {})
    for (let i = 0; i <= discount.length - 10; i++) {
        const map = {...wantMap}
        for (let j = i; j < i + 10; j++) {
            const item = discount[j]
            if (item in map) {
                map[item]--
                if (map[item] < 0) break
            } else break
        }
        if (Object.values(map).filter(el => el !== 0).length === 0) answer++
    }
    return answer;
}