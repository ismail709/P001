import $ from "jquery";
import jQuery from "jquery";
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';
import Chart from 'chart.js/auto';

new DataTable('#sales-table', {
    responsive: true,
    paging:false
});

let chart1 = new Chart($("#reports-chart")[0], {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: '#1565C0',
                backgroundColor: '#1565C033',
                fill: true,
                tension: 0.5
            },
            {
                label: 'Revenue',
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: '#006400',
                backgroundColor: '#00640033',
                fill: true,
                tension: 0.5
            },
            {
                label: 'Customers',
                data: [35, 29, 60, 71, 40, 25, 20],
                borderColor: '#FF7B00',
                backgroundColor: '#FF7B0033',
                fill: true,
                tension: 0.5
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 10,
                    boxHeight: 10
                }
            }
        }
    }
});

let chart2 = new Chart($("#budget-chart")[0], {
    type: "radar",
    data: {
        labels: [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
          ],
          datasets:[{
            label: 'Allocated Budget',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: '#00AF5411',
            borderColor: '#00AF54',
          }, {
            label: 'Actual Spending',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: '#007CBE11',
            borderColor: '#007CBE',
          }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    },
});
let chart3 = new Chart($("#traffic-chart")[0], {
    type: "doughnut",
    data: {
        labels: [
          'Search Engine',
          'Direct',
          'Email',
          'Union Ads',
          'Video Ads'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [10, 30, 25,20,15],
          backgroundColor: [
            '#FFBE0B',
            '#FB5607',
            '#FF006E',
            '#8338EC',
            '#3A86FF',
          ],
          hoverOffset: 4
        }]
      },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    },
});

$(".nav-items > .nav-item:nth-child(2) > .nav-link").on("click",()=>{
    $(".nested-nav").toggleClass("nested-nav--active");
});

$(".nav-btn").on("click",()=> {
    $(".nav-menu").toggleClass("nav-menu--show");
})
$(".search-btn").on("click",()=> {
    $(".search-box").toggleClass("search-box--show");
})