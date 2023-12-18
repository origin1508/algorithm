function solution(numbers, hand) {
    var answer = '';
    const thumbs = {left: [3, 0], right: [3, 2]}
    
    function pushPad(type, position) {
        switch (type) {
            case "L":
                answer += "L"
                thumbs.left = position
                break
            case "R":
                answer += "R"
                thumbs.right = position
                break
        }
    }
    
    for (let i = 0; i < numbers.length; i++) {
        const key = numbers[i]
        let position = [-1, -1]
        if (key === 0) position = [3, 1]
        else {
            const row = Math.floor((key - 1) / 3)
            const col = (key - 1) % 3
            position = [row, col]
        }
        
        switch (position[1]){
            case 0:
                {
                    pushPad("L", position)
                    break
                }

            case 2:
                {
                    pushPad("R", position)
                    break
                }
            case 1:
                {
                    const leftD = Math.abs(thumbs.left[0] - position[0]) + Math.abs(thumbs.left[1] - position[1])
                    const rightD = Math.abs(thumbs.right[0] - position[0]) + Math.abs(thumbs.right[1] - position[1])
                    if (leftD > rightD) {
                        pushPad("R", position)
                    } else if (leftD < rightD) {
                        pushPad("L", position)
                    } else {
                        if (hand === "right") {
                            pushPad("R", position)
                        } else {
                            pushPad("L", position)
                        }
                    }
                    break
                }
        }
    }
    return answer;
}