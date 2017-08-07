
function convert(degree)
	{
		var x;
		
		if (degree == "C")
		{
			x = document.getElementById("IF02").value;
			x = x * 9/5 + 32;
			$("#IF02").val(x);
			
			console.log(x);
		}
		
		
		if (degree == "F")
		{
			x = document.getElementById("IF01").value;
			x = (x - 32) * 5/9;
			console.log(x);
		}
		
	}