function solution(my_string) {
    const answer = [...my_string].map((str) => str === str.toLowerCase() ? str.toUpperCase() : str.toLowerCase()).join("")
    return answer;
}