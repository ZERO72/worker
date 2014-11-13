/* Main JS file for WebWorker Test */
var worker = new Worker('workers/worker.lazyload.js');

	worker.addEventListener('message', function(e){
		console.log("worker said: ", e.data);
	}, false);

	worker.postMessage('hello world'); // Start the worker.
