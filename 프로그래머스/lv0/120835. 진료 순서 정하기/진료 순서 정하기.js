function solution(emergency) {
    var answer = [];
    let arr = [...emergency].sort((a,b) => b - a);
    for(let i = 0; i<arr.length;i++){
        answer.push(arr.findIndex(e => e == emergency[i])+1);
    }
    return answer;
}
//arr 이라는 변수에 emergency를 [76,24,3] 이처럼 내림차순 한 배열을 넣어줌
//이때 emergency는 얕은복사를 해줬기 때문에 변하지 않는다
//arr의 길이만큼 for문 돌려서 arr에서 emergency의 배열의 요소와 일치하는 요소의 index값을 찾아줌
// 이때 index는 0부터 시작하기 때문에 마지막에 +1을 해주었다.


// function solution(emergency) {
//     let sorted = emergency.slice().sort((a,b)=>b-a);
//     return emergency.map(v=>sorted.indexOf(v)+1);
// }
// 기존의 배열에서 map을 돌려서 정렬한 배열의 요소값의 index값을 찾는 방법! 