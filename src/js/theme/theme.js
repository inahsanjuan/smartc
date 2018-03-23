var options = {
    chart: {

    },
    credits: {
        enabled: false
    },
    colors: ['#81cd4e', '#dadcde'],
    plotOptions: {
        pie: {
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true,
            states: {
                hover: {
                    halo: {
                        size: 0,
                    }
                }
            }
        }
    }
};

Highcharts.setOptions(options);