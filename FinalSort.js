// AktiveLeads, allekunder, aktivekunder, inaktivekunder 
// skal sorteres fra final.txt 

var fs = require('fs');

var inaktivkArray = fs.readFileSync('InaktiveKunder.txt').toString().split("\n");
var allekArray = fs.readFileSync('alleKunder.txt').toString().split("\n");
var aktivekArray = fs.readFileSync('aktiveKunder.txt').toString().split("\n");
var aktiveLArray = fs.readFileSync('AktiveLeads.txt').toString().split("\n");
/** 
console.log(inaktivkArray.length)
console.log(allekArray.length)
console.log(aktivekArray.length)
console.log(aktiveLArray.length)
*/ 
// Works kan se længderne på arraysne - evt check hver liste igennem for manglene mellemrum

// concat remove duplicates - concat fjerner ikke dupes err
var combinedarr1 = [];
var combinedarr2 = [];
var combinedarr3 = [];
 combinedarr1 = inaktivkArray.concat(aktivekArray);
 combinedarr2 = allekArray.concat(aktiveLArray);
 combinedarr3 = combinedarr1.concat(combinedarr2);

var filterArr = combinedarr3;
// 


// temp til filter
/** 
fs.writeFile("temp.txt","" , (err) => {
  if (err)
    console.log(err);
});

for(i in filterArr){
    
  var res = filterArr[i] 
fs.appendFile('temp.txt', res, function (err) {
      if (err) throw err;
    });
  }
  */

// err i split
var temparr = fs.readFileSync('temp.txt').toString().split('\n'); // works

var finalArray = fs.readFileSync('final_list.txt').toString().split('\n');
console.log(temparr.length)

// filtrer Alt der allerede er i AktiveLeads, allekunder, aktivekunder, inaktivekunder
// fra 5273 -> 4658 
// temparr havde ikke ! forand....
finalArray = finalArray.filter(val => !temparr.includes(val));



console.log(finalArray.length)





fs.writeFile("final_list_ExistRemoved.txt","" , (err) => {
  if (err)
    console.log(err);
else
console.log("final_list_ExistRemoved.txt created") // test - kommer vi så langt ved runtime
});

for(i in finalArray){

  var res = finalArray[i] 
  fs.appendFile('final_list_ExistRemoved.txt', res, function (err) {
        if (err) throw err;
      });
    }
