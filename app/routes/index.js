import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            lineData: {
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
            },
            barData: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'income',
                    data: [200, 190, 130, 170, 160, 130, 170],
                    backgroundColor: "#3e95cd"
                }, {
                    label: 'outcome',
                    data: [120, 290, 150, 150, 120, 130, 100],
                    backgroundColor: "#8e5ea2"
                }]
            },
            polarRadarData: {
                labels: ['Speed', 'Damage', 'Evade', 'Health'],
                datasets: [{
                    label: 'Warrior',
                    data: [70, 100, 60, 100],
                    borderColor: "#3e95cd"
                }, {
                    label: 'Mage',
                    data: [80, 80, 70, 80],
                    borderColor: "#8e5ea2"
                }]
            },
            pieData: {
                labels: ['June', 'July', 'August'],
                datasets: [{
                    label: 'Temperature',
                    data: [35, 30, 25],
                    backgroundColor: ["#E9967A", "#F5DEB3", "#9ACD32"]
                }]
            },
            doughnutData: {
                labels: ['June', 'July', 'August'],
                datasets: [{
                    label: 'Temperature',
                    data: [36, 35, 31],
                    backgroundColor: ["#E9967A", "#F5DEB3", "#9ACD32"]
                }, {
                    label: 'Wind',
                    data: [28, 32, 30],
                    backgroundColor: ["#D88569", "#E4CDA2", "#89BC21"]
                }]
            },
            options: {
                legend: {
                    display: true,
                    position: "bottom"
                }
            }
        };
    }
});
