function solution(files) {
    var answer = [];
    const makePart = (file) => {
//         const fileLower = file.toLowerCase()
//         let head = ""
//         let number = ""
//         let findHead = false
//         for (let i = 0; i < fileLower.length; i++) {
//             const char = fileLower[i]
//             if (findHead && isNaN(char)) break
            
//             if (isNaN(char) || char === " ") {
//                 head += char
//             } else {
//                 findHead = true
//                 number += char
//             }
//         }
        const re = new RegExp(/(\D+)(\d+)/)
        const matchedFile = file.match(re)
        
        const head = matchedFile[1].toLowerCase()
        const number = Number(matchedFile[2])

        return [head, Number(number)]
    }
    
    files.sort((a, b) => {
        const [headA, numberA] = makePart(a)
        const [headB, numberB] = makePart(b)
        
        if (headA > headB) return 1
        else if (headA < headB) return -1
        else return numberA - numberB
    })
    
    return files;
}