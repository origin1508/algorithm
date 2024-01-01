class Stack {
    constructor() {
        this.value = []
        this.length = 0
    }

    push(value) {
        if (this.length === 0) {
            this.value.push(value)
            this.length++
        } else {
            
            if (this.value[this.length - 1] === value) {
                this.value.pop()
                this.length--
            } else {
                this.value.push(value)
                this.length++
            }
        }
    }
}

function solution(s){
    const stack = new Stack()
    s.split("").forEach(item => stack.push(item))

    return stack.length === 0 ? 1 : 0;
}