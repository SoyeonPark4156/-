function solution(money) {
    let num = parseInt(money / 5500);
    let remain = money - (5500 * num);
    return [num , remain];
}