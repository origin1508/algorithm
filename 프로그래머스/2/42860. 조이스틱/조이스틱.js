function solution(name) {
    let answer = 0;
    let cursor = 0;
    let cursorMove = name.length - 1;
    const result = new Array(name.length).fill("A")
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    while(name[cursorMove] === "A" && cursorMove > 0) cursorMove--
    
    for(let i = 0; i < name.length; i++) {
            answer += Math.min(alphabet.indexOf(name[cursor]), alphabet.length - alphabet.indexOf(name[cursor]))
            result[cursor] = name[cursor]

            let nextCursor = cursor

            while(nextCursor < name.length) {
                if (name[nextCursor] !== result[nextCursor]) {
                    cursorMove = Math.min(cursorMove, cursor * 2 + (name.length - nextCursor), (name.length - nextCursor) * 2 + cursor)
                    cursor = nextCursor
                    break
                }
                nextCursor++
            }

            if (name === result.join("")) break

    }        

    return answer + cursorMove;
}