function solution(s){
    var answer = true;
    let open = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            open++
        } else {
            open--
            if (open < 0) {
                answer = false;
                break
            }
        }
    }
    if (open > 0) answer = false

    return answer;
}