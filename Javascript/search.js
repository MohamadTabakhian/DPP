// Search JSON

const data = [
    {
        "name": "5ml Bottle",
        "code": "3102xxxx0205",
        "url": "http://127.0.0.1:5500/dropbottle1-info.html"
    },
    {
        "name": "Bottle B",
        "code": "750311",
        "url": "https://bottle-b.com"
    },
    {
        "name": "Bottle C",
        "code": "760311",
        "url": "https://bottle-c.com"
    },
    {
        "name": "Bottle D",
        "code": "770311",
        "url": "https://bottle-d.com"
    }
];

// EventListener

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const results = data.filter(item => item.name.toLowerCase().includes(query) || item.code.includes(query));
    
    displayResults(results);
});

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ""; // Clear previous results

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>No items found.</p>';
        return;
    }

    results.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<p><strong>${item.name}</strong> (Code: ${item.code}) - <a href="${item.url}" target="_blank">View</a></p>`;
        resultsDiv.appendChild(itemDiv);
    });
}