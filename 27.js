// Write a node JS script that perform the following operation using path module and async file module :
// 1. From the given existing file path,extract the directory name using the path module.
// 2. Create the extracted directory inside an existing folder using the file system module.
// 3. Extract the file name from the given path using the path module.
// 4. Create that file inside the newly created directory and write some data into it.
// 5. Copy the content from this file to another file.
// 6. Delete the original file after copying the content.

const fs = require("fs");
const path = require("path");

op="LJ/Sample1.txt"
let dir1 = path.dirname(op);
let filename = path.basename(op);
let newfilepath = dir1 + "/" + filename;
fs.mkdir(dir1, (err) => {
  if (err) throw err;
  console.log("file created ", dir1);

  fs.writeFile(newfilepath, "sample", (err) => {
    if (err) throw err;
    console.log(" original file", newfilepath);

    fs.copyFile(newfilepath, dir1 + "/temp.txt", (err) => {
      if (err) throw err;
      console.log(" data writenn ", newfilepath);

      fs.unlink(newfilepath, (err) => {
        if (err) throw err;
        console.log(" original deleted", newfilepath);
      });
    });
  });
});

