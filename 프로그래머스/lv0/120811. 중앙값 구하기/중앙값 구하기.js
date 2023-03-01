function solution(array) {
    var arr = array.sort(function(a,b){
       return a - b;
    });
    var num = parseInt(arr.length / 2);
    return arr[num];
}