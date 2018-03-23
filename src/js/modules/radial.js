Highcharts.chart('radial', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Total Schedule Hours'
    },
    plotOptions: {
        pie: {
            size:'100%'
        }
    },
    series: [{
        data: [80],
        type: 'pie',
        size: '60%',
        innerSize: '40%'
    }, {
        data: [50],
        type: 'pie',
        size: '85%',
        innerSize: '65%'
    }, {
        data: [10],
        type: 'pie',
        size: '100%',
        innerSize: '80%'
    }]
});