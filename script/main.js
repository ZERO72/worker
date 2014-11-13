/* Main JS file for WebWorker Test */

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