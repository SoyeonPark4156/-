function solution(n) {
    var answer = 1;
    while(n > 0){
        n = parseInt(n / answer);
        answer++;
        console.log(n)
    }
    
    return answer-2;
}