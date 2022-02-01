function remove (string) {
    let i=string.length - 1;
    while(string[i] == "!"){
        i--;
    }
    return string.substring(0,i+1);
}


console.log(remove("Hi!"));