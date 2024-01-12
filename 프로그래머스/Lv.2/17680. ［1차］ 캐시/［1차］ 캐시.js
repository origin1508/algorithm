function solution(cacheSize, cities) {
    let answer = 0;
    const cache = []
    const hitTime = 1;
    const missTime = 5;
    
    cities.forEach(city => {
        const lowerCaseCity = city.toLowerCase()
        if (cache.includes(lowerCaseCity)) {
            answer += hitTime
        } else {
            answer += missTime
        }
        
        if (cacheSize > 0) {
            cache.push(lowerCaseCity)
            if (cache.indexOf(lowerCaseCity) !== cache.lastIndexOf(lowerCaseCity)) {
                cache.splice(cache.indexOf(lowerCaseCity), 1)
            }
            if (cache.length > cacheSize) {
                cache.shift()
            }
        }
    })
    return answer;
}