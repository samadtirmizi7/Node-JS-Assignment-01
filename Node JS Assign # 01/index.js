const fs = require("fs");


// 1st Step is how to Created the File in crud
fs.writeFileSync("createfile.txt","First step for crud is to making file...")

// 2nd Step is how to Read the File in crud 

const read = fs.readFileSync("createfile.txt","utf-8");
console.log(read);  

// 3rd Step is how to Update the File in crud

 fs.writeFileSync("createfile.txt","Updated Text is here...")

// 4th Step is how to Delete the File in crud

 fs.unlinkSync("createfile.txt")

// One another Step is how to make the folder

 fs.mkdirSync("newFolder")