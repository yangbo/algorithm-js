(function(exports){
	function main(){
		d3.select('.showBox').append('svg').append('text')
			.attr('x', 50).attr('y', 160)
			.text('hello d3!');
	}

	function subfun(){
		return 1+1;
	}

	function hello(){
		return subfun();
	}

	exports.main = main;
})(this);

main();