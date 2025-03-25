document.getElementById('get-info-btn').addEventListener('click', function() {
    var celebrityName = document.getElementById('celebrity-name').value;
    var apiKey = Figure.apiKey

   
    var countryCodes = {
        "US": "United States",
        "ZA": "South Africa",
        "GB": "United Kingdom",
        "FR": "France",
        "DE": "Germany",
        "IN": "India",
        "NG": "Nigeria",
        "GH": "Ghana",
        "CA": "Canada",
        "AU": "Australia",
        "CN": "China",
        "JP": "Japan",
        "BR": "Brazil",
        "RU": "Russia",
        "IT": "Italy",
        "ES": "Spain",
        "MX": "Mexico",
        "KR": "South Korea",
        "AR": "Argentina",
        "NL": "Netherlands",
        "CH": "Switzerland",
        "SE": "Sweden",
        "BE": "Belgium",
        "NO": "Norway",
        "KE": "Kenya",
        "EG": "Egypt",
        "TZ": "Tanzania",
        "UG": "Uganda",
        "ET": "Ethiopia",
        "PK": "Pakistan",
        "BD": "Bangladesh",
        "PH": "Philippines",
        "NZ": "New Zealand",
        "IE": "Ireland"
    };

    fetch('https://api.api-ninjas.com/v1/celebrity?name=' + celebrityName, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var resultDiv = document.getElementById('result');
        if (data.length > 0) {
            var celebrity = data[0];
            var fullCountry = countryCodes[celebrity.nationality.toUpperCase()] || celebrity.nationality;

            resultDiv.innerHTML = 
                '<h2>' + celebrity.name + '</h2>' +
                '<p><strong>Net Worth:</strong> $' + (celebrity.net_worth || 'N/A') + '</p>' +
                '<p><strong>Nationality:</strong> ' + fullCountry + '</p>' +
                '<p><strong>Birthday:</strong> ' + (celebrity.birthday || 'N/A') + '</p>' +
                '<p><strong>Occupation:</strong> ' + (celebrity.occupation || 'N/A') + '</p>';
        } else {
            resultDiv.innerHTML = '<p>No information found for this celebrity.</p>';
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = '<p>There was an error fetching the data.</p>';
    });
});