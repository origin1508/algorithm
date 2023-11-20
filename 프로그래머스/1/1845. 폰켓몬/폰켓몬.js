function solution(nums) {
    const numsSet = [...new Set(nums)]
    const answer = Math.min(numsSet.length, nums.length / 2)
    return answer;
}