function checkScope() {
    let i = 'function scope';
    if (true) {
        leti = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

checkScope();