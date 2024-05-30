function solution(s) {
    if (s.length === 1) return 1
    
    let answer = Infinity;
    const maxUnit = Math.floor(s.length / 2);

    for (let unit = 1; unit <= maxUnit; unit++) {
        let index = 0
        let compressedString = ""
        const temp = [];

        while (index < s.length) {
            const cur = s.slice(index, index + unit);
            if (temp.at(-1) && temp.at(-1) !== cur) {
                compressedString += temp.length > 1 ? `${temp.length}${temp[0]}` : temp[0]
                temp.splice(0)
            }
            temp.push(cur)
            
            index += unit
        }
        
        if (temp.length > 0) {
            compressedString += temp.length > 1 ? `${temp.length}${temp[0]}` : temp[0]
        }
        
        answer = Math.min(answer, compressedString.length)
    }
    
    return answer;
}