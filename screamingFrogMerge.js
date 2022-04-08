var fs = require('fs');


fs.writeFile("final_list.txt","" , (err) => {
    if (err)
      console.log(err);
else
console.log("final_list.txt reset") // test - kommer vi så langt ved runtime
});

var certificateArray = fs.readFileSync('certifikat_sorted.txt').toString().split("\n");
var trustArray = fs.readFileSync('trustpilot_sorted.txt').toString().split("\n");

var newarr = [];
newarr = certificateArray.concat(trustArray);
var copyArray = newarr;

console.log(copyArray)

for(i in copyArray){
    
    var res = copyArray[i] 

    fs.appendFile('final_list.txt', res, function (err) {
        if (err) throw err;
      });
   
      //console.log(fs.readFileSync('final_list.txt', "utf8"));    
}

// duplicate example 
var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5];

var duplicates = array1.filter(function(val) {
  return array2.indexOf(val) != -1;
});
array1 = array1.filter(val => array2.includes(val));
console.log(array1);

//7670 Leads_updated 