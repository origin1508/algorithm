function solution(p) {
    function divide(s) {
        let index = 0;
        let count = 0;
        while(index < s.length) {
            if (s[index] === "(") count++
            if (s[index] === ")") count--
                    
            if (count === 0) break

            index++
        }
        
        return [s.slice(0, index + 1), s.slice(index + 1)]
    }
    
    function isRight(s) {
        let sum = 0;
        
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(") sum++
            if (s[i] === ")") sum--
            
            if (sum < 0) return false
        }
        
        if (sum === 0) return true
        return false
    }
        

    function transform(s) {
        if (s === "") return ""
        
        const [u, v] = divide(s)
        
        if (isRight(u)) {
            return u + transform(v)
        } else {
            const newU = u.slice(1, u.length - 1).split("").map(it => it === ")" ? "(" : ")").join("")
            return "(" + transform(v) + ")" + newU
        }
    }
    return transform(p);
}