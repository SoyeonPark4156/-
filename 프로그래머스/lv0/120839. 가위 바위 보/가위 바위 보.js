function solution(rsp) {
    const ob = {
        "2" : "0",
        "0" : "5",
        "5" : "2"
    }
    var answer = rsp.split("").map(v => ob[v]).join("");
    
    return answer;
}