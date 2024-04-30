document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    menuBtn.addEventListener('click', () => {
        // Toggle sidebar based on its current position
        if (sidebar.style.left === '0px') {
            sidebar.style.left = '-250px';
            mainContent.style.marginLeft = '0';
        } else {
            sidebar.style.left = '0px';
            mainContent.style.marginLeft = '250px';
        }
    });

    document.getElementById('income').textContent = '$23,485';
    document.getElementById('cars-sold').textContent = '17';

    var ctx = document.getElementById('salesGraph').getContext('2d');
    var salesGraph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Cars Sold',
                data: [5, 2, 4, 6],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

