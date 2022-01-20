function fakeBin(x){
    let outString = "";
    for (let i = 0; i < x.length; i++){
        if (x[i] < 5){
            outString += "0";
        } else {
            outString += "1";
        }
    }
    return outString;
}

console.log(fakeBin("45385593107843568"));
console.log(fakeBin("509321967506747"));