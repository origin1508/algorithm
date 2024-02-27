function solution(n) {
    const array = new Array(n).fill(0).map((_, idx) => new Array(idx + 1).fill(0))
    const last = n * (n + 1) / 2
    let x = 0, y = 0, num = 1
    let length = n
    
    while(length !== 0) {
        for (let i = 0; i < length; i++) {
            array[x][y] = num++
            x++
        }
        
        x--
        y++
        length--
        if (length === 0) break
        
        for (let i = 0; i < length; i++) {
            array[x][y] = num++
            y++
        }
        
        x--
        y -= 2
        length--
        if (length === 0) break
        
        for (let i = 0; i < length; i++) {
            array[x][y] = num++
            x--
            y--
        }
        
        x += 2
        y++
        length--
    }

    return array.flat();
}