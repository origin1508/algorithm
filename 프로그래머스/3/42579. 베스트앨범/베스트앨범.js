function solution(genres, plays) {
    var answer = [];
    const genreRank = {}
    const songs = plays.map((play, idx) => {
        if (genres[idx] in genreRank) {genreRank[genres[idx]] += play}
        else { genreRank[genres[idx]] = play}
        return {"genre": genres[idx], "id": idx, "play": play}
    }).sort((a, b) => b.play - a.play || a.id - b.id)
    
    return Object.keys(genreRank).sort((a, b) => genreRank[b] - genreRank[a]).map(genre => {
        return songs.filter(song => song.genre === genre).slice(0, 2).map(el => el.id)
    }).reduce((acc, cur) => [...acc, ...cur])
}