function correct(string) {
    return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
}

console.log(correct("L0ND0N"));