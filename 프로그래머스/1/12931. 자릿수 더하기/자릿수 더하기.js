function solution(n)
{
    var answer = 0;
    const nString = n.toString()
    for (let i = 0; i < nString.length; i++) {
        answer += Number(nString[i])
    }

    return answer;
}