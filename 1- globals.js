//GLOBALS 

// __dirname - path to current directory
// __filename - file name
// require - functiın to use modules (commonJS)
// module  - info abour current module (file)
// process - info about env where the is being executed

console.log(__filename)
setInterval(() => {
    console.log("hello world")
}, 1000);