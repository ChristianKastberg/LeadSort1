// filen kan læses og outputtes til et array - tid til at sorte den 
// 1. fjern https://certifikat.emaerket.dk/ fra hver url - evt smart regex - Done
// 2. check der ikke er duplicate URL's - Done 
// 3 ??
// 4 profit

// der er en lille smule dummy data inkluderet... dette kan fjernes når trustpilot 
// arrayet skal merges med ind 
const fs = require('fs')

fs.writeFile("certifikat_sorted.txt","" , (err) => {
    if (err)
      console.log(err);
else
console.log("hello") // test - kommer vi så langt ved runtime
});

// document -> array 
var array = fs.readFileSync('certifikat_adressess_unfiltered.txt').toString().split("\n");
//  fjerner alle potentielle duplicates i listen
var uniquearray =[new Set(array)] 
// laver Set tilbage til et array 
uniquearray = fs.readFileSync('certifikat_adressess_unfiltered.txt').toString().split("\n"); 
uniquearray.sort();
var newarr = [];
for(i in uniquearray){
  newarr.push(uniquearray[i].substr(uniquearray[i].lastIndexOf('/')+1));
}
var dotMatch = newarr.filter(s => s.includes("."));
var finalCleanArr = Array.from(dotMatch)

for(i in finalCleanArr) {
    console.log(i)

    //var result = uniquearray[i].substr(uniquearray[i].lastIndexOf('/')+1);
    var res = finalCleanArr[i]
         fs.appendFile('certifikat_sorted.txt', res, function (err) {
        if (err) throw err;
      });
   
      console.log(fs.readFileSync('certifikat_sorted.txt', "utf8"));    
}

