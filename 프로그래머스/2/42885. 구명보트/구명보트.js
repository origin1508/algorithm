function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b)
    let left = 0;
    let right = people.length - 1
    
    while (left <= right) {
        if (left === right) {
            answer++
            break
        }
        
        if (people[left] + people[right] <= limit) {
            answer++
            left++
            right--
        } else {
            answer++
            right--
        }
    }
    return answer;
}