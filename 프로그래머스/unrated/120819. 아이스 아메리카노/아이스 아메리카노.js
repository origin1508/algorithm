function solution(money) {
    const cups = Math.floor(money / 5500)
    const changes = money % 5500
    return [cups, changes];
}