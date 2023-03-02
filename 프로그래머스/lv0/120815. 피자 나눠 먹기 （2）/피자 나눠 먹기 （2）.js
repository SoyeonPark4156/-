function solution(n) {
    var answer = 0;
    for(let i=0;i<n;i++){
        answer++;
        if((answer*6)%n === 0){
            return answer;
        }
    }
}