function solution(n) {
    var answer = [];
    let count = 0;
    for(let i = 1; i<=n;i++){//i는 1부터 n까지의 숫자들
        let count = 0;
            for(let j=1;j<=i;j++){ //약수찾기, j는 i를 나눌 숫자들
                if(i%j == 0){
                    count++;
                }
            }
        if(count >= 3){
                answer.push(i);
            }
    }
    return answer.length;
}