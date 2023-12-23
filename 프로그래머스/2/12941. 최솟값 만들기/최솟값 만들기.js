function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    var answer = A.reduce((acc, cur, idx) => acc += cur * B[idx] , 0)

    return answer;
}