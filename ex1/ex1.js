module.exports = function () {

	const stringify = JSON.stringify([1, undefined, function () {
		return 1
	}, 4]);

	console.log(stringify)

}