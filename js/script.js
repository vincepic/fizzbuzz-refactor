$(function(){
	console.log( "ready!" );
	input(prompt("Enter any whole number:").trim());
	function input(x){
		if (x == false || undefined){
			confirm("What I learned in boating school is: Blankety. Blankety. Blank.");}
		else if (x % 1 !== 0){
			confirm("WHOLE number");}
		else{
			fizzbuzz(parseInt(x));
			function fizzbuzz(y){
				var i = 0;
				while (i !== y){
					i++;
					if (i % 3 == 0 && i % 5 == 0){
						var a = "<p>Fizzbuzz</p>"
						$("#docB").append(a)}
					else if (i % 3 == 0){
						var b = "<p>Fizz</p>"
						$("#docB").append(b)}
					else if (i % 5 == 0){
						var c = "<p>Buzz</p>"
						$("#docB").append(c)}
					else{
						var d = "<p>" + i + "</p>"
						$("#docB").append(d)}
				}
			}
		}
	}
});