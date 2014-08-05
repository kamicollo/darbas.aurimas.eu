(function($) {
	// Pretty tooltips
	$('#change').tooltip();
	
	
	// Chart
	var chart = new Highcharts.Chart({
		chart: {
			renderTo: "chart",
			type: "area",
			backgroundColor: null,
		},
		
		colors: [
			"#F665AB"
		],
		
		title: {
			text: null
		},
		
		legend: {
			enabled: false,
		},
		
		credits: {
			text: "Duomenys: SoDra.",
			href: "http://www.sodra.lt/lt/paslaugos/informacijos_rinkmenos/draudeju_duomenys",
			style: {
				color: "#666"
			}
		},
		
		xAxis: {
			type: "datetime",
			lineColor: "#CCC",
			labels: {
				y: -10,
				style: {
					color: "#DDD"
				}
			}
		},
		
		yAxis: {
			title: null,
			gridLineWidth: 0,
			labels: {
				enabled: false
			}
		},
		
		tooltip: {
			formatter: function() {
				return this.series.name + " " + Highcharts.dateFormat("%b %e", this.x) + ": <b>"+
					Highcharts.numberFormat(this.y, 0) + "</b>";
			}
		},
		
		plotOptions: {
			area: {
				lineWidth: 1,
				marker: {
					enabled: false,
					symbol: "circle",
					radius: 2,
					states: {
						hover: {
							enabled: true
						}
					}
				}
			}
		},
		
		series: [{
			type: 'area',
			name: "Darbuotojų skaičius",
			pointInterval: 24 * 3600 * 1000,
			pointStart: Date.UTC(2012, 0, 01),
			data: [6 , 11, 32, 110, 235, 369, 640,
				1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
				27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
				26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
				24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
				22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
				10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104 ]
			}]
		});
})(jQuery);