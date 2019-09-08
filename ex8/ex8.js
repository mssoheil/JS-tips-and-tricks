module.exports = function() {
	console.log('["42"] < ["043"]  -> ', ["42"] < ["043"]);
	console.log("[4,2] < [0,4,3]  -> ", [4, 2] < [0, 4, 3]);
	console.log("{b: 42} < {b: 43}  -> ", { b: 42 } < { b: 43 });
	console.log("{b: 42} <= {b: 43}  -> ", { b: 42 } <= { b: 43 });
};
