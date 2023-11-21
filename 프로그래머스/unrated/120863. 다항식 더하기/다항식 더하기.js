function solution(polynomial) {
    const coefficient = polynomial.split(" + ").reduce((acc, cur) => {
        if (cur.includes("x")) acc[0] = acc[0] + (Number(cur.replace(/x/, "")) || 1)
        else acc[1] = acc[1] + Number(cur)
        
        return acc
    }, [0, 0])
    const answer = coefficient.map((el, index) => el === 0 ? null : index === 0 ? (el === 1 ? "" : el) + "x" : el + "").filter(el => el).join(" + ")
    return answer
}