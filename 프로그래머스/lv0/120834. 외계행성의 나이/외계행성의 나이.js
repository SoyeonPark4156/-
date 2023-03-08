function solution(age) {
    var age_arr = age.toString().split("");
    var answer = [];
    for(let i =0;i< age_arr.length;i++){
        answer.push(String.fromCharCode(+age_arr[i] + 97))
    }
    return answer.join("");
}
//아스키코드 a~z : 97~122


// function solution(age) {
//   return age
//     .toString()
//     .split("")
//     .map((v) => "abcdefghij"[v])
//     .join("");
// }
//문자열에도 인덱스가 있어서...이렇게 쉽게 풀기 가능