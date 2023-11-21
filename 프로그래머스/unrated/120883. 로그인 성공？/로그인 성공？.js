function solution(id_pw, db) {
    const dbMap = new Map(db)
    var answer = dbMap.has(id_pw[0]) ? dbMap.get(id_pw[0]) === id_pw[1] ? "login" : "wrong pw" : "fail"
    return answer;
}