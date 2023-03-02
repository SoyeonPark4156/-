function solution(numbers) {
    const totalSum = numbers.reduce(function add(sum,currNum){return sum + currNum},0);
    var answer = totalSum / numbers.length;
    answer = Math.round(answer*10) / 10;
    return answer;
}