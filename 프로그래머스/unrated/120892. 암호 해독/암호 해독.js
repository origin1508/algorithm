function solution(cipher, code) {
    let index = code - 1
    var answer = '';
    while (index < cipher.length) {
        answer += cipher.charAt(index);
        index += code
    }
    return answer;
}