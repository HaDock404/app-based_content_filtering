function predict_sentiment() {
    var selectElement = document.getElementById("options");
    var selectedValue = selectElement.value;
    console.log("ok click");
    console.log(selectedValue)

    var url = `https://app-serverless-gaeld.azurewebsites.net/api/func_serverless_app?code=AN5j_o4gu0DKwQ7N49e3VRainkZMetZHi54d9gnuySm7AzFuqb1WSQ%3D%3D&user_id=${selectedValue}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        try {
            const jsonData = JSON.parse(data);
            console.log(jsonData);
            displayNumbers(jsonData);
        } catch (e) {
            console.log('La réponse n\'est pas un JSON valide');
        }
    })
    .catch(error => {
        console.error('Erreur lors de la requête :', error);
    });
}

function displayNumbers(numbers) {
    var container = document.getElementById('container');
    container.innerHTML = '';

    numbers.forEach(number => {
        var box = document.createElement('div');
        box.className = 'box';
        box.textContent = number;
        container.appendChild(box);
    });
}

console.log("yea")