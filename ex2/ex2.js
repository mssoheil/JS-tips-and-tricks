module.exports = function() {
	const stringify = JSON.stringify(
		{
			a: 2,
			b: function() {
				return 1;
			},
		},
		null,
		2
	);

	console.log(stringify);
};
