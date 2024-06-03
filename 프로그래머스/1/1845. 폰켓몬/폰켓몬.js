function solution(nums) {
    let answer = Math.min(new Set(nums).size, nums.length / 2);
    return answer
}