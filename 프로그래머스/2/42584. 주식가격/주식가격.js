function solution(prices) {
    const answer = new Array(prices.length).fill(null).map((_, i) => i).reverse()
    
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] > prices[j]) {
                answer[i] = j - i
                break
            }
        }
    }


    return answer;
}