var Module = {
	'print' : function(text){
  var output = "<p>" + text + "</p>";
  
}
Module['printErr'] = function(text){
  console.log(text);
  var output = "<p>" + text + "</p>";
  document.getElementById("text").innerHTML = output;
}
}

var Module = {
	print: function(text){
		//console.log(text);
		document.getElementById("text").innerHTML = text;
	},
	printErr: function(text) {
		//console.log(text);
		document.getElementById("text").innerHTML = text;
	}
};