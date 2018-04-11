var throttle = require('./lib/throttle');
var test = require('tape');

test('throttle', function(t){

	var useFuncCalled = false;

	var expressAppMock = {
		use: function(){
			useFuncCalled = true;
		}
	};

	t.equal(typeof throttle, 'function');

	throttle(expressAppMock);

	t.equal(useFuncCalled, true);

	t.end();

	//TODO: Add more tests...
});
