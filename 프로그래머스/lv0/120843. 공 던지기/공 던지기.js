function solution(numbers, k) {
    var answer = 0;
    //2*(k-1)번째꺼 구하기
    answer = (2*(k-1)) % numbers.length + 1;
    
    return answer;
}