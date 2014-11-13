/* Main JS file for WebWorker Test */
<<<<<<< HEAD

var pageIndex = 1;

var data = {

	init:function() {

		// get data



	}

	getNext:function() {

		var url = '../data/page'+pageIndex+'.js';

		jQuery.getJSON( url_json, function( data ) {
		

		
		
		});


	}

}
=======
var worker = new Worker('workers/worker.lazyload.js');

	worker.addEventListener('message', function(e){
		console.log("worker said: ", e.data);
	}, false);

	worker.postMessage('hello world'); // Start the worker.
>>>>>>> FETCH_HEAD
