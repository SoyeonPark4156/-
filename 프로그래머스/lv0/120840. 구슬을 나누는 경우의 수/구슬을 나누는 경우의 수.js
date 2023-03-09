// function fac(n,m){
//     let result = n;
//     for(let i = n-1; i > m; i--){
//         result *= i;
//     }
//     return result;
// }
// function solution(balls, share) {
//    let num = balls - share;
//     var answer = fac(balls,share) / fac(num,1);
//     return Math.floor(answer);
// } 

function solution(balls, share) {

    return factorial(balls) / (factorial((balls-share)) * factorial(share))
}

function factorial(num) {
    let returnFactorial = BigInt(1)
    for(let i = num; i >= 2; i-- ) {
        returnFactorial*=BigInt(i)
    }
    return returnFactorial
}
