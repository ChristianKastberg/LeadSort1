var fs = require('fs');

var data = "hello world";

fs.writeFile("world.txt",data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("world.txt", "utf8"));
    }
  });