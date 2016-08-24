function buildingFunctions() {
	var arr=[];
	for (var i = 0; i < 3; i++) {
		arr.push(
			(function(j)  {
				return function (){
					console.log(j);
				}
			}(i))
		);
	}
	return arr;
}
var output = buildingFunctions();
output[0]();
output[1]();
output[2]();