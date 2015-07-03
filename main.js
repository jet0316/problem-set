// var firstReverse = function(string) {
//   var o = '';
//   for (var i = string.length - 1; i >= 0; i--)
//     o += string[i];
//   return o;
// }

// console.log(firstReverse('hello'))



//=============================================================================


var swapCase = function(str){
	
	var string = str.split('')

	for (var i = 0; i < string.length; i++) {
		
		if (string[i] === string[i].toLowerCase()){
			string[i] === string[i].toUpperCase()
		}
		else {
			string[i] === string[i].toLowerCase()
		}
	};
		str = string.join()
		console.log(str)
		return str
}

swapCase('jUSTIN tHIELKE')