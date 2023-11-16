function solution(n)
{
    var answer = [...n.toString()].reduce((acc, cur) => acc += Number(cur), 0)
    return answer;
}