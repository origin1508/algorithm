function solution(word) {
    let answer = 0;
    const dictionary = {A: 0, E: 1, I: 2, O: 3, U: 4}
    const numbers = [781, 156, 31, 6, 1]
    
    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        answer += dictionary[char] * numbers[i] + 1
    }
    
    return answer;
}