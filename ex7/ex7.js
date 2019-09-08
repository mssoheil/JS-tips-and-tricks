module.exports = function() {
	console.log('"0" == false  -> ', "0" == false);
	console.log('"0" == "" -> ', "0" == "");
	console.log("false == 0 -> ", false == 0);
	console.log('false == "" -> ', false == "");
	console.log("false == [] -> ", false == []);
	console.log("false == {} -> ", false == {});
	console.log('"" == 0 -> ', "" == 0);
	console.log('"" == [] -> ', "" == []);
	console.log('"" == {} -> ', "" == {});
	console.log("0 == [] -> ", 0 == []);
	console.log("0 == {} -> ", 0 == {});
	console.log("[] == ![] -> ", [] == ![]);
	console.log('"" == [null] -> ', "" == [null]);
	console.log('0 == "\\n" -> ', 0 == "\n");
	console.log('"true" == true -> ', "true" == true);
};
