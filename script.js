// your code here
var url = "https://localhost:8080/"
 function urlUpdater()
 {
 var params = {
 name: document.getElementById
("name").value ,
 year: document.getElementById("year").
value,
 };
 let cnt = 0;
 var esc = encodeURIComponent;
 var query = Object.keys(params)
 .map(function(k) {if(params[k] !== "")
 {cnt++;return esc(k) + '=' + esc(params
[k]) + "&";}
 })
 .join('');
 let t = url + "?" + query;
 t = t.substring(0, t.length - 1);
 document.getElementById("url").
innerHTML = t;
 }