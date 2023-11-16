function solution(my_string, num1, num2) {
    const left = my_string[num1]
    const right = my_string[num2]
    const myStringArr = [...my_string]
    myStringArr.splice(num1, 1, right)
    myStringArr.splice(num2, 1, left)
    const answer = myStringArr.join("")
    
    return answer;
}