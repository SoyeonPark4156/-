function solution(my_string, letter) {
    var answer = my_string.split("").filter((element) => element !== letter).join("");
    return answer;
}