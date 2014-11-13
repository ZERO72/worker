/* Main JS file for WebWorker Test */


var pageIndex = 1;

var data = {

	init:function() {

		// get data

	}

	getNext:function() {

		var url = '../data/page'+pageIndex+'.js';

		jQuery.getJSON( url_json, function( data ) {

			console.log(data);

			pageIndex++;
		

		});

	}

}

var workerAjaxCall = new Worker('script/workers/worker.ajaxcall.js');
	
	workerAjaxCall.addEventListener('message', function(e){
		console.log("worker said: ", e.data);
	}, false);

	var data = {
		"url" : "urletje",
 		"msg" : "hello world"
	};

	workerAjaxCall.postMessage(data); // Start the worker.
