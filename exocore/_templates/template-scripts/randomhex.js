function my_function (msg) {
    let characters = "0123456789abcdef"
    let str = ""
    for(let i = 0; i < 40; i++){
        str += characters[Math.floor(Math.random() * 16)]
}
module.exports = my_function;