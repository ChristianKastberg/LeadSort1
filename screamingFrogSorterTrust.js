
// obs dummy data skal filtreres fra


const fs = require('fs');


fs.writeFile("trustpilot_sorted.txt","" , (err) => {
    if (err)
      console.log(err);
else
console.log("hello") // test - kommer vi så langt ved runtime
});

// document -> array 
var array = fs.readFileSync('TrustPilot_Unfiltered.txt').toString().split("\n");
//  fjerner alle potentielle duplicates i listen
var uniquearray =[new Set(array)] 
// laver Set tilbage til et array 
uniquearray = fs.readFileSync('TrustPilot_Unfiltered.txt').toString().split("\n"); 
//uniquearray.findIndex(element => element.includes(regex))


var matches = uniquearray.filter(s => !s.includes("categories"));
var cleanArrayV1 = Array.from(matches);
var sencondMatch = cleanArrayV1.filter(s => !s.includes("?page"));
var cleanArray = Array.from(sencondMatch);
cleanArray.sort();
var newarr = [];
for(i in cleanArray){
   newarr.push(cleanArray[i].substr(cleanArray[i].lastIndexOf('/')+1));
}
var dotMatch = newarr.filter(s => s.includes("."));
var finalCleanArr = Array.from(dotMatch)

for(i in finalCleanArr) { 
    console.log(i)
    var res = finalCleanArr[i];

         fs.appendFile('trustpilot_sorted.txt', res, function (err) {
        if (err) throw err;
      });
    }
   
     console.log(fs.readFileSync('trustpilot_sorted.txt', "utf8"));    


