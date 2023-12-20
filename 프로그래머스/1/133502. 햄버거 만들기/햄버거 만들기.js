function solution(ingredient) {
    const hamburger = []
    var answer = 0;
    for (let i = 0; i < ingredient.length; i++) {
        hamburger.push(ingredient[i])
        
        if (hamburger.length >= 4) {
            if (hamburger.slice(hamburger.length - 4).join("") === "1231") {
                hamburger.splice(hamburger.length - 4, 4)
                answer++
            }
        }
    }
    
    return answer;
}