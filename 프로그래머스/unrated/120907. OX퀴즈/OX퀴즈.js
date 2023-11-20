function solution(quiz) {
  var answer = quiz.map(el => {
      let result
      const [left, right] = el.split(" = ")
      const [value1, operator, value2] = left.split(" ");
      if (operator === "+") result = Number(value1) + Number(value2)
      if (operator === "-") result = Number(value1) - Number(value2)
      return result === Number(right) ? "O" : "X"
    
  })
  return answer;
}