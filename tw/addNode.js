var algo = [];

var algoInterior = new Object;

for(var i = 0; i<20;i++){
	algoInterior.primerValor = i
	algoInterior.segundoValor = i+1
	algo.push(algoInterior);
	algoInterior = {}
}

console.log(algo)
