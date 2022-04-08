// gracefull-fs til at håndtere too many open files err
var fs = require('graceful-fs');
fs.writeFile("Leads_updated_HTTP.txt","" , (err) => {
    if (err)
      console.log(err);
else
console.log("Leads_fil appended") // test - kommer vi så langt ved runtime
});


// screamingfrog kræver at de urls den crawler starter med https://www. 

var LeadsAppendArr = Array.from(fs.readFileSync('Leads_updated.txt').toString().split("\n"));


console.log(LeadsAppendArr.length)

for(i in LeadsAppendArr){
    var appendString = "https://www."

    var res = appendString+LeadsAppendArr[i];
    fs.appendFile('Leads_updated_HTTP.txt', res, function (err) {
        if (err) throw err;
      });
    }