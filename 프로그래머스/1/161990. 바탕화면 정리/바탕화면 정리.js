function solution(wallpaper) {
    let start = [Infinity, Infinity];
    let end = [0, 0];
    wallpaper.forEach((row, i) => {
        [...row].forEach((el, j) => {
            if (el === "#") {
                start = [Math.min(start[0], i), Math.min(start[1], j)]
                end = [Math.max(end[0], i + 1), Math.max(end[1], j + 1)]
            }
        })
    })
    return [...start, ...end];
}