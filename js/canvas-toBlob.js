$("#save-btn").click(function() {
 	    $("#canvas").get(0).toBlob(function(blob) {
    		saveAs(blob, "chart_1.png");
		});
});

var barChartData = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data : [10,12,4,23,11,14,18]
			},
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,0.8)",
				highlightFill : "rgba(151,187,205,0.75)",
				highlightStroke : "rgba(151,187,205,1)",
				data : [1,21,12,7,18,16,14]
			}
		]
	}
var ctx = $("#canvas").get(0).getContext("2d");
var mychart = new Chart(ctx).Bar(barChartData);
