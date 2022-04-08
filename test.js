
function Find(){
var nos = document.getElementsByTagName("noscript")[0]; 
var nosHtml = nos.textContent||nos.innerHTML; 

if ( nosHtml )
{
  var temp = document.createElement("div");
  temp.innerHTML = nosHtml;

  document.body.appendChild(temp);
  var ex = document.getElementById("example"); // Ingen adgang til ID :s
  console.log(ex);
  document.body.removeChild(temp);

  alert(ex.innerHTML);
}}
// linje 320
// vi interesere os for det 3 noscript tag
// kan nu vise indholdet af tagget i en alert så er det bare at få den rigtige data ud af det
function FindForReal(){

  var nos = document.getElementsByTagName("noscript");
 
  var str = nos[2].textContent

  var value = str.indexOf("value="); 

  //alert(value);

  var result = str.slice(value + 6, str.length-36)
  alert(result)

  //let result  = /(?<=value=)(.*?)(?=\&currency)/.exec(str) 

  alert(result[0])
  }

