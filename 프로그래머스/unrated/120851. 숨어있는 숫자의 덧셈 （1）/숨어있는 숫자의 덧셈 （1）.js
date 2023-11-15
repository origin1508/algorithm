function solution(my_string) {
    const replacedStr = my_string.replace(/[a-zA-Z]/g, "")
    const answer = [...replacedStr].reduce((acc, cur) => acc + Number(cur), 0)
    
    return answer
}