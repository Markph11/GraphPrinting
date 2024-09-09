document.addEventListener("DOMContentLoaded", function() {
    // Profile dropdown toggle
    const profileButton = document.getElementById('profileButton');
    const profileMenu = document.getElementById('profileMenu');



    profileButton.addEventListener('click', function() {
        profileMenu.classList.toggle('show');
    });



    // Nav toggle for sidebar
    const navToggle = document.getElementById('navToggle');
    const sidebar = document.querySelector('.sidebar');


    
    navToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        navToggle.classList.toggle('active'); // Toggle button appearance
    });

    // Chart.js for Purchase and Sales graph
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Purchase',
                data: [12, 19, 3, 5, 2, 3, 7],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Sales',
                data: [7, 11, 5, 8, 3, 7, 2],
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
