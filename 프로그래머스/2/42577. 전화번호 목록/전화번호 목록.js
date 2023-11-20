function solution(phone_book) {
    var answer = !phone_book.sort().some((el, index, self) => self[index + 1]?.startsWith(el))
    return answer;
}