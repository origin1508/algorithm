function solution(new_id) {
    var answer = '';
    let temp = "";
    new_id = new_id.toLowerCase();
    const re = new RegExp(/[^a-z0-9-_.]/,"g")
    new_id = new_id.replace(re, "")
    const re1 = new RegExp(/[.]+/,"g")
    new_id = new_id.replace(re1, ".")
    
    if (new_id[0] === ".") new_id = new_id.slice(1)
    if (new_id.at(-1) === ".") new_id = new_id.slice(0, -1)
    if (new_id.length === 0) new_id = "a"
    if (new_id.length >= 16) new_id = new_id.slice(0, 15)
    if (new_id.at(-1) === ".") new_id = new_id.slice(0, -1)
    if (new_id.length <= 2) new_id += new_id.at(-1).repeat(3 - new_id.length)
    return new_id;
}