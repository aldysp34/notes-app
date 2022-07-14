/* Import Node Module */
const fs = require('fs')

/* Create New File with rewrite content*/
fs.writeFileSync('example.txt', 'This is the result of writeFileSync')

/* Append new content to the file */
fs.appendFileSync('example.txt', '\nThis is the result of appendFileSync')
let arrWord = ['Hello my name is Muhammad Aldi Surya Putra', 'I am 22 years old', 'and Fuckyou']
for (let i in arrWord){
    fs.appendFileSync('example.txt', '\n'+arrWord[i])
}