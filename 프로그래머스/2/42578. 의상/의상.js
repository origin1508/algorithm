function solution(clothes) {
  var answer = 0;
  const clothesMap = clothes.reduce((acc, cur) => {
      const [_, type] = cur
      return type in acc ? {...acc, [type]: acc[type] + 1} : {...acc, [type]: 1}
  }, {})
  
  answer = Object.values(clothesMap).reduce((acc, cur) => acc*(cur+1), 1)
  return answer - 1;
}