class Node{
    constructor(target, intensity) {
        this.target = target
        this.intensity = intensity
    }
}

class PriorityQueue{
    constructor() {
        this.values = [];
    }
    
    swap(idx1, idx2) {
        [this.values[idx1], this.values[idx2]] = [this.values[idx2], this.values[idx1]]
    }
    
    size() {
        return this.values.length
    }
    
    enqueue(target, intensity) {
        const newNode = new Node(target, intensity)
        this.values.push(newNode)
        this.bubbleUp()
    }
    
    dequeue() {
        const min = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.bubbleDown()
        }
        return min
    }
    
    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]
        
        while(idx !== 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if (element.intensity >= parent.intensity) break
            this.swap(idx, parentIdx)
            idx = parentIdx
        }
    }
    
    bubbleDown() {
        let idx = 0;
        const element = this.values[0]
        
        while(true) {
            let swapIdx;
            let leftChildIdx = idx * 2 + 1
            let rightChildIdx = idx * 2 + 2
            const leftChild = this.values[leftChildIdx]
            const rightChild = this.values[rightChildIdx]
            
            if (leftChild && leftChild.intensity < element.intensity) swapIdx = leftChildIdx
            if (rightChild) {
                if ((rightChild.intensity < element.intensity) ||
                    (swapIdx && rightChild.intensity < leftChild.intensity)) swapIdx = rightChildIdx;
            }
            
            
            if (!swapIdx) break;
            this.swap(idx, swapIdx)
            idx = swapIdx
        }
    }
}

function solution(n, paths, gates, summits) {
    let pq = new PriorityQueue()
    const graph = new Array(n + 1).fill(0).map(_ => []);
    paths.forEach((path) => {
        const [start, end, intensity] = path;
        graph[start].push([end, intensity])
        graph[end].push([start, intensity])
    })
    summits.sort()
    const summitsSet = new Set(summits)
    const intensities = new Array(n + 1).fill(Infinity)
    
    gates.forEach(gate => {
        pq.enqueue(gate, 0)
        intensities[gate] = 0
    }) 
    
    while (pq.size() > 0) {
        const {target, intensity} = pq.dequeue()
        for (let i = 0; i < graph[target].length; i++) {
            const [next, nextIntensity] = graph[target][i]
            const maxIntensity = Math.max(nextIntensity, intensity)
            if (intensities[next] > maxIntensity) {
                intensities[next] = maxIntensity
                if (summitsSet.has(next)) continue
                pq.enqueue(next, maxIntensity)
            }
            
        }
    }
    
    
    
    return intensities.map((v, i) => [i, v]).sort((a, b) => a[1] - b[1]).filter((el) => summitsSet.has(el[0]))[0]
}