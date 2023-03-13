function solution(numbers, direction) {
    if(direction == "right"){
        let tmp = numbers.pop();//마지막값 추출
        numbers.unshift(tmp);//맨앞에 넣기
    }
    else{
        let tmp = numbers.shift(); // 첫번째 값 추출
        numbers.push(tmp); //맨뒤에 넣기
    }
    return numbers;
}