function solution(before, after) {
    const answer = [...before].sort().join("") === [...after].sort().join("") ? 1 : 0
    return answer;
}