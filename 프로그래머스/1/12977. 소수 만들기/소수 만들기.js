function isPrime(nums) {
    const prime = new Set()
    for (let i = 1; i <= Math.sqrt(nums); i++) {
        if (nums % i === 0) {
            prime.add(i)
            prime.add(nums / i)
        }
    }
    if (prime.size === 2) return true
    else return false
}

function solution(nums) {
    var answer = 0;
    
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                if (isPrime(nums[i] + nums[j] + nums[k])) answer++
            }
        }
    }

    
    return answer;
}