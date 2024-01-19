function solution(numbers, target) {
    let answer = 0;
    const DFS = (total, index) => {       
        if (index === numbers.length) {
            if (total === target) {
                answer++
            }
            return
        }
        
        DFS(total + numbers[index], index + 1)
        DFS(total - numbers[index], index + 1)
    }
    
    DFS(0, 0)
    
    return answer;
}