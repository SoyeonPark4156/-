function solution(n) {
    var answer = 1;
    while(n > 0){
        n = parseInt(n / answer);
        answer++;
        console.log(n)
    }
    
    return answer-2;
}

// function solution(n) {
//     let i = 1;
//     let f = 1;
//     while (f*i < n) f*=++i;
//     return i;
// }
//초간단