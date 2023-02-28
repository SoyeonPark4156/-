function solution(numer1, denom1, numer2, denom2) {
    
    let p_num = denom1 * denom2;
    let c_num = numer1 * denom2 + numer2 * denom1;
    
    let tmp = 1;
    for(let i = 1; i <= c_num ; i++){
        if(p_num % i === 0 && c_num % i === 0){
           tmp = i;
        }
    }
    
    return [c_num / tmp,p_num / tmp];
}