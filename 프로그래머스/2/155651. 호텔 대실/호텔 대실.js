function getTime(time) {
    const [hour, minute] = time.split(":").map(el => Number(el))
    
    return hour * 60 + minute
    
}

function solution(book_time) {
    let room = [];
    
    book_time.sort((a, b) => {
        const timeA = getTime(a[0])
        const timeB = getTime(b[0])
        
        return timeA - timeB
    })
    
    for (let i = 0; i < book_time.length; i++) {
        const book = book_time[i]
        const start = getTime(book[0])
        const end = getTime(book[1])
        
        if (room.length === 0) {
            room.push(end + 10)
        } else {
            let gap = Infinity;
            let index;
            
            room.forEach((r, i) => {
               if(r <= start) {
                   if (gap > r - start) {
                       gap = r - start
                       index = i
                   }
               }
            })
            
            if (index !== undefined) {
                room[index] = end + 10
            } else {
                room.push(end + 10)
            }
        }
    }
    
    return room.length;
}