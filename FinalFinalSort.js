var fs = require('fs');

var filterArray = fs.readFileSync('AlleKunderOgLeads.txt').toString().split('\n');

var trusPilotEcatArr = fs.readFileSync('final_list.txt').toString().split('\n');

console.log(filterArray.length)
console.log(trusPilotEcatArr.length)


trusPilotEcatArr = trusPilotEcatArr.filter(val => !filterArray.includes(val));

console.log(filterArray.length)
console.log(trusPilotEcatArr.length)



fs.writeFile("final_list_v3.txt","" , (err) => {
    if (err)
      console.log(err);
  else
  console.log("final_list_v3.txt created") // test - kommer vi så langt ved runtime
  });
  
  for(i in trusPilotEcatArr){
  
    var res = trusPilotEcatArr[i] 
    fs.appendFile('final_list_v3.txt', res, function (err) {
          if (err) throw err;
        });
      }
  
