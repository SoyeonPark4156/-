function solution(dot) {
    if(dot[0] * dot[1] > 0){
        if(dot[1] > 0){
            return 1;
        }else{
            return 3;
        }
    }
    else{
        if(dot[1] > 0){
            return 2;
        }
        else{
            return 4;
        }
    }
}
// function solution(dot) {
//     const [num,num2] = dot;
//     const check = num * num2 > 0;
//     return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
// }