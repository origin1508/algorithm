class Heap {
    constructor() {
        this.value = []
        this.size = 0;
    }
    
    swap(idx1, idx2) {
        [this.value[idx1], this.value[idx2]] = [this.value[idx2], this.value[idx1]]
    }
    
    heappush(item) {
        this.value.push(item)
        this.size++
        this.bubbleUp()
    }
    
    bubbleUp() {
        let idx = this.value.length - 1
        const element = this.value[idx]
        
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.value[parentIdx]
            
            if (element >= parent) break
            this.swap(idx, parentIdx)
            idx = parentIdx
        }
    }
    
    heappop() {
        if (this.value.length === 1) {
            return this.value.pop()
        }
        
        const min = this.value[0];
        const end = this.value.pop();
        this.value[0] = end;
        this.bubbleDown();
        this.size--
        return min
    }
    
    bubbleDown() {
        let idx = 0;
        const element = this.value[0]
        
        while(true) {
            let swapIdx = null;
            let leftChildIdx = (idx * 2) + 1;
            let rightChildIdx = (idx * 2) + 2;
            let leftChild;
            let rightChild;

            if (leftChildIdx < this.size) {
                leftChild = this.value[leftChildIdx]
                if (leftChild < element) {
                    swapIdx = leftChildIdx
                }
            }
            
            if (rightChildIdx < this.size) {
                rightChild = this.value[rightChildIdx]
                if ((swapIdx === null && rightChild < element) || (swapIdx && rightChild < leftChild)) {
                    swapIdx = rightChildIdx
                }
            }

            if (swapIdx === null) break
 
            this.swap(idx, swapIdx);
            idx = swapIdx
        }
    }
}

function solution(n, k, enemy) {
    let answer = 0;
    const heap = new Heap();
    
    for (let i = 0; i < enemy.length; i++) {
        let attack = enemy[i];
        
        if (heap.size < k) {
            heap.heappush(attack)
        } else {
            if (heap.value[0] < attack) {
                heap.heappush(attack)
                attack = heap.heappop();
            }
            
            n -= attack
            
            if (n < 0) break
        }
        
        answer++
    }
    
    return answer;
}