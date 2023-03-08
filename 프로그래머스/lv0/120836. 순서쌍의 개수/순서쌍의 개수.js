
    // const count = (a,b) => a*b == n;
    
    // for(let i=1;i<=n;i++){
    //     for(let j=1;j<=n;j++){
    //         if(i*j == n){
    //             answer++;
    //         }
    //     }
    // }
    
    function solution(n) {
    // 정답 배열 생성
    const result = []
    // 1부터 n까지 반복하며 모든 약수를 정답 배열에 입력
    for(let i = 1 ; i <= n ; i ++) {
        if(n%i === 0) result.push(i)
    }
    // 모든 약수의 수는 순서쌍의 수와 같음
    return result.length;
}
