function solution(dots) {
    var answer = 0;
    for (let i = 1; i < dots.length; i++) {
        const remain = dots.slice(1, i).concat(dots.slice(i + 1))
        const gradient1 = (dots[0][1] - dots[i][1]) / (dots[0][0] - dots[i][0])
        const gradient2 = (remain[0][1] - remain[1][1]) / (remain[0][0] - remain[1][0])
        
        if (gradient1 === gradient2) {
            answer = 1;
            break
        }
    }
   
    return answer;
}