var fs = require('fs');

const util = require('util')


fs.writeFile("Leads_updated.txt","" , (err) => {
    if (err)
      console.log(err);
else
console.log("Leads_fil oprettet") // test - kommer vi så langt ved runtime
});

var trustPilotArr = fs.readFileSync('trustpilot_sorted.txt').toString().split("\n");
var certikatArr = fs.readFileSync('certifikat_sorted.txt').toString().split("\n");
var combinedArr = Array.from(new Set(trustPilotArr.concat(certikatArr)));


var array = fs.readFileSync('AktiveLeads.txt').toString().split("\n");

var newarr = Array.from(new Set(array.concat(combinedArr)))
newarr.sort();


// sort Aktive kunder fra 
// 7661 items i Leads_updated 
var aktiveKunder = fs.readFileSync('aktiveKunder.txt').toString().split("\n");
var deprecatedKunder = fs.readFileSync('InaktiveKunder.txt').toString().split("\n");

console.log(aktiveKunder.length)
var combinedKunderArr = Array.from(new Set(aktiveKunder.concat(deprecatedKunder)));
combinedKunderArr.sort()

// remove kunder fra Leads_updated
const leadsArr = newarr;
const siteToDelete = combinedKunderArr;
console.log(siteToDelete.length)

const namesToDeleteSet = new Set(siteToDelete);
//console.log(namesToDeleteSet.length) // undef

const completeArr = leadsArr.filter((website) => {
    return !namesToDeleteSet.has(website);
});
//console.log(util.inspect(completeArr, { maxArrayLength: 1000 }))

//console.log(util.inspect(completeArr.length, { maxArrayLength: null})) 
console.log(completeArr.length)

for(i in completeArr){

    var res = completeArr[i] 

    fs.appendFile('Leads_updated.txt', res, function (err) {
        if (err) throw err;
      });
   
      //console.log(fs.readFileSync('Leads_updated.txt', "utf8"));
    
}
//