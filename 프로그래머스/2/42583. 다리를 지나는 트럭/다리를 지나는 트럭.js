class Queue {
    constructor() {
        this.value = {}
        this.front = 0;
        this.rear = 0;
    }
    
    size() {
        if (this.value[this.rear] === undefined) return 0
        else return this.rear - this.front + 1
    }
    
    weight() {
        return Object.values(this.value).reduce((acc, cur) => acc + cur[1], 0);
    }
    
    enqueue(el) {
        if (this.size() !== 0) {
            this.rear++
            this.value[this.rear] = el
        } else {
            this.value["0"] = el
        }
    }
    
    dequeue() {
        const result = this.value[this.front]
        delete this.value[this.front]
        
        if (this.front === this.rear) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.front++
        }
        
        return result
    }
}

function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const bridge = new Queue();
    truck_weights.reverse()
    
    while (truck_weights.length > 0 || bridge.size() > 0) {
        let truck
        
        if (truck_weights.length > 0) {
            truck = truck_weights.pop();
           while (bridge.size() + 1 > bridge_length || bridge.weight() + truck > weight) {
               const enterTime = bridge.dequeue()[0];
               if (time - enterTime < bridge_length) {
                time += bridge_length - (time - enterTime)
               }
           }
            bridge.enqueue([time, truck])
            time++
        } else {
            time += bridge_length
            break
        }
    }
    

    
    return time;
}