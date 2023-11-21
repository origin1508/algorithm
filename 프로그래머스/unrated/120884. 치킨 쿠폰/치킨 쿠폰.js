function solution(chicken) {
    var answer = 0;
    let coupon = chicken
    while (coupon >= 10) {
        const remainCoupon = coupon % 10
        const serviceChicken = Math.floor(coupon / 10)
        answer += serviceChicken
        coupon = serviceChicken + remainCoupon
        
    }
    return answer;
}