function solution(str) {
    let array = str.split("");
    array.reverse();
    return array.join("");
}

console.log(solution('world'));