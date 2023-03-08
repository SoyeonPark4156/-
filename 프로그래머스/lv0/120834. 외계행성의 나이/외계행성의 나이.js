function solution(age) {
    var age_arr = age.toString().split("");
    var answer = [];
    for(let i =0;i< age_arr.length;i++){
        answer.push(String.fromCharCode(+age_arr[i] + 97))
    }
    return answer.join("");
}
//아스키코드 a~z : 97~122