function solution(today, terms, privacies) {
    var answer = [];
    const now = today.split(".").map((el) => Number(el))
    const nowDays = now[0] * 12 * 28 + now[1] * 28 + now[2]
    terms = terms.reduce((acc, cur) => {
       const [type, date] = cur.split(" ")
       return {...acc, [type]: Number(date)}
    } , {})
    privacies.forEach((el, idx) => {
        const [date, type] = el.split(" ")
        let [year, month, day] = date.split(".").map((it) => Number(it))
        let expiration = year * 12 * 28 + month * 28 + day + terms[type] * 28
        if (nowDays >= expiration) answer.push(idx + 1)
    })
    return answer;
}