Highcharts.chart('pie', {
    chart: {
        type: 'pie',
    },
    title: {
        text: 'Total Sales'
    },
    series: [{
        data: [
            ['Current Month', 80],
            ['Last Month', 20]
        ]
    }]
});