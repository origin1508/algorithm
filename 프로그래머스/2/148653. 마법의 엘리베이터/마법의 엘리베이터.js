function solution(storey) {
    let answer = 0;
    
    while (storey > 0) {
        const remain = storey % 10;
        
        if (remain > 5) {
            answer += 10 - remain
            storey += 10 - remain
        } else if (remain < 5) {
            answer += remain
            storey -= remain
        } else {
            answer += remain
            if (storey % 100 > 50) {
                storey += remain
            } else {
                storey -= remain
            }
        }
        
        storey /= 10
    }
    
    return answer;
}