Highcharts.chart('donut', {
    chart: {
        type: 'pie',
    },
    title: {
        text: 'Total Tasks'
    },
    tooltip: {
        pointFormat: '${point.percentage:.1f}'
    },
    plotOptions: {
        pie: {
            innerSize: 30,
        }
    },
    series: [{
        data: [
            ['Complete', 60],
            ['Past Due', 20],
            ['Coming Up', 20],
        ],
    }]
});