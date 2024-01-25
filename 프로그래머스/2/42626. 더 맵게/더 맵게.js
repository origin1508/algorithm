class Heap {
    constructor() {
        this.value = []
    }
    
    swap(idx1, idx2) {
        [this.value[idx1], this.value[idx2]] = [this.value[idx2], this.value[idx1]]
    }
    
    push(el) {
        this.value.push(el)
        this.bubbleUp()
    }
    
    bubbleUp() {
        let idx = this.value.length - 1
        const el = this.value[idx]
        
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2)
            const parent = this.value[parentIdx]
            if (el >= parent) break
            
            this.swap(idx, parentIdx)
            idx= parentIdx
        }
    }
    
    heappop() {
        const min = this.value[0]
        const end = this.value.pop()
        
        if (this.value.length > 0) {
            this.value[0] = end
            this.bubbleDown()
        }
        return min
    }
    
    bubbleDown() {
        let idx = 0;
        const length = this.value.length
        const el = this.value[0]
        while(true) {
            let leftChildIdx = idx * 2 + 1
            let rightChildIdx = idx * 2 + 2
            let leftChild, rightChild
            let swap = null
            
            if (leftChild < length) {
                leftChild = this.value[leftChildIdx];
                if (leftChild < el) {
                    swap = leftChildIdx;
                }
            }
            
            if (rightChild < length) {
                rightChild = this.value[rightChildIdx];
                if (swap === null && rightChild < el || swap !== null && rightChild < leftChild) {
                    swap = rightChildIdx
                }
            }
            
            if (swap === null) break
            this.swap(idx, swap)
            idx = swap;
            console.log(this.value)
        }
    }
    
     mix(k) {
        let min = -Infinity;
        let answer = 0
        let flag = true
        while(min < k) {
            if (this.value.length === 1) {
                flag = false
                break
            }
            const first = this.heappop()
            const second = this.heappop()
            this.push(first + second * 2)
            
            answer++
        }
        return flag ? answer : -1
    }
}

function solution(scoville, K) {
    const minHeap = new Heap()
    scoville.forEach(el => minHeap.push(el))
    console.log(minHeap.heappop())
    const answer = minHeap.mix(K)
    return answer;
}