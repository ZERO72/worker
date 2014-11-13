/* Main JS file for WebWorker Test */
<<<<<<< Updated upstream

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

	var worker = new Worker('workers/worker.lazyload.js');
=======
var workerAjaxCall = new Worker('script/workers/worker.ajaxcall.js');
>>>>>>> Stashed changes

	
	workerAjaxCall.addEventListener('message', function(e){
		console.log("worker said: ", e.data);
	}, false);

<<<<<<< Updated upstream
	worker.postMessage('hello world'); // Start the worker.

=======
	var data = {
		"url" : "urletje",
 		"msg" : "hello world"
	};

	workerAjaxCall.postMessage(data); // Start the worker.
>>>>>>> Stashed changes
