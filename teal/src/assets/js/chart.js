	/*
Author       : Dreamguys
Template Name: Medifab - Bootstrap Admin Template
Version      : 1.0
*/
(function ($) {
	"use strict";
	
	// Bar Chart

	var barChartData = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],


		datasets: [{
			label: 'Dataset 1',
			backgroundColor: 'rgba(1, 181, 199, 0.5)',
			borderColor: 'rgba(1, 181, 199, 1)',
			borderWidth: 1,
			data: [35, 59, 80, 81, 56, 55, 40]
		}, {
			label: 'Dataset 2',
			backgroundColor: 'rgba(228, 228, 228, 0.5)',
			borderColor: 'rgba(228, 228, 228, 1)',
			borderWidth: 1,
			data: [28, 48, 40, 19, 86, 27, 90]
		}]

	};

	var ctx = document.getElementById('bargraph').getContext('2d');
	window.myBar = new Chart(ctx, {
		type: 'bar',
		data: barChartData,
		options: {
			responsive: true,
			legend: {
				display: false,
			}
		}
	});

	var data = {
		labels: [
			"Red",
			"Blue",
			"Yellow"
		],
		datasets: [{
			data: [300, 50, 100],
			backgroundColor: [
				"#FF6384",
				"#36A2EB",
				"#FFCE56"
			],
			hoverBackgroundColor: [
				"#FF4394",
				"#36A2EB",
				"#FFCE56"
			]


		}]
	};

	var options = {
		cutoutPercentage: 40,
	};


	var lineChartData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		datasets: [{
			label: "My First dataset",
			backgroundColor: "rgba(1, 181, 199, 0.5)",
			data: [100, 70, 20, 100, 120, 50, 70, 50, 50, 100, 50, 90]
		}, {
			label: "My Second dataset",
			backgroundColor: "rgba(228, 228, 228, 1)",
			fill: true,
			data: [28, 48, 40, 19, 86, 27, 20, 90, 50, 20, 90, 20]
		}]
	};

	var linectx = document.getElementById('canvas').getContext('2d');
	window.myLine = new Chart(linectx, {
		type: 'line',
		data: lineChartData,
		options: {
			responsive: true,
			legend: {
				display: false,
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			}
		}
	});

	$(document).ready(function () {
		barChart();

		$(window).resize(function () {
			barChart();
		});

		function barChart() {
			$('.bar-chart').find('.item-progress').each(function () {
				var itemProgress = $(this),
					itemProgressWidth = $(this).parent().width() * ($(this).data('percent') / 100);
				itemProgress.css('width', itemProgressWidth);
			});
		};
	});
})(jQuery);