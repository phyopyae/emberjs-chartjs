import Ember from 'ember';

export default Ember.Controller.extend({
    selectedChart: null,
    chartName: null,
    data: [],
    jsonData: [],
    charts: [
        {
            name: 'Line Chart',
            type: 'line'
        },
        {
            name: 'Bar Chart',
            type: 'bar'
        },
        {
            name: 'Polar Area Chart',
            type: 'polarArea'
        },
        {
            name: 'Radar Chart',
            type: 'radar'
        },
        {
            name: 'Pie Chart',
            type: 'pie'
        },
        {
            name: 'Doughnut Chart',
            type: 'doughnut'
        }
    ],
    actions: {
        changeChart(chart) {
            if (chart) {
                this.set("selectedChart", chart);
            }

            if (Object.keys(this.get("data")).length > 0) {
                this.send('create', this.get("data"), this.get("chartName"));
            }
        },
        create(jsonData, chartName) {
            var self = this;
            let tempData = {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'apples',
                    data: [12, 19, 3, 17, 6, 3, 7],
                    borderColor: "#3e95cd"
                }, {
                    label: 'oranges',
                    data: [2, 29, 5, 5, 2, 3, 10],
                    borderColor: "#8e5ea2"
                }, {
                    label: 'grapes',
                    data: [5, 9, 15, 15, 22, 12, 1],
                    borderColor: "#3cba9f"
                }]
            };
            if (jsonData && Object.keys(jsonData).length > 0) {
                if (jsonData instanceof String) {
                    tempData = JSON.parse(jsonData);
                } else {
                    tempData = jsonData;
                }
            }

            let tempDatasets = tempData.datasets;
            tempData.datasets.forEach(function (item, index) {
                let tmp = tempData.datasets[index];
                if (self.get("selectedChart").type === 'bar') {
                    if (!tmp.backgroundColor) {
                        tmp.backgroundColor = tempData.datasets[index].borderColor;
                        delete tmp['borderColor'];
                    }
                } else {
                    if (!tmp.borderColor) {
                        tmp.borderColor = tempData.datasets[index].backgroundColor;
                        delete tmp['backgroundColor'];
                    }
                }
            });

            if (chartName) {
                this.set("chartName", chartName);
            } else {
                this.set("chartName", "No Title");
            }
            this.set("jsonData", JSON.stringify(tempData));
            this.set("data", tempData);
        }
    }
});
