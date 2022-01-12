// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    let lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[val];
    // Only change code above this line
    return result;
}

phoneticLookup("alpha");
phoneticLookup("bravo");
phoneticLookup("charlie");
phoneticLookup("delta");
phoneticLookup("echo");
phoneticLookup("foxtrot");
phoneticLookup("");