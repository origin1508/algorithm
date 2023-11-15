function solution(my_string) {
    const re = new RegExp(/[aeiou]/, "g")
    const answer = my_string.replace(re, "")
    return answer;
}