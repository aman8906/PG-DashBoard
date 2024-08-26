const rentStatusData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Collected',
            data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
            backgroundColor: '#800000'
        },
        {
            label: 'Pending',
            data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
            backgroundColor: '#ccc'
        }
    ]
};

// Config for Rent Status chart
const rentStatusConfig = {
    type: 'bar',
    data: rentStatusData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render Rent Status chart
const rentStatusCtx = document.getElementById('rentStatusChart').getContext('2d');
new Chart(rentStatusCtx, rentStatusConfig);

// Data for Profitability chart
const profitabilityData = {
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
        {
            label: 'Expenses',
            data: [3000, 4000, 3500],
            backgroundColor: '#800000'
        },
        {
            label: 'Income',
            data: [5000, 7000, 6000],
            backgroundColor: '#ccc'
        }
    ]
};

// Config for Profitability chart
const profitabilityConfig = {
    type: 'bar',
    data: profitabilityData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render Profitability chart
const profitabilityCtx = document.getElementById('profitabilityChart').getContext('2d');
new Chart(profitabilityCtx, profitabilityConfig);

